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
    if(counter == 0) {
        return 0
    }
    return sum / count;
}

//// example of common mistake 

showinfo()

varshowInfo = function() {
    console.log('Hoisting!')
}