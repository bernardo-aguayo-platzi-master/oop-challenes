import {Person} from './Person'
import {GENDER} from './Gender'

const test = new Person("ui",15,GENDER.MALE);
test.gender = GENDER.FEMALE;

console.log(test.toString())

const test2 = new Person("Sa",18,GENDER.FEMALE);
test2.gender = GENDER.MALE;

console.log(test2.toString())

var test3:object;

function newObject(object){
    test3 = {
        name : object.name,
        age : object.age,
        gender : object.gender,
        weight : object.weight,
        height : object.height
    }
}

newObject(test2.toString())

//console.log(test3)