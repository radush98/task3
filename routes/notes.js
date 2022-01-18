import express from 'express';
import notes from '../repositories/database.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(notes)
});

router.post('/', (req, res) => {

    console.log(req.body)
    res.send("POST ROUTE REACHED")
})

export default router;