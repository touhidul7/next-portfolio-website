"use client";
import Image from "next/image";
import React from "react";
import Heading from "../component/Heading";
import projectimg from "@/public/Images/projectimg/project-1.png";

export default function page() {
  return (
    <div className="p-6">
      <div className="heading">
        <Heading title="projects" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
      </div>
    </div>
  );
}

function Projectcard() {
  return (
    <div className="border-[1px] border-[#282829] p-4 bg-[#1E1E1F] flex flex-col justify-start items-start gap-4 rounded-xl">
      <Image
        className="rounded w-full"
        width={250}
        height={250}
        src={projectimg}
        alt="asdfas"
      />
      <div className="content">
        <h1 className="title text-lg font-semibold leading-tight m-0 p-0">
          Portfolio Website
        </h1>
        <h1 className="title text-md leading-tight">React, Tailwind CSS</h1>
      </div>
    </div>
  );
}
