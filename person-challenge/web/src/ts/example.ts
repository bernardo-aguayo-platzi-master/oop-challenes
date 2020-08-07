import {Person} from './Person'
import {GENDER} from './Gender'

const test = new Person("ui",15,GENDER.MALE);
test.gender = GENDER.FEMALE;

console.log(test.checkGender())

const test2 = new Person("Sa",18,GENDER.FEMALE);
test2.gender = GENDER.MALE;

console.log(test2.checkGender())