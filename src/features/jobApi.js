import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://job-portal-1g74.onrender.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().reducer.user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "job",
        method: "POST",
        body: data,
      }),
    }),
    getJob: builder.query({
      query: (id) => `job/${id}`,
    }),
    getAllJob: builder.query({
      query: () => `job`,
    }),
    deleteJob: builder.query({
      query: (id) => `job/${id}`,
    }),
    updateJob: builder.query({
      query: (id) => `job/${id}`,
    }),
  }),
});

export const {
  usePostJobMutation,
  useGetJobQuery,
  useGetAllJobQuery,
  useDeleteJobQuery,
  useUpdateJobQuery,
} = jobApi;
