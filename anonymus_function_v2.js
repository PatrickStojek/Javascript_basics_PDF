const sumNumbersFromUser = function(userInputFn) {
    const a = userInputFn('Podaj liczbę a');
    const b = userInputFn('Podaj liczbę b')
    const sum = parseFloat(a) + parseFloat(b)
    return sum;
}

const result = sumNumbersFromUser(function(message) {
    return prompt(message)
})

console.log(result)