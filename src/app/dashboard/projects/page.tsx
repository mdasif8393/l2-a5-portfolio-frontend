/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ProjectsTable from "@/components/ProjectsTable";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetProjectsQuery } from "@/redux/apis/apis.slice";

const ProjectsDashboard = () => {
  const { data, isLoading } = useGetProjectsQuery(undefined);
  return (
    <div>
      <Table>
        <TableCaption>A list of Projects</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Live Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((project: any) => (
            <ProjectsTable key={project._id} project={project} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsDashboard;
