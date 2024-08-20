const numbers = [1,12, 2.52, 51.23, 4.32, 4.98]
const integers = numbers.map(parseNumbersToInt)
console.log(integers)

function parseNumbersToInt(element, index, table) {
    return parseInt(element)
}

function isEven(element) {
    return element % 2 === 0;
}

console.log(integers.map(isEven))