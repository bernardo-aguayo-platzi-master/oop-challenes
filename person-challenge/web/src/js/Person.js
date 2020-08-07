const GENDER = {
    MALE: true,
    FEMALE: false
};

Object.freeze(GENDER);
class Person {
    constructor(name = "", age = 0, gender = GENDER.MALE, weight = 0.0, height = 0.0) {
        if (name !== "" && age !== 0 && gender === GENDER.MALE || gender === GENDER.FEMALE) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.weight = weight;
            this.height = height;
        }
    }
}

let newPerson = new Person("Ji", 10, GENDER.MALE)

console.log(newPerson)