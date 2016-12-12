//
//  Lists all the files in a directory based on the extension
//  that is passed in.
//
//  Usage:
//      nodejs File_Filter.js file_path extension
//
//

// We need the file system module
var fs = require("fs");
// We need the path module
var path = require("path");

var logging = false;

if(logging)
    console.log(process.argv);

// Get the file path
var directory = process.argv[2];
// Get the extension to filter by
var filter = process.argv[3];

if(logging)
    console.log("Directory: " + directory);
if(logging)
    console.log("Filter: " + filter);
	
// Callback for fs.readdir
var getFiles = function(err, data) {
    if (err) throw err;
    var files = data;
    
	for(var i = 0; i < data.length; i++){
        
        // Get the file extension
		var ext = path.extname(data[i]);
		if(logging)
			console.log("data[" + i + "]: " + data[i]);
        
        // Remove the . from the file extension
		ext = ext.replace(".", "");
		if(logging)
			console.log("Ext: " + ext);
            
        // If the extension matches the filter print it
		if(ext === filter)
			console.log(data[i]);
	}
}
    
fs.readdir(filePath, getFiles);