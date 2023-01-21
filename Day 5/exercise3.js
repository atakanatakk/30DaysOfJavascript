const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let minAge = ages.sort()[0]
let maxAge = ages.sort()[ages.length - 1]
console.log(minAge, maxAge)

let midAge = ages.sort()[ages.length/2]
console.log(midAge)

let avgAge;
for (i = 0; i < ages.length; i++) {
    let totalAge = 0;
    totalAge += ages[i];
    avgAge = totalAge / ages.length;
}
console.log(avgAge)

let range = maxAge - minAge;
console.log(range);

console.log(Math.abs(minAge - avgAge) > Math.abs(maxAge - avgAge) ? 
`minAge - avgAge is greater than maxAge - avgAge` : 
`minAge - avgAge is less than maxAge - avgAge`);
