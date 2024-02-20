#!/usr/bin/node

const httpRequest = require('request');
const fileSystem = require('fs');

const arguments = process.argv;
const targetUrl = arguments[2];
const destinationPath = arguments[3];

httpRequest(
  {
    method: 'GET',
    uri: targetUrl
  },
  function (err, res, data) {
    if (err) throw err;
    if (res.statusCode === 200) {
      fileSystem.writeFile(destinationPath, data, 'utf8', function (err) {
        if (err) throw err;
      });
    }
  }
);
