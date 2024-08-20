const names = new Array("Jan", "Anna", "Kasia");
console.log(names[0])
console.log(names.length) //3
names.push(1)
console.log(names)

if(names.indexOf('Jan') > -1) {
    console.log("Istnieje w tablicy")
} else{
    console.log("Brak w tablicy")
}

if(names.includes("Kasia")) {
    console.log("istnieje w tablicy!")
} else {
    console.log("Brak w tablicy")
}

///writing simple algorithm using array methods:

function drawRandomNumber() {
    const numbers = []
    while(numbers.length < 5) {
        const num = Math.round(Math.random() * 10)
        if (!numbers.includes(num)) {
            numbers.push(num)
        }
    }
    return numbers
}
console.log(drawRandomNumber())

//sorting algorithm
const numbers = [12.1, 1, 2.5, 42.3, 11, 15, 7]
//in ascending order
numbers.sort((a,b) => a + b)
//in descending order
numbers.sort((a,b) => a - b)

//sum of the numbers from numbers array
function sumOfArrayNumbers() {
    let sum = 0 
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}

console.log(sumOfArrayNumbers())
