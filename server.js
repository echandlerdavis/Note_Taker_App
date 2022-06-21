const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();
const api = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(api);


app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/index.html'))
);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}/`);
});

