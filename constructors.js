function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.LastName = initLastName;
    this.class = '2B';
    /* this.showFullName = function() {
        console.log(this.firstName, this.LastName)
    } */
}

Student.prototype.showFullName = function() {
    console.log(this.firstName, this.lastName)
}

const student1 = new Student('Marek', 'Nowak')
const student2 = new Student('Anna', 'Kowal')

console.log(
    student1, //{firstName: Marek, lastName: Nowak}
    student2, //{firstName: Anna, lastName: Kowal}
)

console.log(
    student1.class, // 2B
    student2.class // 2B
)
student1.showFullName // Marek , Nowak

/////Modifyng values of student1
student1.firstName = 'Darek';
student1.lastName = 'Jarek'
student1.showFullName() //Darek Jarek

/////short program for creating array of students
const studentsNum = parseInt(prompt('Liczba uczniów?'));
const studentList = []
for(let i = 0; i < studentsNum; i++) {
    const firstName = prompt('Podaj imię: ')
    const lastName = prompt("Podaj nazwisko: ")
    const newStudent = new Student(firstName, lastName)
    studentList.push(newStudent)
}

studentList.forEach(function(item) {
    item.showFullName( )
})

