"use strict";

/***************************************************************
 * Variable Hoisting
 ***************************************************************/
function demoUsingVar_1(){
    console.log("var a: ", a, " -> Before declaring a (hoisting in action)!");
    var a = 7;
}

function demoUsingLet_1(){
    console.log("let a: ", a, " -> Before declaring a (hoisting doesn't work)!");
    let a = 7;
}
function demoUsingLet_1_error_resolved(){
    let a;
    console.log("let a: ", a, " -> No error since a is delared before use!");
    a = 7;
}

/***************************************************************
 * Block scoping
 ***************************************************************/
function demoUsingVar_2(){
    if( 5 > 4 ){
        var a = 7;
        console.log("var a: ", a, " -> Within if block");
    }
    console.log("var a: ", a, " -> Outside if block");
}
function demoUsingLet_2(){
    if( 5 > 4 ){
        let a = 7;
        console.log("let a: ", a, " -> Within if block");
    }
    console.log("let a: ", a, " -> Outside if block");
}


/* Demo: Variable Hoisting */
demoUsingVar_1();
// demoUsingLet_1();
// demoUsingLet_1_error_resolved();



