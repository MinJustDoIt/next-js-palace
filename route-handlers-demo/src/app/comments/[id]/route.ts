import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("id", id);
  const comment = comments.find((comment) => comment.id === parseInt(id));
  console.log("comment", comment);
  return Response.json(comment);
}
