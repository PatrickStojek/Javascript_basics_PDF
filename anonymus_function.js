const fn = function(messageForUser){
    const userInput = prompt(messageForUser)

    return userInput
}

const inputFromUser = fn("ile masz lat?")
console.log(inputFromUser)