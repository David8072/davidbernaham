//Write a “person” class to hold all the details.


class person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }
}

let person1 = new person ("David", "Bernaham", 24 );
console.log(person1.age);
console.log(person1.getFullName());