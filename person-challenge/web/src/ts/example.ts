import {Person} from './Person'

const test = new Person("ui");
test.age=18

const test2 = new Person("Sa",18);

console.log(test.isAdult())
console.log(test2.isAdult())