//
//  Counts the total number of lines in a file - async
//
//  Usage:
//      nodejs Async_Line_Counter.js file_path
//
//

// We need the file system module
var fs = require("fs");

var logging = false;

if(logging)
    console.log(process.argv);

var filePath = process.argv[process.argv.length - 1];

if(logging)
    console.log("Filepath: " + filePath);

// Callback for fs.readFile
var calcNewLines = function(err, data) {
    if (err) throw err;
    var fileBuffer = data;
    var count = 0;
    
    if(logging)
        console.log("length: " + fileBuffer.length);
    
    // Loop through the characters in the file
    for(var i = 0; i < fileBuffer.length; i++){

        if(logging)
            console.log("i: " + fileBuffer[i]);
            
        // Check if the character is a new line
        if(fileBuffer[i] === 10){
        
            if(logging)
                console.log("Found One @ position: " + i);
            
            count++;
        }
    }
    console.log(count);
}
    
fs.readFile(filePath, calcNewLines);