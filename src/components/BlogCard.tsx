/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
const BlogCard = ({ blog }: any) => {
  return (
    <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 px-6">
      <Card className="basis-2/4 w-72">
        <CardHeader>
          <Image height={400} width={400} src={blog?.image} alt="" />
          <CardTitle>{blog?.title}</CardTitle>
          <CardDescription>{blog?.content}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Category: {blog?.category}</p>
        </CardContent>

        <CardFooter>
          <Link href={`/blog/${blog._id}`}>
            <Button>See More</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
