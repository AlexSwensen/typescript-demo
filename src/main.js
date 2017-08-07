"use strict";
// implicit type declaration
var question = 'What is the meaning of life?';
console.log(question);
question = 3.14; // question is a string, not a number.
// explicit type declaration
var answer = 42; // looks like python. 😂
console.log("the answer is " + answer);
answer = 3.14; // valid type
// declaring types on function arguments and return values
function askQuestion(question) {
    if (question) {
        console.log(question);
        return true;
    }
    else {
        return "WHY U NO PASS IN STRING!?!"; // This is not a boolean.
    }
}
question = 'How awesome is typescript?';
askQuestion(question);
// expect object with a given structure.
var person = {
    name: 'Bilbo Baggins',
    age: 50
};
function namePerson(person) {
    console.log(person.name + " is " + person.age + " years old.");
}
namePerson(person);
// name a person, and what they do.
// if no occupation, say how old they are.
function nameCharacter(person) {
    if (person.occupation) {
        console.log(person.name + " is a " + person.occupation);
    }
    else if (person && !person.occupation) {
        console.log(person.name + " is " + person.age + " years old.");
    }
}
// some types require additional arguments.
// In this case we will define an Array that has all of its arguments as `INamedPerson`
function nameCharacters(people) {
    people.forEach(function (person) {
        nameCharacter(person);
    });
}
var harryPotterCast = [
    {
        name: 'Albus Dumbledore',
        age: 150,
        occupation: 'Headmaster at Hogwarts'
    },
    {
        name: 'Severous Snape',
        occupation: 'Professor at Hogwarts'
    },
];
nameCharacters(harryPotterCast);
