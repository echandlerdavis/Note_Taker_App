const express = require('express');
const PORT = process.env.port || 3001;
const path = require('path');
const app = express()



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})



app.listen(PORT, () => {
    console.log(`listening at https://localhost:${PORT}/`);
})

//so far able to get it to the next page, but without functionality. 
