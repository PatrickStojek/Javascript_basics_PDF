//deklaracja zmiennych globalnych
var firstName = "Ewa";
const num = 12;
let counter = 1;

function fn(param1, param2) {
    // deklaracja zmiennych lokalnych
    var firsNameLocal = 'Anna';
    const numLocal = 12;
    let counterLocal = 2;
}

{
    //deklaracja zmiennych globalnych
    var firstNameBlock = 'Kasia';
    // deklaracja zmiennych lokalnych
    const numBlock = 3;
    let counterBlock = 12;
}

//example of variable shadowing
const sum = 12;
console.log(num) //12

function fn() {
    const num = 44;
    console.log(num)
}

fn();
console.log(num); // 12