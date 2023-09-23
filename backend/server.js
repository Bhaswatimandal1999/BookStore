const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const { BookModel } = require('./model_book')

const app = express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/bookStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.post('api/books', async (req, res) => {
    try {
        const newBook = new BookModel(req.body)
        await newBook.save()
        res.status(201).json(newBook)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('api/books', async (req, res) => {
    try {
        const books = await BookModel.find()
        await newBook.save()
        res.json(books)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.delete('api/books/:id', async (req, res) => {
    try {
        await BookModel.findByIdAndDelete(req.params.id)
        res.json({ message: 'Book deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


app.listen(8000, () => {
    console.log('Server is running on port 8000');
})
