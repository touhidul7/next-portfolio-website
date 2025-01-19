import Image from "next/image";
import React from "react";
import Heading from "../component/Heading";
import projectimg from "@/public/Images/projectimg/project-1.png";
import Link from "next/link";

export default function page() {
  return (
    <div className="p-6">
      <div className="heading">
        <Heading title="projects" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Projectcard
          title={"E-Commerce Platform"}
          technologies={"React, Node.js, MongoDB"}
          projectlink={"#"}
          image={projectimg}
        />
        <Projectcard
          title={"Travel Booking Website"}
          technologies={"Next.js, Tailwind CSS"}
          image={projectimg}
          projectlink={"#"}
        />
        <Projectcard
          title={"Social Media Dashboard"}
          technologies={"React, Redux, Firebase"}
          image={projectimg}
          projectlink={"#"}
        />
        <Projectcard
          title={"Blog CMS"}
          technologies={"WordPress, PHP, MySQL"}
          image={projectimg}
          projectlink={"#"}
        />
        <Projectcard
          title={"Personal Budget App"}
          technologies={"React Native, Expo, SQLite"}
          image={projectimg}
          projectlink={"#"}
        />
        <Projectcard
          title={"LMS Platform"}
          technologies={"Django, Bootstrap, PostgreSQL"}
          image={projectimg}
          projectlink={"#"}
        />
</div>

    </div>
  );
}

function Projectcard({ title, technologies, projectlink, image }) {
  return (
    <div className="border-[1px] border-[#282829] p-4 bg-[#1E1E1F] flex flex-col justify-start items-start gap-4 rounded-xl">
      <Link href={projectlink}>
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
