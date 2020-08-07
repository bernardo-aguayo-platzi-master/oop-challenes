//constant
const GENDER = {
    MALE: true,
    FEMALE: false
};

//freeze 
Object.freeze(GENDER);
class Person {
    constructor(
        name = "",
        age = 0,
        gender = GENDER.MALE,
        weight = 0.0,
        height = 0.0) {
        if (name !== "" && age !== 0 && gender === GENDER.MALE || gender === GENDER.FEMALE) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.weight = weight;
            this.height = height;
        } else {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.weight = weight;
            this.height = height;
        }
    }
}

let newPerson = new Person()

console.log(newPerson.name)

let newPerson2 = new Person("XI", 15, GENDER.FEMALE, 25.45, 102.52)

console.log(newPerson2.name)

let newPerson3 = new Person("jI", 18, GENDER.FEMALE)

console.log(newPerson3)