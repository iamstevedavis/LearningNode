//
//  This module filters a list of files in a
//  directory based on arguments passed in from the
//  command line.
//
//  Usage:
//      module(directory, filter, function(err, data)         
//
//

//Include some modules we need
var fs = require("fs");
var path = require("path");

//  Parameters:
//      directory: The path to the files you want to filter on
//      filter: The file extension you want to filter on
//      function(err, data): The callback function where
//          err: If an error occured, will contain the error data
//          data: An array of files that match the criteria
// 
module.exports = function(directory, extension, callback){

    fs.readdir(directory, function(err, data){
        if (err){
            return callback(err);
        }
        
        //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        data = data.filter(function(file) {
            
            var ext = path.extname(file);
                
            if(ext === "." + extension)
                return true;
            else
                return false;
        });
        callback(null, data);
    });
}

