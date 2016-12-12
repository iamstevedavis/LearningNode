//
// This application performs an HTTP Get on a number of given URLs
// passed in via command line. It collects the data
// before printing it AND prints out the data from the URLs
// in the same order they were passed in.
//
//  Usage:
//      nodejs Handling_Callbacks.js www.myurl.com
//
//

// Include the required modules.
var http = require("http");

var storage = [];
var urlList = [];
var asyncCounter = 0;

// Store all the URL's from the command line in an array
for(var i = 2; i < process.argv.length; i++){
    urlList.push(process.argv[i]);
}

// This function prints out all the data in the storage array
// The storage array contains the data received from http.get
function AsyncComplete(){
    for(var j = 0; j < storage.length; j++){
        console.log(storage[j]);
    };
};

// "Entry" function
function main(){
	// Do an http get on each of the provided URL's
    for(var i = 0; i < urlList.length; i++){
        (function(i){
            http.get(urlList[i], function(response){
                var body = "";
                // Got a chunk of data!
                response.on("data", function(chunk){
                    body += chunk;
                });
                // All done with our request. 
                response.on("end", function (){
                    // Store the total response from the URL
                    storage[i] = body;
                    asyncCounter++;
                    // Check if we can print the results yet
                    // I want to wait for all the calls to complete so I am using a counter
                    if(asyncCounter == urlList.length){
                        AsyncComplete();
                    }
                });
            });
        })(i);
    };
};

main();
