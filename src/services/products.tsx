// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Products, Categories } from "../utils/types";

export const baseUrl =
  "https://62286b649fd6174ca82321f1.mockapi.io/case-study/";
// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Products[], void>({
      query: () => `products/`,
      providesTags: ["Product"],
    }),
    getCategories: builder.query<Categories[], void>({
      query: () => `categories/`,
    }),
    getProduct: builder.query<Products, string | undefined>({
      query: (id) => `products/${id}`,
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation<Products, Partial<Products>>({
      query: (body) => {
        return {
          url: `products`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<void, string | undefined>({
      query: (id) => {
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productApi;
