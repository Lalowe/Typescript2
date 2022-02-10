"use strict";
var arr = [];
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        arr.push(this); // toto sluzi nato aby si pushol tie persony do 1.array
    }
    displaY() {
        return ` “Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}”`;
    }
}
let Vladimir = new Person("Vladimir", 28, "Manager"); // nemusi to byt let Vladimir ked davas do array
let Alexandra = new Person("Alexandra", 24, "Content Manager");
// !!!!!!!!!!EXTENDS!!!!!!!!!!!!!!!
class Friends extends Person {
    constructor(name, age, jobTitle, country, housepet) {
        super(name, age, jobTitle);
        this.country = country;
        this.housepet = housepet;
    }
    displaY() {
        return ` “Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}” and I am from ${this.country} and my housepet is a dog with name ${this.housepet}`;
    } // cize metoda/funkcia ma rovnaky nazov ako u parrent len som tu pridal rozsireny constructor
}
new Friends("Boris", 29, "Manager", "Slovakia", "Kiwi");
new Friends("Zuzana", 29, "Manager", "Slovakia", "Emil");
// for (let i in arr1){
//     (document.getElementById("here") as HTMLElement).innerHTML += arr1[i].displaZ();
// }
console.log(arr);
for (let index in arr) {
    document.getElementById("here").innerHTML += arr[index].displaY();
} // aby zobrazilo kazdu osobu musime vztvorti loop na to 
// (document.getElementById("here") as HTMLElement).innerHTML =
// Vladimir.displaY(); takto zobzrazis keby bol len VLadimir bez array bez loopu !!!!!!!!
