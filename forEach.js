const numbers = [1,2,3,4,5,6];

function showItemwithIndex(item,index) {
    console.log(item + " --> " + index)
}

numbers.forEach(showItemwithIndex);
