/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../component/Heading";
import Link from "next/link";
import { useAppData } from "../context/AppDataContext";

export default function Page() {
  const { projects } = useAppData();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openSlider = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const closeSlider = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const goToNext = () => {
    const images = getProjectImages(selectedProject);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    const images = getProjectImages(selectedProject);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getProjectImages = (project) => {
    if (!project) return [];
    
    // Check if projectImages exists and is a string of comma-separated URLs
    if (project.projectImages && typeof project.projectImages === 'string') {
      return project.projectImages.split(',').map(url => url.trim());
    }
    
    // Fallback to the main imageLink if no additional images
    return [project.imageLink];
  };

  return (
    <div className="p-6">
      <div className="heading">
        <Heading title="Projects" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            title={project?.projectName}
            technologies={project?.technologies}
            projectlink={project?.projectURL}
            image={project?.imageLink}
            project={project}
            onImageClick={() => openSlider(project)}
          />
        ))}
      </div>

      {/* Image Popup Slider */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeSlider}
            className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
          
          <div className="relative max-w-4xl w-full max-h-full overflow-hidden">
            <button 
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-75 transition-all"
              aria-label="Previous image"
            >
              &#8249;
            </button>
            
            <div className="overflow-hidden rounded-lg">
              <Image
                src={getProjectImages(selectedProject)[currentImageIndex]}
                alt={selectedProject.projectName}
                width={800}
                height={600}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            </div>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-75 transition-all"
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {getProjectImages(selectedProject).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute bottom-12 left-0 right-0 text-white text-center">
            <p className="text-lg font-semibold">{selectedProject.projectName}</p>
            <p className="text-sm">
              {currentImageIndex + 1} / {getProjectImages(selectedProject).length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ title, technologies, projectlink, image, project, onImageClick }) {
  const hasMultipleImages = project.projectImages && project.projectImages.split(',').length > 1;
  
  return (
    <div className="border-[1px] border-[#282829] p-4 bg-[#1E1E1F] flex flex-col justify-start items-start gap-4 rounded-xl">
      <div className="relative cursor-pointer" onClick={onImageClick}>
        <Image
          className="rounded w-full"
          width={250}
          height={250}
          src={image}
          alt={title}
        />
        {/* {hasMultipleImages && ( */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <span className="text-white text-sm bg-black bg-opacity-60 px-2 py-1 rounded">
              View Images
            </span>
          </div>
        {/* )} */}
      </div>

      <div className="content w-full">
        <div className="flex w-full justify-between items-center">
          <h2 className="title text-md font-semibold leading-tight m-0 p-0">
            {title}
          </h2>
          {projectlink && (
            <Link 
              className="py-1 px-4 rounded-[20px] text-[11px] border-[1px] border-gray-300 hover:bg-gray-300 hover:text-black transition-colors" 
              href={projectlink}
              target="_blank"
            >
              Visit
            </Link>
          )}
        </div>
        <div className="text-sm leading-tight mt-2">{technologies}</div>
      </div>
    </div>
  );
}