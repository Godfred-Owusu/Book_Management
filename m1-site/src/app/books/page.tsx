import type { Metadata } from "next";
import BookList from "../../components/books/BookList";

// ✅ Page-level metadata (no need for "use client")
export const metadata: Metadata = {
  title: "Books List",
  description: "Browse all available books in the library",
};

export default function BooksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Books List</h1>
      <BookList />
    </div>
  );
}
