const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://PanicAThePython:248703@cluster0-ufc8f.mongodb.net/week10?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
app.use(cors());
app.use(express.json()); //mostra pro express que estamos usando json, ele n interpreta sozinho
app.use(routes);//vem dps do aviso que é json


server.listen(3333);

