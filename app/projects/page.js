import Image from "next/image";
import React from "react";
import Heading from "../component/Heading";
import brittolearningimg from "@/public/Images/projectimg/brittolearning.jpg";
import brittosoftimg from "@/public/Images/projectimg/brittosoft.jpg";
import brittowalletimg from "@/public/Images/projectimg/brittowallet.jpg";
import smsimg from "@/public/Images/projectimg/sms.jpg";
import bistritiimg from "@/public/Images/projectimg/bistriti.jpg";
import andaazimg from "@/public/Images/projectimg/andaaz.jpg";
import Link from "next/link";

export default function page() {
  return (
    <div className="p-6">
      <div className="heading">
        <Heading title="projects" />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <Projectcard
          title={"LMS Platform"}
          technologies={"WordPress, Tutor LMS, Elementor"}
          projectlink={"https://brittolearning.com/"}
          image={brittolearningimg}
        />
        <Projectcard
          title={"SMS Platform"}
          technologies={"PHP, Laravel, MySQL, Bootstrap"}
          image={smsimg}
          projectlink={""}
        />
        <Projectcard
          title={"Interior Design Portfolio"}
          technologies={"React, Next JS, Tailwind CSS"}
          image={bistritiimg}
          projectlink={"https://bistriti.vercel.app/"}
        />
        <Projectcard
          title={"Personal Budget App"}
          technologies={"React, Redux,Tailwind CSS"}
          image={brittowalletimg}
          projectlink={"https://drive.google.com/file/d/13oE6gWCup-tsJYjJfOK2gWOAEyimC_G3/view?usp=drive_link"}
        />
        <Projectcard
          title={"Development Company"}
          technologies={"React , Next JS, Tailwind CSS"}
          image={brittosoftimg}
          projectlink={"https://brittosoft.com/"}
        />
        <Projectcard
          title={"E-commerce Website"}
          technologies={"WordPress, Woocommerce, Elementor"}
          image={andaazimg}
          projectlink={"https://andaazbd.com/"}
        />
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
