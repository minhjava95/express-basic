
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET users listing. */
router.get('/', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/usertest', { useNewUrlParser: true }, function(err, db) {
		if (err) throw err
		db.db('usertest').collection('Usertest').find({}).toArray(function(err, user) {
			res.render('userstest', {
				data: user
			});
		})
	})
});

module.exports = router;
