import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "My Blog",
  }
};

const page = () => {
  return (
    <div>My Blog</div>
  )
}

export default page