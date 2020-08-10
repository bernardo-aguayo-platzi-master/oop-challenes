//import
import { Account } from './Account.js'

export class Executable {
    //constructor
    /**
     * 
     * @param {string} holder 
     * @param {number} amount 
     */
    constructor(holder, amount) {
        this.holder = holder;
        (amount !== undefined) ?
        this.amount = amount: this.amount = 0.0;
    }

    createAccount() {
        this.account = new Account(this.holder, this.amount)
    }
}