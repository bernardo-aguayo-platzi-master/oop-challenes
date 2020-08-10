export class Account {
    //constructor
    /**
     * @param {string} holder
     * @param {number} amount
     */
    constructor(holder, amount) {
        this._holder = holder;
        (amount !== undefined) ?
        this._amount = amount: this._amount = 0.0;
    }

    // to string override
    /**
     * @returns {object}
     */
    toString() {
        return this;
    }

    //to deposit method
    /**
     * @param {number} amount 
     */
    toDeposit(amount) {
        (amount > 0) ?
        this._amount += amount: window.alert("Impossible to carry out transaction")
    }

    //withdraw
    /**
     * 
     * @param {number} amount 
     */
    withdraw(amount) {
        (amount <= this._amount && amount >= 0) ?
        this._amount -= amount: window.alert("Impossible to carry out transaction")
    }
}