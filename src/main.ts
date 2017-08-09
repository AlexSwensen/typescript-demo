

// implicit type declaration
let question = 'What is the meaning of life?';

console.log(question);

question = 3.14; // question is a string, not a number.





// explicit type declaration
let answer:number = 42; // looks like python. 😂

console.log(`the answer is ${answer}`);

answer = 3.14; // valid type




// declaring types on function arguments and return values
function askQuestion(question: string): boolean {
  if (question) {
   console.log(question);
   return true;
  } else {
    return "WHY U NO PASS IN STRING!?!"; // This is not a boolean.
  }
}

question = 'How awesome is typescript?';

askQuestion(question);




// expect object with a given structure.

const person = {
  name: 'Bilbo Baggins',
  age: 50
};


function namePerson(person: {name: string, age: number}) {
  console.log(`${person.name} is ${person.age} years old.`);
}

namePerson(person); // Bilbo Baggins is 50 years old.


// declaring interfaces of custom types

interface INamedPerson {
  name: string,
  age?: number, // optional param that may not always be here
  occupation: string
}

// name a person, and what they do.
// if no occupation, say how old they are.
function nameCharacter (person: INamedPerson) {
  if(person.occupation) {
    console.log(`${person.name} is a ${person.occupation}`)
  } else if (person && !person.occupation) {
    console.log(`${person.name} is ${person.age} years old.`)
  }
}


// some types require additional arguments.
// In this case we will define an Array that has all of its arguments as `INamedPerson`
function nameCharacters(people: Array<INamedPerson>) {
  people.forEach(person => {
    nameCharacter(person);
  })
}

const harryPotterCast = [
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


// import TS dependencies
import {Character} from './class';


const HarryPotter = new Character({firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard', age: 37});

HarryPotter.say();

HarryPotter.sayPrivate();