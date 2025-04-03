'use client'
import Image from "next/image";
import React from "react";
import Heading from "../component/Heading";
import projects from "@/public/data/projects.json";
import Link from "next/link";


export default function page() {

  /* 
   {
        "title": "LMS Platform",
        "technologies": "WordPress, Tutor LMS, Elementor",
        "link": "https://brittolearning.com/",
        "image": "../Images/projectimg/brittolearning.jpg"
    },
  
  
  */
  return (
    <div className="p-6">
      <div className="heading">
        <Heading title="projects" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
         {projects?.map((project, index) => (
          <Projectcard
            key={index}
            title={project.title}
            technologies={project.technologies}
            projectlink={project.link}
            image={project.image}
          />
        ))} 
</div>

    </div>
  );
}

function Projectcard({ title, technologies, projectlink, image }) {
  return (
    <div className="border-[1px] border-[#282829] p-4 bg-[#1E1E1F] flex flex-col justify-start items-start gap-4 rounded-xl">
      <Link href={projectlink} target="_blank">
        <Image
          className="rounded w-full"
          width={250}
          height={250}
          src={image}
          alt="asdfas"
        />
      </Link>

      <div className="content">
        <h1 className="title text-lg font-semibold leading-tight m-0 p-0">
          <Link href={projectlink}>{title}</Link>
        </h1>
        <h1 className=" text-md leading-tight">{technologies}</h1>
      </div>
    </div>
  );
}
