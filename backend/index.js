
// Erstelle Server
const express = require('express');
const server = express();

server.use(express.json())

// Stelle Static Content bereit
const path = require('path');
const distPath = "../dist"
server.use(express.static(path.join(__dirname, distPath)));
server.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, distPath + '/index.html'));
})

// Stelle API bereit
require('./todoController')(server);

// Starte Server
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
