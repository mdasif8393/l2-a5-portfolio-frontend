/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Blogs",
  description: "This page is for blogs of Asif's Portfolio",
};

const Blog = async () => {
  const res = await fetch(
    "https://a5-portfolio-server.vercel.app/api/v1/blog",
    {
      cache: "no-store",
    }
  );
  const blogs = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-red-600">Blogs</span>
      </h1>
      <div className="grid grid-cols-3 gap-6 my-5">
        {blogs?.data?.map((blog: any) => (
          <BlogCard blog={blog} key={blog?._id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
