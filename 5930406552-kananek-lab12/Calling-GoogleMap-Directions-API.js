var request1 = require('request');
var http = require('http');
var resultObj ;
// http://localhost:8000/direction_api.json
// https://maps.googleapis.com/maps/api/directions/json?origin=Khon%20Kaen&destination=Bangkok&key=AIzaSyCzzTsQUnxKhHrYavRM5DQQezU5a7_JWbI
request1.get("https://maps.googleapis.com/maps/api/directions/json?origin=Khon%20Kaen&destination=Bangkok&key=AIzaSyCzzTsQUnxKhHrYavRM5DQQezU5a7_JWbI",
    (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        resultObj = JSON.parse(body);
    });

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write("<h2>directions from Khon Kaen to Bangkok</h2>");
    res.write("<ol>");
    for (var i = 0; i < resultObj.routes[0].legs[0].steps.length ; i++) {
        var distance = resultObj.routes[0].legs[0].steps[i].distance.text;
        var textD = resultObj.routes[0].legs[0].steps[i].html_instructions;
        res.write("<li>");
        res.write(textD +"</br>") ;
        res.write("<text style ='color:blue'>("+distance + ")</text>");
        res.write("</li>");
    }
    res.write("</ol>");
    res.end();
}).listen(8080);



