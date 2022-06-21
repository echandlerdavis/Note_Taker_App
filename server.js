const express = require('express');
const PORT = 3001;
const path = require('path');
const app = express()
const api = require('./routes/apiRoutes.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', api)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}/`);
});

