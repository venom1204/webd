console.log("welcome to functions")

function nice(name){
    console.log("hey " +name+ " you are nice")
    console.log("hey " +name+ " you are good")
    console.log("hey " +name+ " you are not that you")
    console.log("hey " +name+" you are winner")
}

nice("harry")
nice("vinit")

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}

result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x)=>{//this is a arrow function
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);