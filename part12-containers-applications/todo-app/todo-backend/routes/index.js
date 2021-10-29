const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  console.log('test server II')
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* staticstics endpoint */
router.get('/statistics', async (req, res) => {
  let value = await redis.getAsync("added_todos")
  if (value === null) {
    value = 0
  }
  data = {
    "added_todos": Number(value)
  }
  res.send(data)
})

module.exports = router;
