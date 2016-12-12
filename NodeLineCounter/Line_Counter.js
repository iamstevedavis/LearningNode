//
//  Counts the total number of lines in a file.
//
//  Usage:
//    nodejs Line_Counter.js file_path
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

// Read the file contents into filebuffer (not async)
var fileBuffer = fs.readFileSync(filePath);

if(logging)
    console.log("length: " + fileBuffer.length);

var count = 0;

for(var i = 0; i < fileBuffer.length; i++){

    if(logging)
        console.log("i: " + fileBuffer[i]);
        
    // 10 is the ascii representation of a line feed
    if(fileBuffer[i] === 10){
    
        if(logging)
            console.log("Found One @ position: " + i);
        
        count++;
    }
}
console.log(count);