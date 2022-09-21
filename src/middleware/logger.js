'use strict';

const logger = (req, res, next) => {
  let log = {
    method: req.method,
    path: req.path,
  };
    
  console.log(`Logger: ${log}`);

};

module.exports = logger;