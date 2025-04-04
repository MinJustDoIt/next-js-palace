import React from "react";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return <h1>Review {reviewId} for Product {productId}</h1>;
};

export default ProductReview;
