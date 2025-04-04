import { notFound } from "next/navigation";
import React from "react";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if(parseInt(reviewId) > 1000) {
    notFound();
  }
  return <h1>Review {reviewId} for Product {productId}</h1>;
};

export default ProductReview;
