var express = require('express');
var app = express();

// app.get('/', function(req, res){
//     res.send('Hello world form server.js');
// });

app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function(req, res){
    
    person1  = {
        name: 'ngocmai1',
        email: 'ngocmai93@gmail.com',
        phone: '0979030879'
    };
    person2  = {
        name: 'ngocmai2',
        email: 'ngocmai93@gmail.com',
        phone: '0979030879'
    };
    person3  = {
        name: 'ngocmai3',
        email: 'ngocmai93@gmail.com',
        phone: '0979030879'
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
    res.send(contactlist);
    console.log(contactlist);
});

app.listen(3000);

console.log("server is running at port 3000");

