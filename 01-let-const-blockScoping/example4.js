"use strict";

/***************************************************************
 * Using Const
 ***************************************************************/

function demoUsingConst_1(){
    console.log("const a: ", a, " -> Before declaring a (hoisting doesn't work)!");
    const a = 7;
}

function demoUsingConst_1_error(){
	// Also try without initializing a
	// const a;
    const a = 7
    console.log("const a: ", a, " -> No error since a is delared before use!");
    a = 7; 
}
function demoUsingConst_1_error_resolved(){
    const a = 7
    console.log("const a: ", a, " -> No errors!");
}


// Block scoping
function demoUsingConst_2(){
	const a = 10;
    if( 5 > 4 ){
        const a = 7;
        console.log("const a: ", a, " -> Within if block");
    }
    console.log("const a: ", a, " -> Outside if block");
}



demoUsingConst_1();
// demoUsingConst_1_error();
// demoUsingConst_1_error_resolved();

// demoUsingConst_2();
