// for loop
let fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let i = 1; i <=5; i++) {
    console.log("Number " + i);
}

// for in loop
let person = {
    name: "Caelus",
    age: "2",
    city: "Penacony"
}

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for of loop
let HSR = ["Firefly", "Castorice", "Ruan mei", "Gallagher"];
for (let char of HSR) {
    console.log(char);
}

// While loop
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

// do while loop

let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5)