import {GENDER} from './Gender';

export class Person{

    constructor(private _name = "", 
    private _age = 0, 
    private _gender = GENDER.MALE, 
    private _weight? : 0.0, 
    private _height? : 0.0){}

    get name(){return this._name}
}