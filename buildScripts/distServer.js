import express from "express";
import path from "path";
import open from "open";
import compression from "compression";
/* eslint-disable no-console */

const port = 3000;
const app = express();

// Serve files in the dist
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  // Hard coding for simplicity. Preten this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email" : "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email" : "tnorton@yahoo.com"},
    {"id": 3, "firstName": "TIna", "lastName": "Lee", "email" : "lee.tina@hotmail.com"}
  ]);
});

app.listen(port, (err) => {
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
