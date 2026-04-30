import express from 'express';

const app = express();

const name = process.env.NAME; // <-- NEW

app.get('/', (req, res) => {
    res.send(`Welcome, ${name}!`); // <-- UPDATED
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});