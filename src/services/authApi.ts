import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/auth/signin",
          method: "post",
          body,
        };
      },
    }),



    registerUser: builder.mutation({
        query: (body: { username: string; email: string , password:string, roles:[string,string] }) => {
          return {
            url: "/auth/signup",
            method: "post",
            body,
          };
        },
      }),
  }),
});

export const {useLoginUserMutation,useRegisterUserMutation} = authApi;