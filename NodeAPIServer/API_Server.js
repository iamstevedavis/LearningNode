//
// This application is a simple JSON api server. You can make a call passing
// in an hour, minute and second in iso format and then a subsequent call to get
// the time since epoch for that time. The calls and responses are as
// follows.
//
//  Call 1: GET /api/parsetime?iso=2011-01-12T09:11:12.294Z
//  Response:
//      {
//          "hour": xx,
//          "minute": xx,
//          "second": xx
//      }
//
//  Call 2: GET /api/unixtime
//  Response:
//      {
//          "unixtime": 345345234234
//      }
//
//  Usage:
//      nodejs API_Server.js port
//
//

// The modules we need
var http = require("http");
var fs = require("fs");
var url = require("url");

// This function just JSON.stringify the response
// for the first call.
function ParseTime(time){
    var returnData = JSON.stringify({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds() 
    });
    return returnData;
};

// This function just JSON.stringify the response
// for the second call.
function UnixTime(time){
    var returnData = JSON.stringify({
        unixtime: time.getTime()
    });
    return returnData;
};

// Some official documentation for my own personal reminder.
//http.createServer([requestListener])#
//Returns a new web server object.
//The requestListener is a function which is automatically added to the 'request' event. - See below
//Event: 'request'
//function (request, response) { }
//request is an instance of http.IncomingMessage and response is an instance of http.ServerResponse.
var server = http.createServer(function(req, res){  
	if(req.method != "GET"){
        res.end();
    }

    var urldata = url.parse(req.url, true);
	var time = new Date(urldata.query.iso);
	
    // First mapping. /api/parsetime?iso=...
    if(urldata.pathname.replace("/api/", "") == "parsetime"){        
		temp = urldata.query.iso;
        res.writeHead(200, {"Content-Type": "application/json" });
        res.write(ParseTime(time));
        res.end();
    }
    
    // Second mapping. /api/unixtime
    else if(urldata.pathname.replace("/api/", "") == "unixtime"){
        res.writeHead(200, {"Content-Type": "application/json" });
		res.write(UnixTime(time));
        res.end();
    }
    else{
        res.end();
    }
    
    req.on("end", function(){
        res.end();
    });
});

server.listen(process.argv[2]);