import BookSigleCard from "./BookSigleCard";

const BooksCard = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map(
                (book) => (
                    <BookSigleCard key={book._id} book={book}/>
                ))}
        </div>
    )
}

export default BooksCard
