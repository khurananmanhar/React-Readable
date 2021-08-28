import React from 'react';
import Book from './Book'

class Books extends React.Component {
    render() {
        const books = [
            {
                title: 'Rich Dad, Poor Dad',
                author: 'Robert Kiyoski',
                image: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg',
                Oldprice: '$19.99',
                newPrice: '$15.99',
                rating: "⭐⭐⭐⭐⭐"

            },
            {
                title: 'Think and Grow Rich',
                author: 'Napoleon Hill',
                image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.naphill.org%2Fwp-content%2Fuploads%2Fpaperback-think-and-grow-rich-1937-new.jpg&f=1&nofb=1",
                Oldprice: '$20.99',
                newPrice: '$16.80',
                rating: '⭐⭐⭐⭐'
            }
            ,
            {
                title: 'The Hobbit',
                author: 'J.R.R Tolkien',
                image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
                Oldprice: '$15.99',
                newPrice: '$12.80',
                rating: '⭐⭐⭐⭐'
            }
            ,
            {
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                image: "https://www.oberlo.com/media/1603897587-image7.jpg?fm=webp&w=1824&fit=max",
                Oldprice: '$18.99',
                newPrice: '$15.20',
                rating: '⭐⭐⭐⭐⭐'
            }
            ,
            {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                image: "https://www.oberlo.com/media/1603897583-image18.jpg?fm=webp&w=1824&fit=max",
                Oldprice: '$15.99',
                newPrice: '$12.80',
                rating: '⭐⭐⭐⭐'
            }
            ,
            {
                title: 'Lord Of The Rings',
                author: 'J.R.R Tolkien',
                image: "data:image/jpeg;base64,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",
                Oldprice: '$15.99',
                newPrice: '$12.80',
                rating: '⭐⭐⭐⭐'
            }
            ,
            {
                title: 'How to Win Friends & Influence People',
                author: 'Dale Carnegie',
                image: "https://m.media-amazon.com/images/I/51X7dEUFgoL._SL160_.jpg",
                Oldprice: '$19.99',
                newPrice: '$16.00',
                rating: '⭐⭐⭐⭐⭐'
            }
            ,
            {
                title: 'The Intelligent Investor',
                author: 'Benjamin Graham',
                image: "https://www.oberlo.com/media/1603897574-image30-1.jpg?fm=webp&w=1824&fit=max",
                Oldprice: '$20.99',
                newPrice: '$16.80',
                rating: '⭐⭐⭐⭐⭐'
            },
            {
                title: 'The Power of Habit',
                author: 'Charles Duhigg',
                image: "https://www.oberlo.com/media/1603897585-image14-1.jpg?fm=webp&w=1824&fit=max",
                Oldprice: '$19.99',
                newPrice: '$16.00',
                rating: '⭐⭐⭐⭐'
            },
            {
                title:' A Brief History of Time',
                author: 'Stephen Hawking',
                image:"https://www.oberlo.com/media/1603897578-image20-1.jpg?fm=webp&w=1824&fit=max",
                Oldprice:'$22.99',
                newPrice:'$18.40',
                rating:'⭐⭐⭐⭐⭐'
            }

        ]
        return books.map(book => {
            return (
                <Book title={book.title} author={book.author} imageSrc={book.image} Oldprice={book.Oldprice} newPrice={book.newPrice} rating={book.rating} />
            )
        })

    }
}
export default Books