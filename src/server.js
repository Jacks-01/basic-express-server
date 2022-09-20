'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT;

function start() {
  app.listen(PORT, () => { console.log(`you are listening on port ${PORT}`); });
}

module.exports = { app, start };