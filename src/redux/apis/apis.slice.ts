import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a5-portfolio-server.vercel.app/api/v1",
  }),
  tagTypes: ["blog", "product"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blog",
      providesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => {
        return {
          url: `/blog/${blogId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: (options) => {
        return {
          url: `/blog/${options?._id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["blog"],
    }),
    addBlog: builder.mutation({
      query: (options) => {
        return {
          url: "/blog/create-blog",
          method: "POST",
          body: options,
        };
      },
      invalidatesTags: ["blog"],
    }),
    getProjects: builder.query({
      query: () => "/project",
      providesTags: ["product"],
    }),
    addProject: builder.mutation({
      query: (options) => {
        return {
          url: "/project/create-project",
          method: "POST",
          body: options,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProject: builder.mutation({
      query: (options) => {
        return {
          url: `/project/${options?._id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["product"],
    }),
    deleteProject: builder.mutation({
      query: (projectId) => {
        return {
          url: `/project/${projectId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
    addContact: builder.mutation({
      query: (options) => {
        return {
          url: "/contact/create-contact",
          method: "POST",
          body: options,
        };
      },
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useDeleteBlogMutation,
  useAddBlogMutation,
  useAddProjectMutation,
  useUpdateBlogMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useAddContactMutation,
  useGetProjectsQuery,
} = baseApi;
