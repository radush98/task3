import express from 'express';

const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('Hello')
});

export default router;