const { response } = require('express');
var express = require('express');
var router = express.Router();
var chatHistory = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ message: 'back-end api works' });
});

router.get('/history', function(req, res, next) {
  res.send(chatHistory);
});

router.post('/history', function(req, res, next) {
  console.log(req.body);

  chatHistory.push({ message: req.body.message, nickname: req.body.nickname, date: req.body.date, type: req.body.type });
  res.json({ message: 'History created!' });
});

module.exports = router;
