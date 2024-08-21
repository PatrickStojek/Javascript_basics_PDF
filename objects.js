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

