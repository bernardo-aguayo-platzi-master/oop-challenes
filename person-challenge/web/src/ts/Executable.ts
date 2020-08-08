import {GENDER} from './Gender';
import {Person} from './Person';
export class Executable{
    //variables for card
    private card1:Person;
    private card2:Person;
    private card3:Person;
    private cards = document.querySelectorAll(".forTs")
    //constructor
    constructor(
        private name:string,
        private age:number,
        private gender:GENDER,
        private weight:any,
        private height:any
    ){
        //constructor first object
        this.card1 = new Person(this.name,this.age,this.gender,this.weight,this.height);
        //add values
        this.addValues(this.card1,0);
        //constructor second object
        this.card2 = new Person(this.name,this.age,this.gender);
        //add values
        this.addValues(this.card2,6);
        //constructor third object
        this.card3 = new Person();
        this.card3.name = window.prompt("Set name:");
        this.card3.age = parseFloat(window.prompt("Set age:"));
        this.card3.gender = this.checkGender(window.prompt("Set gender:")) ? GENDER.FEMALE : GENDER.MALE;
        this.card3.weight = parseFloat(window.prompt("Set weight:"));
        this.card3.height = parseFloat(window.prompt("Set height:"));
        //add values
        this.addValues(this.card3,12);
    }

    //function that check is male or female with regex
    checkGender(gender):boolean {
    let regex = /[wf]/ig;
    return regex.test(gender);
    }   

    //function add values
    addValues(object:Person, start:number):void{
        this.cards[start].textContent = object.name;
        start++;
        this.cards[start].textContent = object.age.toString();
        start++;
        this.cards[start].textContent = object.gender;
        start++;
        this.cards[start].textContent = object.weight;
        start++;
        this.cards[start].textContent = object.height;
        start++;
        this.cards[start].textContent = object.isAdult();
    }
}