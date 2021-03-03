const readline = require('readline');

				const inp = readline.createInterface({
  input: process.stdin
});

				const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

				inp.on("close", () => {

//start-here

var a = 10;   

a = 40;
console.log(a);
var b = 20;
console.log(a+b);

//end-here
});