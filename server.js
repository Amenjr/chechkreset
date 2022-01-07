const express = require('express');
const connectBD = require('./config/connectBD');
const FilmRoute = require('./routes/Film');

const app=express();

connectBD();
app.use(express.json());
app.use('/api/Movie',FilmRoute);

port=2000;

app.listen(port,()=>console.log(`server is running on port ${port}`));
