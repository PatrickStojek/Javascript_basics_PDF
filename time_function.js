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

