#!/usr/bin/node

const httpRequest = require('request');

const apiUrl = process.argv[2];

httpRequest.get(apiUrl, (err, res, data) => {
  if (err) {
    console.error(err);
  } else if (res.statusCode !== 200) {
    console.error(`Error: ${res.statusCode} - ${res.statusMessage}`);
  } else {
    const films = JSON.parse(data).results;
    const characterId = '18';
    const count = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length;
    console.log(count);
  }
});
