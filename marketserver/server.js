const express = require('express');
const app = express();

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', (req, res)  => {
  res.json({ message: 'hooray! welcome to our api!' });
});


app.use('/api', router);

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});