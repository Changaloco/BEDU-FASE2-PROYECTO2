const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const listener = app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is listening on port ` + listener.address().port);
  });