import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //   const requestHeader = new Headers(request.headers);
  //   console.log(requestHeader.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set("resultPerPage", "10");
  console.log(cookieStore.get("resultPerPage"));

  return new Response("<h1>Hello world</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
