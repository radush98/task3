import express from 'express';
import {
    getAll,
    addNote,
    getNote,
    deleteNote,
    editNote
} from '../services/notes.js';

const router = express.Router();

router.get('/', getAll);

router.post('/', addNote);

router.get('/:id', getNote);

router.delete('/:id', deleteNote);

router.patch('/:id', editNote);

export default router;