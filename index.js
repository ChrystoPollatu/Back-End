const express = require('express');
const morgan = require('morgan');
let users = require('./users');

const app = express();
const port = 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Morgan usage
app.use(morgan('combined'), (req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome! Exercise #5</h1>
    `);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:name', (req, res) => {
    const data = users.filter(r => r.name.toLowerCase() === req.params.name.toLowerCase());

    if(data.length === 0) {
        res.send(JSON.stringify({
            message: "Data user tidak ditemukan."
        }));
    }
    else {
        res.send(JSON.stringify({
            id: data[0].id,
            name: data[0].name,
        }));
    }
});

//Routing 404 Handling
app.use((req, res, next) => {
    res.status(404).send(JSON.stringify({
        status: 'error',
        message: "resource tidak ditemukan.",
    }));
});

//Error Handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(JSON.stringify({
        status: 'error',
        message: "terjadi kesalahan pada server."
    }));
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}.`));