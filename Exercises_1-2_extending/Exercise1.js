class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    getFullName() {
    return firstName + " " + lastName;
    }
    getIntro() {
    return "My name is " + this.getFullName() + "!";
    }
    }

    // This is the extended class
class Student extends Person {
    constructor(firstName, lastName, grade, major) {
    super(firstName, lastName);
    this.grade = grade
    this.major = major
    }
    // You can also use methods defined in the parent class
    // from the extended class
    getIntro() {
    return "My name is " + this.getFullName() +
    " and I am a " + this.grade +
    " and I study " + this.major + "!";
    }
    }

    // Use the parent class
let sallie = new Person("Sallie", "Sheppard");
console.log(sallie.getIntro());


let tim = new Student("Tim", "Kellogg", "Sophomore", "Engineering");
console.log(tim.getIntro());