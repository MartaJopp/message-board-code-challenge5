var express = require ('express');
var router = express.Router();

router.post('/', function (req, res) {
    console.log(req.body); //message and username
    var messageToAdd = new Message(req.body); //renaming to work with mongoose
    messageToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // END SAVE
}); // END POST Route

module.exports = router;