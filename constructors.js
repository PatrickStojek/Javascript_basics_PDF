function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.LastName = initLastName;
}

const student1 = new Student('Marek', 'Nowak')
const student2 = new Student('Anna', 'Kowal')

console.log(
    student1, //{firstName: Marek, lastName: Nowak}
    student2, //{firstName: Anna, lastName: Kowal}
)