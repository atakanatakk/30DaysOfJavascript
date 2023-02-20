//while
let i = 0
while (i <=10){
	console.log(i)
	i++
}

let i = 10
while (i >=0){
	console.log(i)
	i--
}

//do while
let i = 0
do {
	console.log(i)
	i++
}	while(i <= 10)

let i = 10
do {
	console.log(i)
	i--
}	while(i >= 0)


// 0 to n
let n = Number(prompt("Enter a number"));
for (let i = 0; i<= n; i++){
	console.log(i);
}

//###
let n = ""
for (let i = 0; i < 7; i++) {
	n += "#"
	console.log(n)
}

//square root
for (let i=0; i<=10; i++) {
	console.log(`${i} x ${i}= ${i*i}`)
}

//i^2   i^3
for (let i=0; i<=10; i++) {
	console.log(`${i}  ${i*i} ${i*i*i}`)
}

//even nums
for (let i=0; i<=100; i++) {
	if(i%2==0){
		console.log(i)
	}
}

//odd nums
for (let i=0; i<=100; i++) {
	if (i%2 > 0){
		console.log(i)
	}	
}

//prime nums
for (let i = 0; i <= 100; i++) {
	for (let k = 2; k < i; k++) {
	    if (i % k === 0 && i > 1) {
		console.log(i)
	    }
	}
    }

//sum of all nums
let sum = 0;
	for (let i = 0; i <=100; i++) {
		sum+=i;
	}
	console.log(`0 ile 100 arasındaki sayıların toplamı: ${sum}.`)


//sum odds and evens
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 > 0) {
        odd += i
    }
}
console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)