'use strict';

const validator = ( req, res, next) => {
  console.log('validator.js');
  if (req.query.name) {
    console.log(req.query.name);
    next();

  } else {
    next('name required');
  }
  next();
};

module.exports = validator;