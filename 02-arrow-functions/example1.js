"use strict";

/***************************************************************
 * Arrow Functions: Basic examples
 ***************************************************************/

function demo_1_old_syntax() {
	let getPrice = function () {
		return 5.99;
	}
	console.log("old_syntax: Type of getPrice:", typeof getPrice);
	console.log("old_syntax: getPrice():", getPrice());
}
function demo_1() {
	let getPrice = () => 5.99;
	console.log("Type of getPrice:", typeof getPrice);
	console.log("getPrice():", getPrice());
}


function demo_2() {
	let getPrice = () => { 
		console.log("Executing getPrice() method"); 
		return 5.99;
	};
	console.log("Type of getPrice:", typeof getPrice);
	console.log("getPrice():", getPrice());
}

//Example: method to get square of a number
function demo_3() {
	let squareFunc1 = ( x ) => { return x * x };
		//or
	let squareFunc2 = ( x ) => x * x;
		//or
	// Note: if there is only one input argument, the paranthesis can be ignored	
	let squareFunc3 = x => x * x;

	console.log("squareFunc1(3):", squareFunc1(3));
	console.log("squareFunc2(3):", squareFunc2(3));
	console.log("squareFunc3(3):", squareFunc3(3));
}

function demo_4() {
	let sumFunc1 = ( a, b ) => { return a + b };
		//or
	let sumFunc2 = ( a, b ) => a + b;

	console.log("sumFunc1(1, 2):", sumFunc1(1, 2));
	console.log("sumFunc2(1, 2):", sumFunc2(1, 2));
}

demo_1_old_syntax();
// demo_1();
// demo_2();
// demo_3();
// demo_4();


