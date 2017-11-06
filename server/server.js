var express = require ('express');
var app = express();
var port = 5000;
var bodyParser = require('body-Parser');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening', port);
});
