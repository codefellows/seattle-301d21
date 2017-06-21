'use strict';

const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const connectionString = 'postgres://localhost:5432/demo';
const client = new pg.Client(connectionString);
client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('./public/index.html');
});

app.get('/db/person', function(request, response) {
  client.query('SELECT * FROM persons;')
  .then(function(data) {
    response.send(data);
  })
  .catch(function(err) {
    console.err(err);
  });
});

app.post('/db/person', function(request, response) {
  client.query(`
    INSERT INTO persons(name, age, ninja)
    VALUES($1, $2, $3);
    `,
    [
      request.body.name,
      request.body.age,
      request.body.ninja
    ]
  )
  .then(function(data) {
    response.redirect('/');
  })
  .catch(function(err) {
    console.err(err);
  });
});

createTable();

app.listen(PORT, () => {
  console.log(`currently listening on ${PORT}`);
});

function createTable() {
  client.query(`
    CREATE TABLE IF NOT EXISTS persons(
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      age INTEGER,
      ninja BOOLEAN
    );`
  )
  .then(function(response) {
    console.log('created table in db!!!!');
  });
};
