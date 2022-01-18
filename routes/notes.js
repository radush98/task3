import express from 'express';
import notes from '../repositories/database.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(notes);
});

router.post('/', (req, res) => {
    const note = req.body;
    const noteWithId = { id: uuidv4(), ...note };
    notes.push(noteWithId);

    res.send(`Note ${note.name} succesfully added!`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const searchedNote = notes.find(note => note.id === id);

    res.send(searchedNote);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1)

    res.send(`Note with id ${id} was deleted!`);
})

router.patch('/:id', (req, res) => {

    const { id } = req.params;
    const { name, category, content } = req.body;

    const note = notes.find(note => note.id === id)
    if (name) note.name = name;
    if(category) note.category = category;
    if(content) note.content = content;

    res.send(`Note with id ${id} was edited!`);
})

export default router;