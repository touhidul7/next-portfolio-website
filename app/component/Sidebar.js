'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandFiverr } from "react-icons/tb";
import { FaPhoneAlt, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaMedium, FaQuora, FaPinterest, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Sidebar = ({ className, info, profileLinks }) => {

  console.log(profileLinks);


  return (
    <>
      {/* Sidebar Component */}

      <div className={`lg:w-[25%] border-[1px] border-[#282829] p-4 bg-[#1E1E1F] flex flex-col justify-start items-center gap-2 rounded-xl ${className}`}>
        <div className="profile-img">
          {info?.image && info.image !== "" && (
            <Image
              className="rounded-full"
              width={150}
              height={150}
              src={info.image}
              alt={info?.name}
            />
          )}
        </div>
        <div className="name text-xl font-bold">{info?.name}</div>
        <div className="role text-sm bg-[#2B2B2C] px-3 py-1 rounded-md">
          {info?.JobTitle}
        </div>
        <div className="devider w-full bg-[#282829] h-[2px] mt-2"></div>
        <div className="data space-y-4 text-left lg:pb-0 pb-4">
          <Iconbox title="Email" icon={<AiOutlineMail size={20} />} link={`mailto:${info?.email}`} content={info?.email} />
          {info?.phone && <Iconbox title="Phone" icon={<FaPhoneAlt size={20} />} link={`tel:${info?.phone}`} content={info?.phone} />}

          {profileLinks?.Facebook && <Iconbox title="Facebook" icon={<FaFacebook size={20} />} link={profileLinks?.Facebook} content="facebook.com" />}
          {profileLinks?.Whatsapp && (
            <Iconbox
              title="Whatsapp"
              icon={<FaWhatsapp size={20} />}
              link={`https://api.whatsapp.com/send?phone=88${profileLinks?.Whatsapp}`}
              content={profileLinks?.Whatsapp}
            />
          )}
          {profileLinks?.Twitter && (
            <Iconbox
              title="Twitter"
              icon={<FaTwitter size={20} />}
              link={profileLinks?.Twitter}
              content="twitter.com"
            />
          )}
          {profileLinks?.Instagram && (
            <Iconbox
              title="Instagram"
              icon={<FaInstagram size={20} />}
              link={profileLinks?.Instagram}
              content="instagram.com"
            />
          )}
          {profileLinks?.Medium && (
            <Iconbox
              title="Medium"
              icon={<FaMedium size={20} />}
              link={profileLinks?.Medium}
              content="medium.com"
            />
          )}
          {profileLinks?.Quora && (
            <Iconbox
              title="Quora"
              icon={<FaQuora size={20} />}
              link={profileLinks?.Quora}
              content="quora.com"
            />
          )}
          {profileLinks?.Pinterest && (
            <Iconbox
              title="Pinterest"
              icon={<FaPinterest size={20} />}
              link={profileLinks?.Pinterest}
              content="pinterest.com"
            />
          )}
          {profileLinks?.Linkedin && (
            <Iconbox
              title="Linkedin"
              icon={<FaLinkedin size={20} />}
              link={profileLinks?.Linkedin}
              content="linkedin.com"
            />
          )}
          {profileLinks?.Github && (
            <Iconbox
              title="Github"
              icon={<FaGithub size={20} />}
              link={`https://github.com/${profileLinks?.Github}`}
              content="github.com"
            />
          )}
          {profileLinks?.Fiverr && (
            <Iconbox
              title="Fiverr"
              icon={<TbBrandFiverr size={20} />}
              link={profileLinks?.Fiverr}
              content="fiverr.com"
            />
          )}
          
        </div>
      </div>
    </>
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
          <Link target="_blank" href={link} className="content">
            {content}
          </Link>
        </div>
      </div>
    </>
  );
};
