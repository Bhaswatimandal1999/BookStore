import React, { useState } from 'react'
import axios from 'axios'

function AddBook() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: 'Fiction',
        description: '',
        price: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/books', formData);
            console.log('Book added:', response.data);

            setFormData({
                title: '',
                author: '',
                genre: 'Fiction',
                description: '',
                price: ''
            })
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddBook