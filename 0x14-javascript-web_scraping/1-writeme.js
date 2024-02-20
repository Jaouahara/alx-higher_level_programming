#!/usr/bin/node

const fileSystem = require('fs');

const arguments = process.argv;

fileSystem.writeFile(arguments[2], arguments[3], 'utf8', function (error) {
  if (error) {
    console.log(error);
  }
});
