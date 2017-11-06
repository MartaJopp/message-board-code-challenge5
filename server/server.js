var express = require ('express');
var app = express();
var port = 5000;
var bodyParser = require('body-Parser');
var messageRouter = require('./routes/message.router.js');
var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/messageboard';


app.use(bodyParser.json());

app.use(express.static('server/public'));
app.use('/messages', messageRouter);


mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!'); //lets us know mongoose is connected
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);

app.listen(port, function(){
    console.log('listening', port);
});
