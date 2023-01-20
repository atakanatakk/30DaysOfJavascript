let challenge = "30 Days Of JavaScript"
console.log(challenge)

console.log(challenge.length) //21

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(0,2)) //30

console.log(challenge.substr(2,21)) //Days Of JavaScript

console.log(challenge.includes("Script")) //true

console.log(challenge.split())

console.log(challenge.split(' '))

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(companies.split(','))

console.log(challenge.replace('JavaScript', 'Phyton'))
console.log(challenge.replace('Phyton', 'JavaScript')) //eski haline çevrildi

console.log(challenge.charAt(15)) //S

console.log(challenge.charCodeAt("J")) //51

console.log(challenge.indexOf("a")) //4

console.log(challenge.lastIndexOf("a")) //14

let cumle = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır"

console.log(cumle.indexOf("çünkü")) //12

console.log(cumle.lastIndexOf("çünkü")) //43

console.log(cumle.search("çünkü")) //12

let string = '   30 Days Of JavaScript   '

console.log(string.trim(' '))

console.log(challenge.startsWith("30")) //true

console.log(challenge.endsWith("JavaScript")) //true

console.log(challenge.match("a")) //['a', index: 4, input: '30 Days Of JavaScript', groups: undefined]

let string2 = '30 Days of '
console.log(string2.concat("JavaScript"))

console.log(challenge.repeat(2))