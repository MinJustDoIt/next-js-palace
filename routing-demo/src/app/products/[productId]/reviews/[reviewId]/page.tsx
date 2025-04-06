import { redirect } from "next/navigation";
import React from "react";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    //notFound();
    redirect("/products");
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
};

export default ProductReview;
