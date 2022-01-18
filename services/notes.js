import { v4 as uuidv4 } from 'uuid';
import notes from '../repositories/database.js';
import { getDate } from '../helpers/getCurrentDate.js';

export const getAll = (req, res) => {
    res.send(notes);
}

export const addNote = (req, res) => {
    const note = req.body;
    const noteWithId = {
        id: uuidv4(),
        ...note,
        date: getDate(),

    };
    notes.push(noteWithId);

    res.send(`Note ${note.name} succesfully added!`)
}

export const getNote = (req, res) => {
    const { id } = req.params;
    const searchedNote = notes.find(note => note.id === id);

    res.send(searchedNote);
}

export const deleteNote = (req, res) => {
    const { id } = req.params;
    const index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1)

    res.send(`Note with id ${id} was deleted!`);
}

export const editNote = (req, res) => {
    const { id } = req.params;
    const { name, category, content } = req.body;

    const note = notes.find(note => note.id === id);
    if (name) note.name = name;
    if (category) note.category = category;
    if (content) note.content = content;

    res.send(`Note with id ${id} was edited!`);
}