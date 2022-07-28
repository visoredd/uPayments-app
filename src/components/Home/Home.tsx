import React, { useState } from "react";
import phone from "../../phone.jpg";
import ProductList from "../Product/ProductList";
import { Categories } from "../../utils/types";
import {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetCategoriesQuery,
} from "../../services/products";

function Home() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const { data: productList = [], isLoading, isError } = useGetProductsQuery();
  const { data } = useGetCategoriesQuery();
  return (
    <div data-testid="home-component">
      <div className="mt-10 flex justify-between">
        <input
          data-testid="filter-input"
          className="bg-white py-2 px-6 w-80 rounded shadow-md"
          placeholder="Apple Watch, Samsung S21, Macbook Pro,..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          data-testid="category-input"
          className="bg-white py-2 pl-2 w-44 rounded shadow-md text-gray-500"
          placeholder="Categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Categories</option>
          {data &&
            data.map((category: Categories) => (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <ProductList
        filter={filter}
        category={category}
        data={productList}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Home;
