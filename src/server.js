'use strict';

const express = require('express');

const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
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

app.use('*', notFound);
app.use(serverError);


function start() {
  app.listen(PORT, () => { console.log(`you are listening on port ${PORT}`); });
}

module.exports = { app, start };