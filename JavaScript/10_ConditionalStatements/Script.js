let age = 18;

// if else
if (age >= 18) {
    console.log("not kid")
} else {
    console.log("kid")
}

// Ternary Operator (if else but 1 line)
let message = (age >= 18) ? "not kid" : "kid";
console.log(message);

// if else if else
let score = 85

if (score >= 90) {
    console.log("Grade: A")
} else if (score >= 80) {
    console.log("Grade: B")
} else if (score >= 70) {
    console.log("Grade: c")
} else if (score >= 60) {
    console.log("Grade: D")
} else {
    console.log("Grade: F")
}

// switch
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName)