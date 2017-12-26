"use strict";


// Try destructuring with nested array
function demo_1() {
	let salary = ["32000", "50000", ["75000", "90000"] ] ;
	let [ low, average, [actualLow, actualHigh] ] = salary;
	console.log("low:", low);
	console.log("average:", average);
	console.log("actualLow:", actualLow);
	console.log("actualHigh:", actualHigh);
}

function demo_2() {
	let salary = ["32000", "50000" ] ;
	let low, average, high; 

	[ low, average, high = "80000"] = salary;
	console.log("low:", low);
	console.log("average:", average);
	console.log("high:", high);
}


// demo_1();
demo_2();



