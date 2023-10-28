const express = require('express');

const app = express();

app.use('/api/fullname', (req, res, next) => {
    const fullname = [
      {
        _id: 'oeihfzeoi',
        name: 'Mon nom',
      },
    ];
    res.status(200).json(fullname);
  });

module.exports = app;