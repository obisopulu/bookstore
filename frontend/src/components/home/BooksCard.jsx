import React from 'react'
import PropTypes from 'prop-types';
import BooksSingleCard from './BooksSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((book) => (
            <BooksSingleCard key={book._id} book={book} />
        ))}
    </div>
  )
}

export default BooksCard

BooksCard.propTypes = {
    books: PropTypes.array,
};