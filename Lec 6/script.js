let arr = [
    "Hi",
    "Hello",
    "Hey",
    "Hola"
]

//Adds the elem at the End
arr.push("Namaste")

//Adds the elem at the Start
arr.unshift("Heya")


let username = "Sameer"

// For Loop
document.write('<h2>For Loop</h2>')

document.write("<p>Simple loop with the condition and increment at the starting</p>")

for(let i = 0; i <  arr.length; i++){
    document.write(arr[i] + " " + username + " (for) <br />")
}

// While Loop
document.write('<h2>While Loop</h2>')

document.write("<p>While loop has the condition at the start and increment at the body</p>")

let count = 0;
while(count < arr.length){
    document.write(arr[count] + " " + username + " (while) <br />")
    count++
}

// Do While Loop
document.write('<h2>Do While Loop</h2>')

document.write("<p>Do While loop has the condition at the end and increment at the body. The body is executed at least one time.</p>")


let docount = 0;
do {
    document.write(arr[docount] + " " + username + " (do-while) <br />")
    docount++
} while(docount < arr.length)



// Declare 3 global variable scopes (const, let, var). Create a function and declare the variables again.

var x = 1
let y = 2
const z = 3

console.log("----- Global Scope -----")
console.log("x (var) : " + x)
console.log("y (let) : " + y)
console.log("z (const) : " + z)

function myFunc(){
    var x = 10
    let y = 20
    const z = 30

    console.log("----- Function/Block Scope -----")
    console.log("X : " + x)
    console.log("X : " + y)
    console.log("X : " + z)
}

myFunc()

console.log("----- Global Scope after calling function -----")
console.log("x (var) : " + x)
console.log("y (let) : " + y)
console.log("z (const) : " + z)