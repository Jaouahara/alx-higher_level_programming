#!/usr/bin/node

const httpRequest = require('request');

const filmId = process.argv[2];

httpRequest.get(apiUrl, (err, res, filmData) => {
  if (err) {
    console.error(err);
  } else if (res.statusCode !== 200) {
    console.error(`Error: ${res.statusCode} - ${res.statusMessage}`);
  } else {
    const film = JSON.parse(filmData);
    console.log(film.title);
  }
});
