const express = require('express');
const router = express.Router();
const Notes = require('../models/note');




router.get('/api/notes', (req, res) => {
  Notes.getAllNotes()
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.get('/api/notes/:id', (req, res) => {
  const NoteId = req.params.id;
  Notes.getOneNote(NoteId)
  .then(results => res.json(results))
  .catch(error => res.json(error))
})

router.post('/api/notes', (req, res) => {
  console.log(req.body)
  const { title, text } = req.body;

  Notes.addNote([req.body.title, req.body.text])
  .then((results) => res.json(results))
  .catch(error => res.status(500).json(error))
})

module.exports = router;