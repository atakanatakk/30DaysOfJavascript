let firstName = "Atakan"
let lastName = "Atak"
let country = "Turkey"
let city = "Istanbul"
let age = "24"
let isMarried = false
let year = new Date().getFullYear();

let vars = [firstName, lastName, country, city, age, isMarried, year];
vars.forEach(function (element) {
	console.log(typeof element);
    });

    
console.log(10 === '10') 

console.log (parseInt('9.8') === '10');

//True's
console.log(firstName == 'Atakan');
console.log(lastName == 'Atak');
console.log(country == 'Turkey');

//False's'
console.log(age == '21');
console.log(isMarried == true);
console.log(3 === '3') 

console.log (4 > 3) //true
console.log (4 >= 3) //true
console.log (4 < 3) //false
console.log (4 <= 3) //false
console.log (4 == 4) //true
console.log (4 === 4) //true
console.log (4 != 4) //false
console.log (4 !== 4) //false
console.log (4 != '4') //false
console.log (4 == '4') //true
console.log (4 === '4') //false
console.log ('phyton'.length == 'jargon'.length) //true

console.log (4 > 3 && 10 < 12) //true
console.log (4 > 3 && 10 > 12) //false
console.log (4 > 3 || 10 < 12) //true
console.log (4 > 3 || 10 > 12) //true
console.log (!(4 > 3)) //false
console.log (!(4 < 3)) //true
console.log (!(false)) //true
console.log (!(4 > 3 && 10 < 12)) //false
console.log (!(4 > 3 && 10 > 12)) //true
console.log (!(4 === '4')) //true
ekstra


const now = new Date()
console.log(now.getFullYear())

const now = new Date()
console.log(now.getMonth())

const now = new Date()
console.log(now.getDate())

const now = new Date()
console.log(now.getDay())

const now = new Date()
console.log(now.getHours())  

const now = new Date()
console.log(now.getMinutes())  

const now = new Date() //
console.log(now.getTime())