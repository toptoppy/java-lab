var express = require('express');
var app = express();
var fs = require("fs");
var jsonfile = require('jsonfile');

const file = 'data.json';
let obj = {
    'name': 'CM',
    'courses': [
        '198330',
        '198371'
    ],
    'places': {
        'residence': 'Khon Kaen',
        'visits': [
            'Songkla',
            'Bangkok'
        ]
    }
}

jsonfile.writeFile(file,obj, function (err) {
    if (err) console.error(err);
});


app.get('/', function (req, res) {
    fs.readFile(__dirname + "/" + "data.json", "utf8",
        function (err, data) {
            data = JSON.parse(data);
            console.log("=== The values of the second course and the residence ===");
            console.log("Studying " + data.courses[1] + " living in " + data.places.residence);
            res.send(data);
        });
});

var server = app.listen(8080, function () {
});