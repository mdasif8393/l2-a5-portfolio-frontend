import {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} from "@/redux/apis/apis.slice";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
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
const BlogsTable = ({ blog }: any) => {
  const [updateBlog] = useUpdateBlogMutation();

  type Inputs = {
    title: string;
    content: string;
    image: string;
    category: string;
  };

  // form for update form
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateBlog({
      _id: blog?._id,
      data,
    });
    toast.success("Blog is updated successfully");
  };

  const [deleteBlog] = useDeleteBlogMutation();

  const handleBlogDelete = (blogId: string) => {
    const confirmPronPrompt = prompt("Write delete to remove blog");
    if (confirmPronPrompt === "delete") {
      deleteBlog(blogId);
      toast.success("Blog is deleted successfully");
    } else {
      console.log("Wrong Input");
    }
  };

  const [addBlog] = useAddBlogMutation();

  // Second form for add blog
  const { register: registerForm2, handleSubmit: handleSubmitForm2 } =
    useForm();

  const onSubmitForm2: SubmitHandler<any> = (data) => {
    addBlog(data);
    toast.success("A blog is added successfully");
  };

  return (
    <div>
      <TableRow key={blog?._id}>
        <TableCell>
          {" "}
          <Image src={blog?.image} alt="" height={60} width={60} />{" "}
        </TableCell>
        <TableCell>{blog?.title}</TableCell>
        <TableCell>{blog?.category}</TableCell>
        <TableCell>
          {/* Add blog */}
          <Sheet>
            <SheetTrigger className="mr-1">
              <Button className="bg-slate-600 ms-1">Add Blog</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Update Blog Information</SheetTitle>
                <SheetDescription>
                  <form onSubmit={handleSubmitForm2(onSubmitForm2)}>
                    <label htmlFor="title">Title</label>
                    <Input
                      {...registerForm2("title")}
                      type="text"
                      placeholder="Title"
                      id="title"
                      name="title"
                    />
                    <label htmlFor="content">Content</label>
                    <Input
                      {...registerForm2("content")}
                      type="text"
                      placeholder="Content"
                      id="content"
                      name="content"
                    />
                    <label htmlFor="image">image</label>
                    <Input
                      {...registerForm2("image")}
                      type="text"
                      placeholder="image"
                      id="image"
                      name="image"
                    />
                    <label htmlFor="image">category</label>
                    <Input
                      {...registerForm2("category")}
                      type="text"
                      placeholder="category"
                      id="category"
                      name="category"
                    />
                    <br />
                    <Button type="submit" className="w-full">
                      Add Blog
                    </Button>
                  </form>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          {/* Update Product */}
          <Sheet>
            <SheetTrigger className="mr-1">
              <Button className="bg-slate-600 ms-1">Update Blog</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Update Blog Information</SheetTitle>
                <SheetDescription>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="title">Title</label>
                    <Input
                      {...register("title")}
                      defaultValue={blog?.title}
                      type="text"
                      placeholder="Title"
                      id="title"
                      name="title"
                    />
                    <label htmlFor="content">Content</label>
                    <Input
                      {...register("content")}
                      defaultValue={blog?.content}
                      type="text"
                      placeholder="Content"
                      id="content"
                      name="content"
                    />
                    <label htmlFor="image">image</label>
                    <Input
                      {...register("image")}
                      defaultValue={blog?.image}
                      type="text"
                      placeholder="image"
                      id="image"
                      name="image"
                    />
                    <label htmlFor="image">category</label>
                    <Input
                      {...register("category")}
                      defaultValue={blog?.category}
                      type="text"
                      placeholder="category"
                      id="category"
                      name="category"
                    />
                    <br />
                    <Button type="submit" className="w-full">
                      Update Blog
                    </Button>
                  </form>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Button
            variant="destructive"
            onClick={() => handleBlogDelete(blog?._id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </div>
  );
};

export default BlogsTable;
