console.log("hello help me");

var a = Math.random();

if (a > 0.5) {
    console.log("you can vote");
} else {
    console.log("you can't");
}

if (age === 18) {
    console.log("You can drive");
} else if (age === 0) {
    console.log("Are you kidding?");
} else if (age === 1) {
    console.log("Are you again kidding?");
} else {
    console.log("You cannot drive");
}

const a = 6;
const b = 8;
const c = a > b ? (a - b) : (b - a);

console.log("Value of c is: " + c);

// Equivalent if-else block (corrected to match ternary logic)
let cEquivalent;
if (a > b) {
    cEquivalent = a - b;
} else {
    cEquivalent = b - a;
}

console.log("Value of cEquivalent is: " + cEquivalent);
