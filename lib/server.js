const express = require('express');
const app = express();

let categories = [];

// global middleware
app.use(express.json());

app.get('/categories', (req, res) => {
  res.status(200).json(categories);
});

app.post('/categories', (req, res) => {
  categories.push(req.body);
  res.status(201).json(req.body);
});

module.exports = {
  server: app,
  start: function(port){
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
  },
};


// app.get('/categories', (req, res) => {
//   const output = {
//     name: req.query.name,
//   };
//   res.status(200).json(output);
// });
