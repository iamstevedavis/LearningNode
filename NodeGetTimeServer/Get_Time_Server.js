//
// This application is a server application that returns the current
// date and time. It zero pads the month, day, hour and minute
// to 2 integers. The server listens on the port specified via
// the command line.
//
//  Usage:
//      nodejs Get_Time_Server.js port
//
//

var net = require("net");

var port = process.argv[2];

// Zero pad the date and time. Not the best
// way to do it...
function GetFormattedDate(){
	var d = new Date();
	var fullYear = d.getFullYear();
	var month = d.getMonth();
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var formattedString = "";
	
	formattedString += fullYear + "-";
	
	month += 1;
	if(month < 10)
		formattedString += "0" + month;
	else
		formattedString += month;
	
	formattedString += "-";
	
	if(day < 10)
		formattedString += "0" + day;
	else
		formattedString += day;
		
	formattedString += " ";
	
	if(hours < 10)
		formattedString += "0" + hours;
	else
		formattedString += hours;
		
	formattedString += ":";
		
	if(minutes < 10)
		formattedString += "0" + minutes;
	else
		formattedString += minutes;
	
	return formattedString;
};

var server = net.createServer(function(socket){

	socket.end(GetFormattedDate() + "\r\n");
});

server.listen(port);