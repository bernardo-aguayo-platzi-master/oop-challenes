//import enum gender
import {GENDER} from './Gender';

export class Person{
    //variable to check gender
    private _toCheckGender:GENDER;

    //constructor and initialization variables
    constructor(
    private _name = "", 
    private _age = 0, 
    private _gender = GENDER.MALE, 
    private _weight?: any ,  
    private _height?: any){
        this.saveGender(_gender);

        if(this._weight === undefined){
            this._weight = 0.0
        }

        if(this.height === undefined){
            this.height = 0.0
        }
    }

    //getters
    get name(){return this._name;}

    get age(){return this._age;}

    get gender(){return this._gender;}

    get weight(){return this._weight;}

    get height(){return this._height;}

    //setters
    set name(name) {this._name = name;} 

    set age(age) {this._age = age;} 

    set gender(gender) {this._gender = gender;} 

    set weight(weight) {this._weight = weight;} 

    set height(height) {this._height = height;} 

    //is an adult method
    public isAdult():boolean{
        if (this._age >= 18)  return true;
        else return false;
    }

    //save gender
    private saveGender(gender:GENDER){
        this._toCheckGender = gender;
    }

    //check gender
    public checkGender():boolean{
        if(this._toCheckGender === this._gender) return true;
        else return false
    }

    //override to string method
    public toString():object{
        return this;
    }
}