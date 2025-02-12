import {
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "@/redux/apis/apis.slice";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { TableCell, TableRow } from "./ui/table";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProjectsTable = ({ project }: any) => {
  console.log(project);

  // form for update form
  const [updateProject] = useUpdateProjectMutation();

  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) =>
    updateProject({
      _id: project?._id,
      data,
    });

  // delete product
  const [deleteProject] = useDeleteProjectMutation();

  const handleProjectDelete = (projectId: string) => {
    const confirmPronPrompt = prompt("Write delete to remove project");
    if (confirmPronPrompt === "delete") {
      deleteProject(projectId);
    } else {
      console.log("Wrong Input");
    }
  };

  return (
    <div>
      <TableRow key={project?._id}>
        <TableCell>
          {" "}
          <Image src={project?.image} alt="" height={50} width={50} />{" "}
        </TableCell>
        <TableCell>{project?.title}</TableCell>
        <TableCell>{project?.liveLink}</TableCell>
        {/* Update Product */}
        <Sheet>
          <SheetTrigger className="mr-1">
            <Button className="bg-slate-600 ms-1">Update Project</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Update Project Information</SheetTitle>
              <SheetDescription>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="title">Title</label>
                  <Input
                    {...register("title")}
                    defaultValue={project?.title}
                    type="text"
                    placeholder="Title"
                    id="title"
                    name="title"
                  />
                  <label htmlFor="description">Content</label>
                  <Input
                    {...register("description")}
                    defaultValue={project?.content}
                    type="text"
                    placeholder="description"
                    id="description"
                    name="description"
                  />
                  <label htmlFor="image">image</label>
                  <Input
                    {...register("image")}
                    defaultValue={project?.image}
                    type="text"
                    placeholder="image"
                    id="image"
                    name="image"
                  />
                  <label htmlFor="liveLink">liveLink</label>
                  <Input
                    {...register("liveLink")}
                    defaultValue={project?.liveLink}
                    type="text"
                    placeholder="liveLink"
                    id="liveLink"
                    name="liveLink"
                  />
                  <br />
                  <Button type="submit" className="w-full">
                    Update Project
                  </Button>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        {/* delete  */}
        <Button
          variant="destructive"
          onClick={() => handleProjectDelete(project?._id)}
        >
          Delete
        </Button>
      </TableRow>
    </div>
  );
};

export default ProjectsTable;
