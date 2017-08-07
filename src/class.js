"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = (function () {
    function Character(personObj) {
        this.firstName = personObj.firstName;
        this.lastName = personObj.lastName;
        this.name = this.firstName + " " + this.lastName;
        this.age = personObj.age;
        this.occupation = personObj.occupation;
    }
    Character.prototype.say = function () {
        console.log("You're a Wizard Harry!");
    };
    Character.prototype.sayPrivate = function () {
        console.log("But i cannot directly say this...");
    };
    return Character;
}());
exports.Character = Character;
