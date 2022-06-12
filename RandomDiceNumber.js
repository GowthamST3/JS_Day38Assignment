var getRandomDiceNum =  Math.floor(Math.random() * 6);
console.log("my random dice number is : "+ getRandomDiceNum);
console.log("****************************************");

 //generated two random dice numbers...
 var firstRandomDiceNum = Math.floor(Math.random() * 6);
 var secondDiceRandomNum =  Math.floor(Math.random() * 6);
 var sum=firstRandomDiceNum+secondDiceRandomNum;
 console.log("Generating the random dice numbers Two times : ")
 console.log("this is first random dice number : " + firstRandomDiceNum);
 console.log("this is a second random dice number : " + secondDiceRandomNum);
 console.log("The sum two Dice number is : " + sum);
console.log("****************************************************");


//generating two digits random number and find their sum and avg..
var firstValue =  Math.floor(Math.random() * 10 + 13);
var secondValue = Math.floor(Math.random() * 10 + 17);
var thirdValue =  Math.floor(Math.random() * 10 + 15);
var fourthValue = Math.floor(Math.random() * 10 +11);
var fifthValue =  Math.floor(Math.random() * 10 + 11);
var sum = firstValue + secondValue + thirdValue + fourthValue + fifthValue;
var avg = firstValue + secondValue + thirdValue + fourthValue + fifthValue/5;
console.log("this is a sum of five random numbers : " + sum );
console.log("this is avg of a five values : " + avg);
console.log("****************************************************");

//unit conversion...
console.log("given value is 1 feet = 12 inch ")
var Givenfeet = 12;
var givenInchValue = 42;
var getFeetValue = 42/12;
console.log("then 42 inch means : " + getFeetValue+ "inch");
console.log("****************************************************");

//plot calculation..
var areaOfPlot = 60*40;
console.log("area of one plot : "+ areaOfPlot+" squarefeet");
var areaOfAnotherPlots = 2400*25;
console.log("area of 25 plots : "+ areaOfAnotherPlots+ " squarefeet");
console.log(" 1 acre = 43560 squarefeet..");
var areaInAcres = 2400*25/43560;
console.log("area of 25 plots in acres : "+ areaInAcres+" acres");
console.log("****************************************************");
