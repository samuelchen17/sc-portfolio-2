import React from "react";

const Product = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return <div>Product: {id}</div>;
};

export default Product;
