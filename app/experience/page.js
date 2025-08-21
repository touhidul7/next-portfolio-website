'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

import Heading from "../component/Heading";
import { useAppData } from '../context/AppDataContext';
export default function page() {
  const { experience } = useAppData();
  return (
    <div className="p-6">
      <div className="heading">
        <Heading title="Experience" />
      </div>
      <div className="flex flex-col gap-6">
        {experience?.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyName={experience.companyName}
            jobTitle={experience.jobTitle}
            description={experience.description}
            location={experience.location}
            range={experience.range}
            url={experience.url}
          />
        ))}
      </div>
    </div>
  )
}


function ExperienceCard({ companyName, jobTitle, description, location, range, url }) {
  // Split the description by new lines to create list items
  const descriptionItems = description.split('\n').filter(item => item.trim() !== '');

  return (
    <div className="border-[1px] border-[#282829] p-6 bg-[#1E1E1F] rounded-xl w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div>
          <h2 className="text-xl font-semibold">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              {companyName}
            </a>
          </h2>
          <h3 className="text-lg text-gray-400">{jobTitle}</h3>
        </div>
        <div className="text-sm text-gray-400 md:text-right">
          <p>{range}</p>
          <p>{location}</p>
        </div>
      </div>

      {/* <ul className="list-disc list-inside space-y-2">
        {descriptionItems.map((item, index) => (
          <li key={index} className="text-gray-300">{item}</li>
        ))}
      </ul> */}
      {description}
    </div>
  );
}