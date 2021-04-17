var string = "this is my string.";
var string2 = "This is not my sting.";
var string3 = "this is also my string.";
var string4 = "This is also not my sting.";

var regex = /This/i;
console.log( regex.test(string) );