import type { Metadata } from "next";
import BookList from "../../components/books/BookList";
import PageTitle from "../../components/ui/PageTitle";

export default function BooksPage() {
  return (
    <div>
      <PageTitle title="Books List" />
      <BookList />
    </div>
  );
}
