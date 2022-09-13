let myVar = "sample text"

let myNumber = 10
let anotherNumber = "10"

console.log("The text : " + myVar)
console.log("Character at 0 : " + myVar.charAt(0))
console.log("To uppercase : " + myVar.toUpperCase(0))
console.log("Total length : " + myVar.length)
console.log("Does it include test? : " + myVar.includes('text'))
console.log("Does it include same? : " + myVar.includes('same'))
console.log("Slice it from 0 to 6 : " + myVar.slice(0, 6))

console.log('----------------')

console.log("Number 1 (int) : " + myNumber)
console.log("Number 2 (String) : " + anotherNumber)

console.log("Example of == : " + (myNumber == anotherNumber))
console.log("Example of === : " + (myNumber === anotherNumber))

console.log("Example Number.isInteger : " + Number.isInteger(myNumber))

console.log("------------- if else example -------------")

let marks = 70;
console.log( marks )

if(marks >= 95){
    console.log("Grade A+, Outstanding!")
} else if(marks >= 85) {
    console.log("Grade A, Very Good!")
} else if(marks >= 75) {
    console.log("Grade B+, Good!")
} else if(marks >=65) {
    console.log("Grade B, Average!")
} else if(marks >= 55) {
    console.log("Grade C+, Below Average!")
} else if(marks >= 55) {
    console.log("Grade C, Try Harder!")
} else {
    console.log("Grade F, Fail.. Try more harder?!")
}

// Rock Paper Scissors

let userOption = parseInt(prompt('1. Rock, 2. Paper or 3. Scissor ?'))
let compOption = Math.floor((Math.random() * 2)+1);

if(userOption < 1 || userOption > 3){
    alert('Please select a valid option')
} else {

    //Logic
    if(userOption == 1 && compOption == 1){
        alert('User: Rock, Comp: Rock. It\'s a draw!')
    } else if(userOption == 2 && compOption == 1){
        alert('User: Paper, Comp: Rock. User Wins!')
    } else if(userOption == 3 && compOption == 1){
        alert('User: Scissor, Comp: Rock. Comp Wins!')
    }
    
    else if(userOption == 1 && compOption == 2){
        alert('User: Rock, Comp: Paper. User Wins!')
    } else if(userOption == 2 && compOption == 2){
        alert('User: Paper, Comp: Paper. It\'s a draw!')
    } else if(userOption == 3 && compOption == 2){
        alert('User: Scissor, Comp: Paper. Comp Wins!')
    }

    else if(userOption == 1 && compOption == 3){
        alert('User: Rock, Comp: Scissor. User Wins!')
    } else if(userOption == 2 && compOption == 3){
        alert('User: Paper, Comp: Scissor. Comp Wins!')
    } else if(userOption == 3 && compOption == 3){
        alert('User: Scissor, Comp: Scissor. It\'s a draw!')
    } else {
        alert(userOption, compOption)
    }

}

