const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

server.listen(3001, () => {
  console.log('Server started listening on port 3001');
});