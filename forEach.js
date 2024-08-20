const numbers = [1,2,10,4,5,6];

function showItemwithIndex(item,index) {
    console.log(item + " --> " + index)
}
numbers.forEach(showItemwithIndex);

function getSum(arr) {
    let sum = 0;
    arr.forEach(function(number) {
        sum += number
    })
    return sum
}

console.log(getSum(numbers))

