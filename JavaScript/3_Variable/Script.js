// auto variable (not recommend)
x = 5;
y = 10;
z = x + y;
console.log(z);

// var (not recommend deprecated in 2015)
var x1 = 5;
var y1 = 10;
var z1 = x1 + y1;
console.log(z1);

var name = "John Honkai";
name = "Honkai StarRail"
console.log(name);

// let (recommended) let also cant redeclare again
let x2 = 5;
let y2 = 10;
let z2 = x2 + y2;
console.log(z2);

let name2 = "John Wuthering";
name2 = "Wuthering Wave"
console.log(name2);

// const (recommended)
const a = 10;
const b = 20;
const c = a * b;
console.log(c);

const name3 = "John Warhammer";
name3 = "Horus Heresy"
console.log(name3); // error const cant change after declared and cant redeclare again


//Global Scope
{
    //Block Scope
    let s = 2;
}
console.log(s);