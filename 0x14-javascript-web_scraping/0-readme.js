#!/usr/bin/node
const fileSystem = require('fs');

fileSystem.readFile(process.argv[2], 'utf8', (error, content) => {
  if (error) {
    return console.log(error);
  }
  process.stdout.write(content);
});
