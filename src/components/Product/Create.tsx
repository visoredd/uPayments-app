import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Categories, Products } from "../../utils/types";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "../../services/products";

function Create() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Partial<Products>>({
    id: "0",
    name: "",
    description: "",
    avatar: "",
    category: "",
    price: "",
  });
  const { data } = useGetCategoriesQuery();
  const [createProduct, createResponse] = useCreateProductMutation();
  useEffect(() => {
    if (createResponse.isSuccess) {
      alert("Product Creted Succesfully");
      navigate("/");
    }
    if (createResponse.isError) {
      alert(createResponse.error);
    }
  }, [createResponse]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct(product);
  };
  const handleChange = (name: string, value: string) => {
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="flex justify-center align-center">
      <div className="text-center mt-10 w-4/5 md:w-2/5">
        <div className="text-2xl font-semibold mb-4">Create Product</div>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
          data-testid="create-form"
        >
          <input
            className="p-2 rounded-md shadow-lg"
            placeholder="Name"
            name="name"
            data-testid="name-test"
            value={product.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
          <textarea
            className="p-2 rounded-md shadow-lg"
            placeholder="Description"
            name="description"
            data-testid="desc-test"
            value={product.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            rows={3}
          />
          <input
            className="p-2 rounded-md shadow-lg"
            placeholder="Image URL"
            data-testid="avatar-test"
            name="avatar"
            value={product.avatar}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <select
            className="py-2 pl-2 rounded-md shadow-lg"
            placeholder="Categories"
            name="category"
            value={product.category}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          >
            <option value="">Categories</option>
            {data &&
              data.map((category: Categories) => (
                <option value={category.name} key={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
          <input
            className="p-2 rounded-md shadow-lg"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />
          <button type="submit" className="bg-white p-2 rounded-md shadow-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
