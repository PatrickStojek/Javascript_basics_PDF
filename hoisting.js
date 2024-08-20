const num = getNum();
console.log(num); //2

function getNum() {
    return 2;
}

console.log(firstName) //undefined
var firstName = "Anna"
 

///////////////////////////////////////////////////////////
const userA = prompt("enter the first number: ")
const userB = prompt("enter the second number: ")
const userC = prompt("Enter the third number: ")

const sum = getSum(userA, userB, userC)
const Avarage = getAvarage(sum, 3)

function getSum(a, b, c){
    return parseFloat(a) + parseFloat(b) + parseFloat(c)
}

function getAvarage(sum, count) {
    if(count == 0) {
        return 0
    }
    return sum / count;
}

//// example of common mistake 

showinfo() // undefined beacuase we didn't moved the function without declaring it to the variable. correct line: const info = showInfo()

varshowInfo = function() {
    console.log('Hoisting!')
}