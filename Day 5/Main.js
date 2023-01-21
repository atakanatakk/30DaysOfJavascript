console.log(countries);
console.log(webTechs);

//Ethiopia
if (countries.includes=("Ethiopia"))
	{
	console.log("ETHIOPIA")
	}
else {
	console.log(countries.push("Ethiopia"))
}

//Sass
if (webTechs.includes=("Sass"))
{
	console.log("Sass is a CSS preprocess")
}
else {
	console.log(webTechs.push("Sass"))
}

//Backend Frontend
const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const  backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//slice
console.log(countries.slice(0,9))

//mid country
const middle = Math.floor(countries.length / 2);
if (countries.length % 2 !== 0) {
  console.log(`The middle country is: ${countries[middle]}`);
} 
else {
  console.log(`The middle countries are: ${countries[middle-1]} and ${countries[middle]}`);
}

//last question
if (countries.length % 2 === 0) {
	let a = countries.length / 2;
	console.log(countries.slice(0, a));
	console.log(countries.slice(a + 1,countries.length -1))
    } else {
	countries.push("Turkey");
	let b = countries.length / 2;
	console.log(countries.slice(0, b));
	console.log(countries.slice(b + 1, countries.length - 1))}