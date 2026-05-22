import books from "../db";

export async function GET() {
  console.log(books);
  return Response.json(books);
}

export async function POST(request: Request) {
  //   console.log(request);
  const book = await request.json();
  books.push(book);
  return Response.json(books);
}
