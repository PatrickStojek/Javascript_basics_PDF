const names = new Array("Jan", "Anna", "Kasia");
console.log(names[0])
console.log(names.length) //3
names.push(1)
console.log(names)

if(names.indexOf('Jan') > -1) {
    console.log("Istnieje w tablicy")
} else{
    console.log("Brak w tablicy")
}

if(names.includes("Kasia")) {
    console.log("istnieje w tablicy!")
} else {
    console.log("Brak w tablicy")
}