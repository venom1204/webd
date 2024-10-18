let num=[1,2,45,3,4]

num.forEach((element)=>{
    console.log(element*2)//this is the example og for each loop
})

 //ARRAY FROM is used to create amn arry from the other object example-array.from["harry"]
let name="vinit"
let arr=Array.from(name)
console.log(arr) 

//for  off loop
for(let item of num){
    console.log(item)//this si the short meathod to acess all th eelements of the loop
}


//for in loop
for(let i in num){
    console.log(i)// this loop is used to give the keys of the array not the keys value
}
   
for(let item of num){
    console.log(item.key)
}

