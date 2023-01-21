//Empty array
const bosDizi = []
console.log(bosDizi)

//+5 element list
const elements = [1,2,3,4,5]
console.log(elements)
//find length
console.log(elements.length)
//first,mid,last elements
let firstItem = console.log(elements[0]);
let middleItem = console.log(elements[2]);
let lastItem = console.log(elements.length-1);

//mixedDataTypes length
const mixedDataTypes = [1,2,"Cancel",[6,7,8],"Yes"];
console.log(mixedDataTypes.length)

//ItCompanies
const ItCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(ItCompanies)
console.log(ItCompanies.length)
console.log(ItCompanies[0])
console.log(ItCompanies[3])
console.log(ItCompanies.length-1);


let upperCase = ItCompanies.toUpperCase
console.log(upperCase)

//find company
console.log(`${ItCompanies} are big IT companies.`)
let searchCompany = prompt("search a company name");
if (ItCompanies.includes(searchCompany)) {
	console.log(searchCompany)
}
else {
	console.log("company not found")
}

//oo
let oo = []
for (let i = 0; i < ItCompanies.length; i++) {
	oo.push(ItCompanies[i].includes("oo"));
}

ItCompanies.sort();
ItCompanies.reverse();
ItCompanies.slice(0, 3);
ItCompanies.slice(ItCompanies.length - 1, 3)
ItCompanies.slice(Math.floor(ItCompanies.length / 2), 1);
ItCompanies.shift();
ItCompanies.pop();
ItCompanies.length = 0;