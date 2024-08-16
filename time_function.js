/* setTimout functions */
function showMessage() {
    console.log("To jest pierwsza wiadomość")
}

function showName(name) {
    console.log("twoje imię to " + name)
}

setTimeout(showMessage,1000)
setTimeout(showName('Patryk'),2000)
setTimeout(function(){
    console.log("this is the anonymus function which will be displayed as last")
}, 5000)

/* setInterval functions */

/* let counter = 0
function showMessage(message) {
    setInterval(function() {
        counter++
        console.log(message + " " + counter)
    }, 3000)
}
showMessage("Ta wiadomość pokazuje ci się po raz") */

/* let counter = 1;

const showCounter = function() {
    console.log(counter)
    counter++
}

console.log("Before setInterval") // 1
setInterval(showCounter, 2000) // 3
console.log("After setInterval") // 2 */

/* here we will clear the interval after a certain counter value will be reached */
let interval
let counter = 1
const showCounter = function() {
    console.log(counter)
    counter++

    if(counter > 5) {
        clearInterval(interval)
    }
}

interval = setInterval(showCounter, 1000)