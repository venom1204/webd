console.log("tut on loops");

// Define 'a' before using it in the loop
let a = 0; 

for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
};
 
//the for in loop is for the obejects and the for off loop is for the array because of its iterative property
for (const key in obj) {  //for thyping this long for loop for objects just type forin and press enter
    console.log(key);
}

for (const c of "Harry") {
    console.log(c);
}
//for in loop is for the object and for of is for the keys
// Ensure 'i' is not redeclared
let j = 0; 
while (j < 60000) {
    console.log(j);
    j++;
}

let k = 10; 
do {
    console.log(k);
    k++;
} while (k < 6);
