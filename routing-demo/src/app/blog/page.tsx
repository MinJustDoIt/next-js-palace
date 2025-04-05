import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "My Blog",
  },
};

const page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
        resolve(true);
    }, 2000);
  });
  return <h1>My Blog</h1>;
};

export default page;
