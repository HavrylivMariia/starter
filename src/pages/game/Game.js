// import React from "react";

function toSquare(x) {
    return x * x 
}

function printHello(msg) {
    console.log(`Hello ${msg}`);
}

function printHello2(msg) {
    console.log("Hello " + msg);
}

function printHello3(msg) {
    const resultMsg = "Hello" + " " + msg;
    console.log(resultMsg);
}

let x = 4;
let y = toSquare(x);
printHello("Denys");
printHello2("Denys");
printHello3("Marichka");
 