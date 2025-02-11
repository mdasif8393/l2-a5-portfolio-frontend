import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blog",
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => {
        return {
          url: `/blog/${blogId}`,
          method: "DELETE",
        };
      },
    }),
    updateBlog: builder.mutation({
      query: (options) => {
        return {
          url: `/blog/${options?._id}`,
          method: "PUT",
          body: options?.data,
        };
      },
    }),
    addBlog: builder.mutation({
      query: (options) => {
        return {
          url: "/blog/create-blog",
          method: "POST",
          body: options,
        };
      },
    }),
    addProject: builder.mutation({
      query: (options) => {
        return {
          url: "/project/create-project",
          method: "POST",
          body: options,
        };
      },
    }),
    updateProject: builder.mutation({
      query: (options) => {
        return {
          url: `/project/${options?._id}`,
          method: "PUT",
          body: options?.data,
        };
      },
    }),
    deleteProject: builder.mutation({
      query: (projectId) => {
        return {
          url: `/project/${projectId}`,
          method: "DELETE",
        };
      },
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
} = baseApi;
