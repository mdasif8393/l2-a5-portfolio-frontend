/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import BlogsTable from "@/components/BlogsTable";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBlogsQuery } from "@/redux/apis/apis.slice";

const BlogsManagement = () => {
  const { data, isLoading } = useGetBlogsQuery(undefined);

  return (
    <div>
      <Table>
        <TableCaption>A list of Blogs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((blog: any) => (
            <BlogsTable key={blog._id} blog={blog} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogsManagement;
