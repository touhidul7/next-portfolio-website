import Image from "next/image";
import React from "react";
import profileimg from "@/public/Images/Touhidul.jpeg";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandFiverr } from "react-icons/tb";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="w-[25%] border-[1px] border-[#282829] p-4 bg-[#1E1E1F] flex flex-col justify-start items-center gap-2 rounded-xl">
      <div className="profile-img">
        <Image
          className="rounded-full"
          width={150}
          height={150}
          src={profileimg}
          alt="Touhidul"
        />
      </div>
      <div className="name text-xl font-bold">Touhidul Islam Shadhin</div>
      <div className="role text-sm bg-[#2B2B2C] px-3 py-1 rounded-md">
        Front-End Web Developer
      </div>
      <div className="devider w-full bg-[#282829] h-[2px] mt-2"></div>
      <div className="data space-y-4">
        <Iconbox title="Email" icon={<AiOutlineMail size={20} />} link="mailto:touhiduliet@gmail.com" content="touhiduliet@gmail.com" />
        <Iconbox title="Phone" icon={<FaPhoneAlt size={20} />} link="tel:+8801518999578" content="+8801518999578" />
        <Iconbox title="Github" icon={<FaGithub size={20} />} link="https://github.com/touhidul7" content="https://github.com/touhidul7" />
        <Iconbox title="Fiverr" icon={<TbBrandFiverr size={20} />} link="https://fiverr.com/mdislam124" content="https://fiverr.com/mdislam124" />
      </div>
    </div>
  );
};

export default Sidebar;

const Iconbox = ({ title, icon, link, content }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="h-fit p-2   -mb-4 text-[#E4B255] rounded-md box-shadow-1 icon-bg">
          {icon}
        </div>
        <div className="flex flex-col leading-[5px]">
          <div className="label text-sm text-[#999999]">{title}</div>
          <Link href={link} className="content">
            {content}
          </Link>
        </div>
      </div>
    </>
  );
};
