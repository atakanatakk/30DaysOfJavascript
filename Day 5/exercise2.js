//words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text.split("")
console.log(text.length) //76

//shopping cart
const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (shoppingCart.includes("Meat")) {
	console.log(shoppingCart)
}
else {
	console.log(shoppingCart.unshift("Meat"))
}

//Sugar
if (shoppingCart.includes("Sugar")) {
	console.log(shoppingCart)
}
else {
	console.log(shoppingCart.push("Sugar"))
}

//Honey
let alergicHoney = prompt("Do you have a alergic to honey? (Yes/No)");
if (alergicHoney=="Yes") {
	console.log(shoppingCart.pop())
}
else {
	console.log(shoppingCart)
}

//green tea
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
