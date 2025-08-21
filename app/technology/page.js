'use client';
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Heading from '../component/Heading';
import { useAppData } from '../context/AppDataContext';

export default function page() {
    const { technologies } = useAppData();
    return (
        <div className="p-6">
            <div className="heading">
                <Heading title="My expert area" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
                {technologies?.map((tech, index) => (
                    <TechnologyCard
                        key={index}
                        name={tech.name}
                        skillLevel={tech.skillLevel}
                    />
                ))}
            </div>
        </div>
    )
}





function TechnologyCard({ name, skillLevel }) {
    return (
        <div className="border-[1px] border-[#282829] p-6 bg-[#1E1E1F] rounded-xl">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{name}</h3>
                <span className="text-sm text-[#E4B255]">{skillLevel}%</span>
            </div>
            <div className="w-full bg-[#282829] rounded-full h-2.5">
                <div
                    className="bg-[#E4B255] h-2.5 rounded-full"
                    style={{ width: `${skillLevel}%` }}
                ></div>
            </div>
        </div>
    );
}