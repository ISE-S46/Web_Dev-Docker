const gundams = ["00", "Exia", "Strike"]; // array literal
console.log(gundams);
console.log(gundams.length);
console.log(gundams[0]);
gundams[2] = "Unicorn";
console.log(gundams[2]);

// 1. .push(); = add element to array from last
gundams.push("Penelope");
console.log(gundams[3]);

// 2. .pop() = remove last element from array
gundams.pop();
console.log(gundams);

// 3. .shift() = remove first element from array
gundams.shift();
console.log(gundams);

// 4. .unshift() = add element to array from first
gundams.unshift("Turn A");
console.log(gundams);

const company = new Array("AMD", "Nvidia", "Intel");
console.log(company);

// 5. .concat() = combine arrays
const concatArrays = gundams.concat(company);
console.log(concatArrays);


// array iteration

const numbers = [5,4,3,2,1];

// forEach()
numbers.forEach(function(number){
    console.log(number);
})

/* Output:
5
4
3
2
1
*/

// map()
const doubled = numbers.map(function(number){
    return number * 2;
})
console.log(doubled);
// Output: [10,8,6,4,2]

// filter()
const even = numbers.filter(function(number){
    return number % 2 === 0;
})
console.log(even);
// Output: [4,2]

// reduce()
const sum = numbers.reduce(function(total, number){
    console.log(total, number);
    return total + number;
}, 0)
console.log(sum);
// ouput: 15

// some()
const hasEven = numbers.some(function(number){
    return number % 2 === 0;
})
console.log(hasEven);
// Output: true

// every()
const allPos = numbers.every(function(number){
    return number > 0;
})
console.log(allPos);
// Output: true 

// find()
const firstEven = numbers.find(function(number){
    return number % 2 === 0;
})
console.log(firstEven);
// Output: 4 (first num in array that sastisfy condition, if no sastisfy condition return undefined)

// findIndex() (if no sastisfy condition return -1)
const firstEven2 = numbers.findIndex(function(number){
    return number % 2 === 0;
})
console.log(firstEven2);
// Output: 1 (index 1) (if no sastisfy condition return -1)