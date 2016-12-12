//
// This application performs an HTTP Get on a given URL
// passed in via command line. It collects the data
// before printing it and also prints the amount of data
// collected by counting the characters.
//
//  Usage:
//      nodejs Get_and_Count.js www.myurl.com
//
//

// Include the modules we need
var http = require("http");

var pageToGet = process.argv[2]
var totalData = "";
var charCount = 0;

callback = function(response){
    response.on('error', function(e) {
        console.log("Got error: " + e.message);
    });
    response.on("data", function (someData){
        totalData += someData;
        charCount += someData.length;
    });
    response.on("end", function () {
        console.log(charCount);
        console.log(totalData);
    });
};

http.get(pageToGet, callback);
