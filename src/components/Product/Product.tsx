import React, { useEffect } from "react";
import {
  useGetProductQuery,
  useDeleteProductMutation,
} from "../../services/products";
import { useParams, useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetProductQuery(id);
  const [deleteProduct, deleteResponse] = useDeleteProductMutation();
  useEffect(() => {
    if (deleteResponse.isSuccess) {
      alert("Product Deleted Succesfully");
      navigate("/");
    }
    if (deleteResponse.isError) {
      alert(deleteResponse.error);
    }
  }, [deleteResponse]);
  const handleDelete = () => {
    deleteProduct(id);
  };
  if (isLoading) {
    return <>Loading....</>;
  }
  if (isError) {
    navigate("/");
  }
  return (
    <div className="mt-20 mx-20 relative">
      <div className="grid grid-cols-4">
        <div className="px-10 py-10 bg-white rounded-lg h-52 hover:shadow-lg cursor-pointer max-w-max">
          <img src={data?.avatar} alt="Not Found.." className="w-32 h-32" />
        </div>
        <div className="flex flex-col justify-between col-span-3 overflow-clip">
          <p className="text-5xl font-sans font-semibold">{data?.name}</p>
          <p className="text-3xl font-semibold mt-5">${data?.price}</p>
        </div>
      </div>
      <div
        className="absolute top-0 right-2 cursor-pointer hover:shadow-lg"
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          style={{ fill: "#000000" }}
        >
          {" "}
          <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
        </svg>
      </div>
      <hr className="my-5" />
      <p className="text-2xl mb-2 font-semibold">Description</p>
      <p>{data?.description}</p>
    </div>
  );
}

export default Product;
