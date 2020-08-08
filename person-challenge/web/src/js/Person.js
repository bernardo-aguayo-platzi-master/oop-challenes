//enum
//constant
const GENDER = {
    MALE: "Male",
    FEMALE: "Female"
};

//class
export class Person {
    //Multiples constructor in only one constructor, cause the limitations respect constructors of js
    constructor(
        name = "",
        age = 0,
        gender = GENDER.MALE,
        weight = 0.0,
        height = 0.0) {
        //check which of constructor is
        if (name !== "" && age !== 0 && gender === GENDER.MALE || gender === GENDER.FEMALE) {
            this._name = name;
            this._age = age;
            this._gender = gender;
            this._weight = weight;
            this._height = height;
        } else {
            this._name = name;
            this._age = age;
            this._gender = gender;
            this._weight = weight;
            this._height = height;
        }
        //save the value of gender
        this.saveGender(gender);
    }

    //is adult method
    isAdult() {
        if (this._age >= 18) return true;
        else return false;
    }

    //save gender gender
    saveGender(gender) {
        this._toCheckGender = gender;
    }

    //check gender
    checkGender() {
        if (this._toCheckGender === this._gender) return true;
        else return false;
    }

    //to string method override
    toString() {
        return this;
    }
}