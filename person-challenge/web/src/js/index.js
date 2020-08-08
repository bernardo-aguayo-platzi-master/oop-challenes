import { Executable } from './Executable.js'
//enum
//constant
const GENDER = {
    MALE: "Male",
    FEMALE: "Female"
};

// global Variables for get modal values
let name, age, gender, weight, height, executable;

//button
const button = document.querySelector("a");

//add event listener to button to get values from inputs with an arrow function
button.addEventListener('click', () => {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    gender = document.getElementById("gender").value;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;

    //hide modal
    hideModal()

    //convert arguments
    convertArguments(age, gender, weight, height);
})

//function that check is male or female with regex
function checkGender(gender) {
    let regex = /[wf]/ig;
    return regex.test(gender);
}

//hide modal
function hideModal() {
    const modal = document.getElementById("modal-container").classList.add("isHide");
}

//convert arguments
function convertArguments(age, gender, weight, height) {
    age = parseFloat(age);
    gender = (checkGender(gender) === true) ? GENDER.FEMALE : GENDER.MALE;
    weight = parseFloat(weight);
    height = parseFloat(height);

    //pass values
    passValues(name, age, gender, weight, height);
}

//pass values
function passValues(name, age, gender, weight, height) {
    executable = new Executable(name, age, gender, weight, height)
}