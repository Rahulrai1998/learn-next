import books from "../../db";

export async function GET(
  request: Request,
  context: { params: { id: string } },
) {
  const { id } = await context.params;
  const book = books.find((bk) => bk.id === +id);
  console.log(book);
  return Response.json(book);
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } },
) {
  console.log(books);
  const id = +context.params.id;
  const deleteIdx = books.findIndex((book) => book.id === id);
  books.splice(deleteIdx, 1);
  return Response.json(books);
}
