var express = require('express');
var app = express();

// app.get('/', function(req, res){
//     res.send('Hello world form server.js');
// });

app.use(express.static(__dirname + '/public'));

app.listen(3000);

console.log("server is running at port 3000");