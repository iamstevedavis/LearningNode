//
//  Sum the numbers passed into the application
//  via the command line.
//
//  Usage:
//      nodejs Sum_Total.js first_number second_number ... nth_number
//
//

var logging = false;

if(logging)
    console.log(process.argv);

var argArr = process.argv;
if(logging)
    console.log("Length: " + argArr.length);
var sum = 0;

// argArr.length - 1 to account for offset
// i >= 2 to account for [0] = "nodejs" [1] = Sum_Total.js
for(var i = argArr.length - 1; i >= 2; i--){
    if(logging)
        console.log("argArr[i]: " + argArr[i]);
    if(argArr[i] === "undefined" ){
    
        sum = 0;
        break;
    }
    var tmpInt = parseInt(argArr[i]);
    if(isNaN(tmpInt)){
    
        continue;
    }
    sum += tmpInt;
}

console.log(sum);