/* const fn = function(messageForUser){
    const userInput = prompt(messageForUser)

    return userInput
}
const inputFromUser = fn("ile masz lat?")
console.log(inputFromUser) */

////////////////////////////

const getUserInput = function(message) {
    return prompt(message)
}

const sumNumbersFromUser = function(userInputFn) {
    const a = userInputFn("Podaj liczbę a")
    const b = userInputFn("Podaj liczbę b")

    const sum = parseFloat(a) + parseFloat(b)

    return sum;
}

const result = sumNumbersFromUser(getUserInput)
console.log(result)