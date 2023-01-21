//Drive Age
let age = prompt("Enter your age")
if (age>18){
	console.log("You are old enough to drive")
}
else {
	console.log(`You need to wait ${18-age} years`)
}

//Yaş Karşılaştırma
let yourAge= prompt("Enter your age")
let myAge = 24
if (myAge>yourAge){
	console.log(`I am ${myAge - yourAge} years older then you`)
}
else if (yourAge==myAge){
	console.log(`We are the same age as you`)
}

else {
	console.log(`You are ${yourAge - myAge} years older then me`)
}

//ternary
(a > b) ? console.log("a is greater than b"): console.log("a is less than b");

let a = 4;
let b = 3;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");}

//even or odd     
let num= prompt("Enter number")
if (num % 2 == 0){
	console.log(`${num} is an even number`)
}
else{
	console.log(`${num} is an odd number`)
}
