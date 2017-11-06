var express = require ('express');
var router = express.Router();

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema({ username: String, write: String });

var Message = mongoose.model('Message', MessageSchema, 'messages');

router.post('/', function (req, res) {
    console.log(req.body); //rental property received in addRental function
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

router.get('/', function (req, res) {
    Message.find({}, function (err, messagesFound) { 
        if (err) {
            console.log("ERROR!", err);
            res.sendStatus(500);
        } else {
            res.send(messagesFound);
        }
    }); // END FIND
}); // END GET Route

module.exports = router;