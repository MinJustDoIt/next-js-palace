"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      <h2>
        Review {reviewId} not found for product {productId}
      </h2>
    </div>
  );
};

export default NotFound;
