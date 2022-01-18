import { v4 as uuidv4 } from 'uuid';
import { notes, categories, ERROR_MESSAGE } from '../repositories/database.js';
import { getDate } from '../helpers/getCurrentDate.js';
import { parseData } from '../helpers/parseData.js';
import { isCorrect, checkCategory, checkType } from '../helpers/checkInput.js';

export const getAll = (req, res) => {
    res.send(notes);
}

export const addNote = (req, res) => {
    const note = req.body;

    if (isCorrect(note)) {

        const noteWithId = {
            id: uuidv4(),
            ...note,
            category: checkCategory(note.category) ? note.category : 'Task', // we have static categories, so we prevents any new values
            date: getDate(),
            dates: parseData(note.content),
            isArchived: note.isArchived
        };

        notes.push(noteWithId);

        res.send(`Note ${note.name} succesfully added!`)
    }
    else {
        res.send(ERROR_MESSAGE)
    }
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
    const { name, category, content, isArchived } = req.body;

    const note = notes.find(note => note.id === id);

    if (checkType(name, 'string') && name) note.name = name;
    if (checkType(category, 'string') && category) note.category = checkCategory(note.category) ? note.category : 'Task';
    if (checkType(content, 'string') && content) {
        note.content = content;
        note.dates = parseData(content)
    }
    if (checkType(isArchived, 'boolean') && isArchived) note.isArchived = isArchived

    res.send(`Note with id ${id} was edited!`);
}

export const getStatistics = (req, res) => {
    const statistic = [];
    for (let category of categories) {
        statistic.push({
            note_category: category,
            active: notes.filter(elem => elem.category == category).length,
            archived: notes.filter(elem => elem.category == category && elem.isArchived == true).length,
        })
    }
    res.send(statistic);
}