const express = require('express');
const router = express.Router();
const Note = require('../models/note');




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
  const { title, text} = req.body;

  Notes.addNote([title, text])
  .then(() => res.status(200).json(true))
  .catch(error => res.status(500).json(error))
})

module.exports = router;