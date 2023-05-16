const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(201).send('Hello World!');
})

app.listen(3000, () => console.log('Server running on port 3000'))