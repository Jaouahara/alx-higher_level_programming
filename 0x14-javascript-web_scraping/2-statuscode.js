#!/usr/bin/node

const httpRequest = require('request');

const targetUrl = process.argv[2];

httpRequest.get(targetUrl, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`code: ${res.statusCode}`);
  }
});
