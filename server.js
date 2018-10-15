const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
// #######################
// ##### IMPORTANT #######
// Adding `cors` package
// so API allows calls by
// front-end (Allow-all)
var cors = require('cors');
// ##### /IMPORTANT ######
// #######################
 
// #####################
// ##### IMPORTANT #####
// make express use the
// `cors` middleware
app.use(cors());
// ##### /IMPORTANT ####
// #####################
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.get('/api/store', (req, res) => {
  axios({
    method:'get',
    url:'https://istheapplestoredown.com/api/v1/status/worldwide'
  })
    .then(function (response) {
     // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      res.send({ data: response.data });

    });
  
});
/*
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}*/
app.listen(port, () => console.log(`Listening on port ${port}`));