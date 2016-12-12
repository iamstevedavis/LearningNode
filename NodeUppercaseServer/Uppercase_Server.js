//
// This application is a simple server that responds to POST requests.
// The request will contain a chunk of data and the server
// will reply with the same data in uppercase.
//
//  Usage:
//      nodejs Uppercase_Server.js port
//
//

var http = require("http");
var fs = require("fs");

// Some official documentation about http.createServer
//http.createServer([requestListener])#
//Returns a new web server object.
//The requestListener is a function which is automatically added to the 'request' event. - See below
//Event: 'request'
//function (request, response) { }
//request is an instance of http.IncomingMessage and response is an instance of http.ServerResponse.
var server = http.createServer(function(req, res){
	
    var totalData = "";
    
	if(req.method != "POST"){
        res.end();
    }
	
    req.on("data", function(chunk){
        totalData += chunk;
    });
    // We got all the data from the client.
    // Send it back as uppercase.
    req.on("end", function(){
        totalData = totalData.toUpperCase();
        res.writeHead(200, {"content-type":"text/plain"});
        res.write(totalData);
        res.end();
    });
});

server.listen(process.argv[2]);