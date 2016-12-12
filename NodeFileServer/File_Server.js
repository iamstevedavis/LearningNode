//
// This application is a simple file server. When you start the application
// you specify the port and the file to serve and any requests will
// cause the application to serve up the file.
//
//  Usage:
//      nodejs File_Server.js port file_to_serve.txt
//
//

var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
    // Be nice and tell the client OK and the content type we are sending back.
	res.writeHead(200, {"content-type":"text/plain"});
    // Should be error checking here but quick and dirty we can
    // assume everything is okay.
	var readableStream = fs.createReadStream(process.argv[3], {flags: "r"});
	readableStream.pipe(res);
});

server.listen(process.argv[2]);