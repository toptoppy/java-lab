var request1 = require('request');
var http = require('http');
var resultObj ;
var resultsx ;

request1.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Khon%20Kaen&key=AIzaSyCwGUoyRHwMXf5HE-BZjq_gNQZLAJycWrQ",
    (error, response, body) => {
        if (error) {
            return console.dir(error);
        }

        resultObj = JSON.parse(body);
        resultsx = resultObj.results;
    });

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write("<h2>Restaurants in Khon Kaen</h2>");
    res.write("<ol>");

    for (i = 0; i < resultsx.length; i++) {
        var allResults = resultObj.results[i];
        res.write("<li>");
        res.write(allResults['name']);
        res.write("</li>");
    }
    res.write("</ol>");
    res.end();
}).listen(8080);



