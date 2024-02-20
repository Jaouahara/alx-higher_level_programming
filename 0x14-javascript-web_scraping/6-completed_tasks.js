#!/usr/bin/node

const httpRequest = require('request');

const apiUrl = process.argv[2];
const output = {};

function countCompleted(todo) {
  if (todo.completed) {
    const userId = todo.userId.toString();
    output[userId] = output[userId] + 1 || 1;
  }
}

httpRequest(apiUrl, (err, res, body) => {
  if (err) throw err;
  if (res.statusCode === 200) {
    JSON.parse(body).forEach(countCompleted);
    console.log(output);
  }
});
