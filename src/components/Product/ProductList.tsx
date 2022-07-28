import React, { useState, useEffect } from "react";
import phone from "../../phone.jpg";
import logo from "../../logo.svg";
import { Products } from "../../utils/types";
import { useGetProductsQuery } from "../../services/products";
import { useNavigate } from "react-router-dom";

interface IntrinsicProps {
  category: string;
  filter: string;
  data: Products[];
  isLoading: boolean;
}

function ProductList({ filter, category, isLoading, data }: IntrinsicProps) {
  const navigate = useNavigate();

  if (isLoading) {
    return <div data-testid="loading">Loading...</div>;
  }

  return (
    <div className="mx-20 flex flex-wrap justify-start mt-20">
      {data &&
        data
          .filter((product: Products) =>
            product.name.toLowerCase().includes(filter.toLowerCase())
          )
          .filter((product: Products) =>
            category
              ? product.category
                ? product.category == category
                : false
              : true
          )
          .map((product: Products) => (
            <React.Fragment key={product.id}>
              <div className="max-w-max mx-8 mb-10" data-testid={product.id}>
                <div
                  className="px-6 py-10 bg-white rounded-lg h-52 hover:shadow-lg cursor-pointer"
                  onClick={() => {
                    navigate(`/${product.id}`);
                  }}
                >
                  <img
                    src={product.avatar}
                    alt="Not Found.."
                    className="w-32 h-32"
                  />
                </div>
                <p className="font-semibold truncate w-40 mt-2">
                  {product.name}
                </p>
                <p className="text-center font-bold mt-2">${product.price}</p>
              </div>
            </React.Fragment>
          ))}
    </div>
  );
}

export default ProductList;
