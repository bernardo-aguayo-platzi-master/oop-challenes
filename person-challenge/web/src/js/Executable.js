//imports
import { Person } from './Person.js';

//enum
//constant
const GENDER = {
    MALE: "Male",
    FEMALE: "Female"
};

//freeze 
Object.freeze(GENDER);

//class anc export class
export class Executable {
    //constructor
    constructor(
        name,
        age,
        gender,
        weight,
        height
    ) {
        //create variables
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;

        //constructor first object
        this.card1 = new Person(this.name, this.age, this.gender, this.weight, this.height);
        //add values
        this.addValues(this.card1.toString(), 0);
        //constructor second object
        this.card2 = new Person(this.name, this.age, this.gender);
        //add values
        this.addValues(this.card2.toString(), 6);
        //constructor third object
        this.card3 = new Person();
        this.card3.name = window.prompt("Set name:");
        this.card3.age = parseFloat(window.prompt("Set age:"));
        this.card3.gender = this.checkGender(window.prompt("Set gender:")) ? GENDER.FEMALE : GENDER.MALE;
        this.card3.weight = parseFloat(window.prompt("Set weight:"));
        this.card3.height = parseFloat(window.prompt("Set height:"));
        //add values
        this.addValues(this.card3.toString(), 12);
    }

    //function that check is male or female with regex
    checkGender(gender) {
        let regex = /[wf]/ig;
        return regex.test(gender);
    }

    //function add values
    addValues(object, start) {
        //variables for card
        this.cards = document.querySelectorAll(".forJs")

        //add values 
        this.cards[start].textContent = object._name;
        start++;
        this.cards[start].textContent = object._age;
        start++;
        this.cards[start].textContent = object._gender;
        start++;
        this.cards[start].textContent = object._weight;
        start++;
        this.cards[start].textContent = object._height;
        start++;
        this.cards[start].textContent = object.isAdult();
    }
}