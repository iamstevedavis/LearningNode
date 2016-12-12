//
//  This application performs an HTTP Get on a given URL
//  passed in via command line. It prints the data to
//  the console as it is received.
//
//  Usage:
//      HTTP_Get.js www.myurl.com
//
//

// Include the HTTP module
var http = require("http");

var pageToGet = process.argv[2]

callback = function(response){
    response.setEncoding('utf8');
    response.on('error', function(e) {
        console.log("Got error: " + e.message);
    });
    // When the data event is fired, print the data
    response.on("data", function (someData){
        console.log(someData);
    });
};

http.get(pageToGet, callback);
