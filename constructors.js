function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.LastName = initLastName;
    this.class = '2B';
    this.showFullName = function() {
        console.log(this.firstName, this.LastName)
    }
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
