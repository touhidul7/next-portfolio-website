import Image from "next/image";
import Navbar from "./component/Navbar";
import Heading from "./component/Heading";
import Card from "./component/Card";

export default function Home() {
  return (
    <div className="p-6">
      {/* About Me */}
      <div className="About Me">
        <Heading title="About Me" />
        <div className="description text-justify text-sm">
          Hi, I am Touhidul, a creative Front-End Web Developer and WordPress
          expert with over 2 years of experience. I specialize in crafting
          visually stunning and highly functional websites using HTML, CSS,
          JavaScript, React, Tailwind CSS, and WordPress. During my career, I
          have successfully completed numerous professional projects, including
          developing e-commerce platforms, corporate websites, and custom
          WordPress themes. My focus on utilizing React for dynamic user
          interfaces and Tailwind CSS for efficient and responsive design
          ensures that every project exceeds expectations.
        </div>
      </div>

      {/* Skills */}
      <div className="skills">
        <Heading title="My Expertise" />
        <Card/>
      </div>
    </div>
  );
}
