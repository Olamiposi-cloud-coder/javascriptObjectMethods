"use strict";

const cloud = {
    firstName: 'Idris',
    middleName: 'Olayinka',
    lastName: 'Musa',
    birthYear: 2000,
    job: 'Frontend Engineer',
    friends: ['Basith', 'Abubakar', 'Sultan'],
    hasDriversLicense: true,

    calcAge: function() {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
}


cloud.calcAge();

console.log(cloud.age);

console.log(cloud.getSummary())
