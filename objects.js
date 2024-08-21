const car = {
    color: 'red',
    milage: 1203,
    horsepower: 540,
    seatsNumber: 2,
    getColor: function() {
        return car.color
    },
}

car.color = 'blue'
console.log(car.color, car['color']) 

const hp = car.horsepower

console.log(hp) // 540


car.getSeatsNumber = function() {
    return this.seatsNumber
}

console.log(
    car.getColor(), //blue
    car.getSeatsNumber() //2
)

///another example with this operator
function showInfo() {
    console.log(this.text)
}

//common mistake made with this operator:
function changeContext() {
    console.log(this.text)
}
changeContext() //undefined

const notice = {
    text: 'Notice!',
    showText: showInfo,
}

const error =  {
    text: "Error!",
    showText: showInfo,
}

notice.showText(); //Notice!
error.showText(); //Error!

/////////////////////////////////////////////////////////////////
const user = {
    firstName : 'Alicja',
    lastName : 'Nowak',
    age: 24,
}

for(const key in user) {
    console.log(user[key]) // Alicja, Nowak, 24
}
////////////////////////////////////////////////////////////////////
const travelPrice = {
    flight: 591,
    hotel: 400,
    excursions: 421,
    other: 120,
}

const totalPrice = getTotalPrice(travelPrice);
console.log(totalPrice)

function getTotalPrice(priceObject) {
    let totalPrice = 0;
    for(const costName in priceObject){
        totalPrice += priceObject[costName]
    }
    return totalPrice
}

//Another version of the same function
function getTotalPriceAlternative(priceObject) {
    let totalPrice = 0;
    const values = Object.values(priceObject)
     totalPrice = values.reduce((a,b) => a + b )
    return totalPrice
}

console.log(getTotalPriceAlternative(travelPrice))