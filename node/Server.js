const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'vuedb',
  password: 'postgres',
  port: 5432,
});

client.connect();

app.get('/users', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT * FROM users');
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  client.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error(err);
      res.send('Error ' + err);
    } else {
      res.send('PostgreSQL connected: ' + result.rows[0].now);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});