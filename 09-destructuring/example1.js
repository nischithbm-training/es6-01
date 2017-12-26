"use strict";

function demo_1() {
	let salary = ["32000", "50000", "75000"];
	let [ low, average, high ] = salary;
	console.log("low:", low);
	console.log("average:", average);
	console.log("high:", high);
}

function demo_2() {
	let salary = ["32000", "50000"];
	let [ low, average, high ] = salary;
	console.log("low:", low);
	console.log("average:", average);
	console.log("high:", high);
}

function demo_3() {
	let salary = ["32000", "50000", "75000"];
	let [ low, , high ] = salary;
	console.log("low:", low);
	console.log("high:", high);
}

// Use of rest operator while destructuring
function demo_4() {
	let salary = ["32000", "50000", "75000"];
	let [ low, ...remaining ] = salary;
	console.log("low:", low);
	console.log("remaining:", remaining);
}

// Use of default values while destructuring
function demo_5() {
	let salary = ["32000", "50000"];
	let [ low, average, high = "80000" ] = salary;
	console.log("low:", low);
	console.log("average:", average);
	console.log("high:", high);
}

// demo_1();
// demo_2();
// demo_3();
// demo_4();
demo_5();



