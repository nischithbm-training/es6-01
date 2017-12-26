"use strict";

/***************************************************************
 * Working with closures
 ***************************************************************/
function demoUsingVar_1(){
    for(var counter = 0; counter < 4; counter++) {
        setTimeout(function() {
            console.log("Counter: ", counter);
        }, 100);
    }
}
function demoUsingLet_1(){
    for(let counter = 0; counter < 4; counter++) {
        setTimeout(function() {
            console.log("Counter: ", counter);
        }, 100);
    }
}


demoUsingVar_1();
// demoUsingLet_1();


