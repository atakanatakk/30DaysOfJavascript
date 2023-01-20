//Üçgen Alan Hesaplama
let base = Number(prompt('Enter base of the triangle'));
let height = Number(prompt('Height of the triangle'));
let area = ((base*height) / 2);
console.log(`the area of the triangle is ${area}`); 


//Üçgen Çevre Hesaplama
let sideA = Number(prompt('Enter Side A of the triangle'));
let sideB = Number(prompt('Enter Side B of the triangle'));
let sideC = Number(prompt('Enter Side C of the triangle'));
let perimeter = sideA + sideB + sideC;
console.log(`the perimeter of the triangle is ${perimeter}`);


//Dikdörtgen Alan Hesaplama
let side1 = Number(prompt('Enter Side A of the rectangle'))
let side2 = Number(prompt('Enter Side B of the rectangle'))
let areaOfRectangle = side1*side2;
console.log(`the area of the rectangle is ${areaOfRectangle}`)

//Dairenin Çevresi ve Alanı
const pi= 3.14
let radius = Number(prompt('enter radius of the cercle'));
let circumference = 2*pi*radius;
let areaOfCircle = pi*radius*radius;
console.log(`the area of the circle is ${areaOfCircle} and the circumference of the cercle is ${circumference}`)

//Kişi ücreti
let hours = Number(prompt('Enter the hour'));
let rate = Number (prompt('Enter the rate per hour'));
let payment = hours*rate;
console.log(`your pay is ${payment}`)

//İsim Uzunluğu
let name = (prompt('Enter the name'));
(name.length>7) ? console.log("your name is long") : console.log("your name is short") ;

//Ad Soyad Karşılaştırma
let firstName = (prompt('Enter the name'));
let lastName = (prompt('Enter the last name'));
firstName.length>lastName.length ? console.log("your name longer then your last name") : console.log("your name shorter then your last name");

//Yaş Karşılaştırma
let myAge = Number(prompt('Enter the age'));
let yourAge = Number(prompt('Enter the age'));
(myAge>yourAge) ? console.log(`I am ${myAge-yourAge} years older then you`) : console.log(`You are ${yourAge-myAge} years older then me`);


//18 yaş üstü hesaplama
let birthDate = Number(prompt('Enter the age'));
(birthDate>18) ? console.log(`You are ${birthDate}. You are old enough to drive`) : console.log(`You are ${birthDate} You will be allowed to drive after ${18-birthDate} years.`);


