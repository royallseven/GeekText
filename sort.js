const express = require('express');
const Book = require('./models/book.js');

const router = express.Router()

router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        publisher: req.body.publisher
    })
    try {
        const newBook = await book.save()
        res.status(201).json(newBook)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.post('/getgenres', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        publisher: req.body.publisher
    })
    try {
        const newBook = await book.save()
        res.status(201).json(newBook)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})




module.exports = router;