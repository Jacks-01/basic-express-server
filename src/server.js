'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/person', (req, res, next) => {

  let { name } = req.query;
  try {
    if (name) {
      res.status(200).json(`name: ${name}`);
    } else { res.status(500).send('SERVER ERROR'); }

  } catch (err) {
    // console.error(err);
    next(err.message);
  }
});

function start() {
  app.listen(PORT, () => { console.log(`you are listening on port ${PORT}`); });
}

module.exports = { app, start };