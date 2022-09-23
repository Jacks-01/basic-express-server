'use strict';

const validator = (error, req, res, next) => {
  console.log('validator.js');
  if (req.params.name) {
    console.log(req.params.name);

  } else {
    console.error(error);
  }
  next();
};

module.exports = validator;