"use strict";

/***************************************************************
 * Block scoping
 ***************************************************************/

// Demo 1
function demoUsingVar_1(){
    if( 5 > 4 ){
        var a = 7;
        console.log("var a: ", a, " -> Within if block");
    }
    console.log("var a: ", a, " -> Outside if block");
}
function demoUsingLet_1(){
    if( 5 > 4 ){
        let a = 7;
        console.log("let a: ", a, " -> Within if block");
    }
    console.log("let a: ", a, " -> Outside if block");
}

// Demo 2
function demoUsingVar_2(){
    var a = 10;
    if( 5 > 4 ){
        var a = 7;
        console.log("var a: ", a, " -> Within if block");
    }
    console.log("var a: ", a, " -> Outside if block (value of a is overriden!)");
}
function demoUsingLet_2(){
    let a = 10;
    if( 5 > 4 ){
        let a = 7;
        console.log("let a: ", a, " -> Within if block");
    }
    console.log("let a: ", a, " -> Outside if block (value of a unchanged!)");
}


// Demo 3
function demoUsingVar_3(){
    var a = 10;
    for(var a = 0; a < 5; a++){
        console.log("var a: ", a, " -> Within for loop");
    }
    console.log("var a: ", a, " -> Outside fr loop (value of a is overriden!)");
}
function demoUsingLet_3(){
    let a = 10;
    for(let a = 0; a < 5; a++){
        console.log("let a: ", a, " -> Within for loop");
    }
    console.log("let a: ", a, " -> Outside for loop (value of a unchanged!)");
}



/* Demo: Block scoping */

demoUsingVar_1();
// demoUsingLet_1();

// demoUsingVar_2();
// demoUsingLet_2();

// demoUsingVar_3();
// demoUsingLet_3();




