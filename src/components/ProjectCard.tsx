/* eslint-disable @typescript-eslint/no-explicit-any */
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

const ProjectCard = ({ project }: any) => {
  return (
    <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 px-6">
      {/* <div className="">
        <img className="object-contain max-w-lg" src={project?.image} alt="" />
      </div> */}
      <Card className="basis-2/4">
        <CardHeader>
          <CardTitle>{project?.title}</CardTitle>
          <CardDescription>{project?.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Category</p>
        </CardContent>
        <CardContent>
          <p>
            Price: <span className="text-gray-900 font-semibold">TK</span>
          </p>
        </CardContent>
        <CardFooter>
          <Link href={`/projects/${project._id}`}>
            <Button>See More</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
