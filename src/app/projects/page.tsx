/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Projects",
  description: "This page is for projects of Asif's Portfolio",
};

const Projects = async () => {
  const res = await fetch(
    "https://a5-portfolio-server.vercel.app/api/v1/project",
    {
      cache: "no-store",
    }
  );
  const projects = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-red-600">Projects</span>
      </h1>
      <div className="grid grid-cols-3 gap-6 my-5">
        {projects?.data?.map((project: any) => (
          <ProjectCard project={project} key={project?._id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
