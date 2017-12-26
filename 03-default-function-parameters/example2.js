"use strict";


function demo_1() {
	let getTotal = function (price, tax = price * 0.07){
		console.log("arguments.length:", arguments.length);
	    return price + tax;
	}
	console.log(getTotal(5));
}

function demo_1_arrow_function() {
	let getTotal = (price, tax = price * 0.07) => {
	    return price + tax;
	}
	console.log(getTotal(5));
}

function demo_1_using_variable_for_default_value() {
	const baseTax = 0.07;
	let getTotal = (price, tax = price * baseTax) => {
	    return price + tax;
	}
	console.log(getTotal(5));
}

function demo_1_using_function_for_default_value() {
	let getBaseTax = () => 0.07;
	let getTotal = (price, tax = price * getBaseTax()) => {
	    return price + tax;
	}
	console.log(getTotal(5));
}



demo_1();
demo_1_arrow_function();
demo_1_using_variable_for_default_value();
demo_1_using_function_for_default_value();
