//export
import { Executable } from './Executable.js';

// global variables
let holder, amount, account = new Executable,
    holderLabel, amountLabel, toDepositButton, withdrawButton;

let createButton = document.querySelector("#create-button");

//add listener event
/**
 * @description create event listener
 */
createButton.addEventListener(
    "click", () => {
        getValues()
    }
);

//get values
/**
 * @description get values from welcome section and use a regex for check the values
 */
function getValues() {
    //regex
    let findNumber = /[0-9]/g
    let findLetters = /[a-z]/ig

    holder = document.getElementById("holder").value;

    if (findNumber.test(holder) || holder === "") {
        window.alert("Wrong data into holder");

        return 0;
    }

    amount = document.getElementById("amount").value;

    if (findLetters.test(amount) || amount === "") {
        window.alert("Wrong data into amount");
    }

    amount = parseFloat(amount);

    if (amount < 0) {
        window.alert("Error you can't create an account with negative money")
    } else {
        changeDisplay()
    }
}

// change display to info screen
/**
 * @description change display from info screen
 */
function changeDisplay() {
    let display = document.getElementById("account-section-container");

    display.style.display = "flex";

    createAccount(holder, amount);
}

//create Executable object
/**
 * 
 * @param {string} holder 
 * @param {number} amount 
 */
function createAccount(holder, amount) {
    account = new Executable(holder, amount);

    account.createAccount()

    //update Labels
    UpdateLabels()
}

//info screen

//update labels
/**
 * @description this function update labels of info screen
 */
function UpdateLabels() {
    holderLabel = document.getElementById("holder-label")
    holderLabel.textContent = `Holder: ${account.account._holder}`

    amountLabel = document.getElementById("amount-label")
    amountLabel.textContent = `Amount: $${account.account._amount}`
}

//add listener toDepositButton 
toDepositButton = document.getElementById('to-deposit-button');

toDepositButton.addEventListener('click', () => {
    toDeposit()
});

//add listener to withdrawButton
withdrawButton = document.getElementById('withdraw-button');

withdrawButton.addEventListener('click', () => {
    withdraw()
});

//to deposit 
/**
 * 
 * @param {number} value 
 */
function toDeposit() {
    //regex
    let findNumber = /[0-9]/g

    let value = window.prompt("Enter money")

    if (findNumber.test(value)) {
        value = parseFloat(value)

        account.account.toDeposit(value)

        //update
        UpdateLabels()
    } else {
        window.alert("Check the amount pls")
    }
}

//withdraw function
function withdraw() {
    //regex
    let findNumber = /[0-9]/g

    let value = window.prompt("Enter money")

    if (findNumber.test(value)) {
        value = parseFloat(value)

        account.account.withdraw(value)

        //update
        UpdateLabels()
    } else {
        window.alert("Check the amount pls")
    }
}