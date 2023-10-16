//write a programe that will return your age stage after giving your age

"use strict";

const ps = require("prompt-sync");
const prompt= ps();

const age = prompt("give your age");


function stage(age){
    if (age<18){
        console.log("you are under age");
    }
    else if (age==18){
        console.log("you are adult");
    }
    else{
        console.log("you are mature")
    }
}

stage(age);
