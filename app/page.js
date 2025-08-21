'use client';
import Heading from "./component/Heading";
import Card from "./component/Card";
import Sidebar from "./component/Sidebar";
import { useAppData } from "./context/AppDataContext";

export default function Home() {
  const { info, skills, profileLinks } = useAppData();
  return (
    <div className="p-6">
      {/*  */}
      <div className="lg:hidden md:hidden block h-auto mt-4">
        <Sidebar className={"flex"} info={info} profileLinks={profileLinks} />
      </div>
      {/* About Me */}
      <div className="About Me">
        <Heading title="About Me" />
        <div className="description text-justify text-sm">
          {info?.Description}
        </div>
      </div>

      {/* Skills */}
      <div className="skills">
        <Heading title="My Skills" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {skills && skills.map((skill, index) => (
            <Card key={index} title={skill?.name} description={skill?.description} />
          ))}
        </div>
      </div>

    </div>
  );
}
