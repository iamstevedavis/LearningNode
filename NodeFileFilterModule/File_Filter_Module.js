//
//  Lists all the files in a directory based on the extension
//  that is passed in. This is the same as File_Filter except
//  that this time I do most of the lifting in a module.
//
//  Usage:
//      nodejs File_Filter_Module.js directory extension
//
//

var mymodule = require("./File_Filter_Module_Module");

var logging = false;

if(logging)
    console.log(process.argv);

var directory = process.argv[2];
var filter = process.argv[3];

if(logging)
    console.log("Directory: " + directory);
if(logging)
    console.log("Filter: " + filter);

// Call my module
mymodule(directory, filter, function(err, data){

	if(err) {
	
		return console.error("There was an error: ", err);
	}
	for(var i = 0; i < data.length; i++){
	
		console.log(data[i]);
	}
});