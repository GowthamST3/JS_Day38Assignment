console.log("Please select the options from below.....")
const prompt = require("prompt-sync")();
var select = prompt("enter 1,10,100,1000 to get this numbers in letters : ");
console.log("Selected option is: " + select);


switch(select) {
    case '1' :
        console.log(" it is a ONE " );
        break;
    case '10' :
        console.log("it is a TEN ");
        break;
    case '100' :
        console.log("it is a HUNDRED");
        break;
    case '1000' :
        console.log("it is a THOUSAND");
        break;
    default :
        console.log("Please select the correct given numbers");
}