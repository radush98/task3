import express from 'express';
import {
    getAll,
    addNote,
    getNote,
    deleteNote,
    editNote,
    getStatistics
} from '../repositories/notes.js';

const router = express.Router();

router.get('/', getAll);

router.get('/stats', getStatistics);

router.get('/:id', getNote);

router.post('/', addNote);

router.delete('/:id', deleteNote);

router.patch('/:id', editNote);

export default router;