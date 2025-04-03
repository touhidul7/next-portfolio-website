import Heading from "./component/Heading";
import Card from "./component/Card";
import Sidebar from "./component/Sidebar";

export default function Home() {
  return (
    <div className="p-6">
      <div className="lg:hidden md:hidden block mt-4">
        <Sidebar />
      </div>
      {/* About Me */}
      <div className="About Me">
        <Heading title="About Me" />
        <div className="description text-justify text-sm">
          Hi, I am Touhidul, a creative Front-End Web Developer and WordPress
          expert with over 3 years of experience. I specialize in crafting
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
        <Heading title="My Skills" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <Card title="WordPress" description={"Design custom, fully functional websites using the most flexible CMS platform."} />
          <Card title="React JS" description={"Build dynamic and highly interactive user interfaces with top-notch performance and scalability."} />
          <Card title="Next JS" description={"Develop modern server-side rendered applications with optimized performance and SEO support."} />
          <Card title="Tailwind CSS" description={"Create sleek, responsive designs quickly using utility-first, modern CSS frameworks."} />
          <Card title="Lead Generation" description={"Generate targeted leads effectively to drive business growth and maximize conversions."} />
          <Card title="Business Marketing" description={"Boost online presence and engagement through result-driven marketing strategies."} />
        </div>
      </div>

    </div>
  );
}
