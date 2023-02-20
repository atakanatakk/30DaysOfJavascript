//random id
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz"
let randomChars = ""
for (let i = 0; i < randomChars.length; i++) {
	let random = Math.floor(Math.random() * randomChars.length)
	randomChars += chars[random];
}
console.log(randomChars)

//random countries 
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let randomCountries =[]
for (let i = 0; i < countries.length; i++) {
	const randomIndex = Math.floor(Math.random() * countries.length);
	randomCountries.push(countries[randomIndex]);
}
console.log(randomCountries);

//countries length
let countries2 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let countriesLength=[]
for (let i=0; i<countries2.length; i++) {
	countriesLength.push(countries2[i].length)
}
console.log(countriesLength);

//new countries array
let countries3 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let countriesNew = []
for (let i=0; i<countries3.length; i++) {
	countriesNew.push(countries3[i], countries3[i].slice(0,3), countries3[i].length)
}
console.log(countriesNew);

//LAND
const countries4 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
const countriesContainingLand = [];

for (let i = 0; i < countries4.length; i++) {
  if (countries4[i].includes("LAND")) {
    countriesContainingLand.push(countries4[i]);
  }
}

if (countriesContainingLand.length > 0) {
  console.log("Bu ülkeler 'land' içeriyor: ", countriesContainingLand);
} else {
  console.log("Hiçbir ülke 'land' içermiyor.");
}

//longest country name
const countries5 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let longestCountry = countries5[0];

for (let i = 1; i < countries5.length; i++) {
  if (countries5[i].length > longestCountry.length) {
    longestCountry = countries5[i];
  }
}
console.log("En uzun ülke: ", longestCountry);

//5word countries
const countries6 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let countriesWithFiveChars = [];
for (let i = 0; i < countries6.length; i++) {
    if (countries6[i].length === 5) {
        countriesWithFiveChars.push(countries6[i])
    }
}
console.log(countriesWithFiveChars)