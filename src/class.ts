
interface ICharacterConstructor {
  firstName: string,
  lastName: string,
  age: number,
  occupation: string,
}

interface ICharacterClass {

}

export class Character implements ICharacterClass {
  firstName: string;
  lastName: string;
  name: string;
  age: number;
  occupation: string;

  constructor(personObj: ICharacterConstructor) {
    this.firstName = personObj.firstName;
    this.lastName = personObj.lastName;
    this.name = `${this.firstName} ${this.lastName}`;
    this.age = personObj.age;
    this.occupation = personObj.occupation;
  }

  say() {
    console.log(`You're a Wizard ${this.firstName}!`);
  }

  private sayPrivate() {
    console.log("But i cannot directly say this...")
  }

}