"use strict";

/***************************************************************
 * Spread operator
 ***************************************************************/


function demo_1() {
	let prices = [12, 20, 18];
	var maxPrice = Math.max(...prices);
	console.log(maxPrice);
}

function demo_2() {
	var maxElem = Math.max(..."42356291");
	console.log(maxElem);
}

function demo_3() {
	let prices = [12, 20, 18];
	var newPricesArray = [...prices];
	console.log(newPricesArray);
}

function demo_4() {
	var codeArray = ["A", ..."BCD", "E"];
	console.log(codeArray);
}


function demo_5() {
	//Spread operator:  expanded in place
	var favFruitArray = ["Apple", "Orange", "Grapes"];
	var allFruits = ["Water Melon", ...favFruitArray, "Mango"];
	console.log(allFruits);
}

function demo_6() {
	//Spread element can be used with push method
	var evenArray = [2, 4, 6, 8, 10];
	var oddArray = [3, 5, 7, 9];
	evenArray.push(...oddArray);
	console.log("All elements: ",evenArray);
}

// demo_1();
// demo_2();
// demo_3();
// demo_4();
// demo_5();
demo_6();
