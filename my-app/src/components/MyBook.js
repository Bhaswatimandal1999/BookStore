import React, { useState } from 'react'
import axios from 'axios'
function MyBook() {
    const [books, setbooks] = useState([])
    useState(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/books')
                setbooks(response.data)
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        }
        fetchBooks()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/books/${id}`)
            setbooks(prevBooks => prevBooks.filter(book => book._id !== id))
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    }

    return (
        <div>
            <h2>My Book</h2>
            {books.map((book) => {
                <div key={book._id}>
                    <button onClick={() => handleDelete(book._id)}>Delete</button>

                </div>
            })}
        </div>
    )
}

export default MyBook