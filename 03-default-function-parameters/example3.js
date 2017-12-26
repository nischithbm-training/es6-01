"use strict";


function demo_1() {
	let getTotal = function (price = adjustment, adjustment = 1.0){
	    return price + adjustment;
	}
	console.log(getTotal());
}

function demo_2() {
	let getTotal = function (price = adjustment, adjustment = 1.0){
	    return price + adjustment;
	}
	console.log(getTotal(5));
}

// create Dynamic function
function demo_3() {
	let getTotal = new Function ("price = 20.0", "return price;");
	console.log(getTotal());
}

function demo_4() {
	function bye(){
		console.log("Inside bye");
	}
	function  hello( n = bye){
		n();
	}
	hello();
}


// demo_1();
// demo_2();
// demo_3();
// demo_4();
