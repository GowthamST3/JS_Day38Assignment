const prompt = require("prompt-sync")();
var num = prompt("Enter the number to find Day in a Week" );
console.log("The Number is " +num);
switch (num) {
    case '1':
        console.log("Day is Sunday "); 
        break;

        case '2':
        console.log("Day is Monday "); 
        break;

        case '3':
        console.log("Day is Tuesday "); 
        break;

        case '4':
        console.log("Day is Wednesday "); 
        break;

        case '5':
        console.log("Day is Thursday "); 
        break;

        case '6':
        console.log("Day is Friday "); 
        break;

        case '7':
        console.log("Day is Saturday "); 
        break;
    default:
        console.log("No Day for for the number  " +num); 
        break;
}
