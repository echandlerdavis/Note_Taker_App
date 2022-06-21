const router = require('express').Router();
const Store = require('../db/store');
const uuid = require('../helpers/uuid')

router.get('/api/notes',(req, res) => {
    Store.getNotes()
    .then((notes) =>{
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})

router.post ('/api/notes', (req, res) => {
    const{ title, text } = req.body;
    
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        Store.addNote(newNote)
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})


module.exports = router;
