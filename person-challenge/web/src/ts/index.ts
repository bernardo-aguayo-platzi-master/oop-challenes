import {GENDER} from './Gender'
import {Executable} from './Executable'

// global Variables for get modal values
let name:any, age:any, gender:any, weight:any, height:any, executable:Executable;

//button
const button = document.querySelector("a");

//add event listener to button to get values from inputs with an arrow function
button.addEventListener('click',() => {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    gender = document.getElementById("gender").value;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;

    //hide modal
    hideModal()

    //convert arguments
    convertArguments(age,gender,weight,height);
})

//function that check is male or female with regex
function checkGender(gender):boolean {
    let regex = /[wf]/ig;
    return regex.test(gender);
}

//hide modal
function hideModal():void{
    const modal = document.getElementById("modal-container").classList.add("isHide");
}

//convert arguments
function convertArguments(age,gender,weight,height):void{
    age = parseFloat(age);
    gender = (checkGender(gender) === true) ? GENDER.FEMALE : GENDER.MALE;
    weight = parseFloat(weight);
    height = parseFloat(height);

    //pass values
    passValues(name,age,gender,weight,height);
}

//pass values
function passValues(name:string,age:number,gender:GENDER,weight:number,height:number){
    executable = new Executable(name,age,gender,weight,height)
}