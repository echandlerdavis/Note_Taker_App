const router = require('express').Router();
const Store = require('../db/store');

router.get('/notes',(req, res) => {
    Store.getNotes()
    .then((notes) =>{
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})

router.post ('/notes', (req, res) => {
    Store.addNote(req.body)
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})


module.exports = router;
