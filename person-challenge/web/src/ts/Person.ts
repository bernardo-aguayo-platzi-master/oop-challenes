import {GENDER} from './Gender';

export class Person{
    //constructor
    constructor(private _name = "", 
    private _age = 0, 
    private _gender = GENDER.MALE, 
    private _weight? : 0.0, 
    private _height? : 0.0){}

    //getters
    get name(){return this._name;}

    get age(){return this._age;}

    get gender(){return this._gender;}

    get weight(){return this._weight;}

    get height(){return this._height;}
    //setters
    set name(name) {this._name = name;} 
}