var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/usertest', { useNewUrlParser: true }, function(err, db) {
		if (err) throw err
		db.db('usertest').collection('Usertest').findOne({_id: ObjectId(req.params.id)},function(err, detailoftest) {
			res.render('usersdetailstest', {
				data: detailoftest
			});
		}) 
	})
});

module.exports = router;
