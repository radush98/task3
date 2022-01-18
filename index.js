import express from 'express';
import bodyParser from 'body-parser';

import notesRoutes from './routes/notes.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/notes', notesRoutes);

app.get('/', (req, res) => {
    console.log('TEST');

    res.send('Hello from Homepage')
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
