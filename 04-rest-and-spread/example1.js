"use strict";

/***************************************************************
 * Rest operator
 ***************************************************************/


function demo_1() {
	//REST parameters are not spread
	function showCategories (productId, ...categories){
		console.log("categories instanceof Array: ", categories instanceof Array);
		console.log("categories value: ", categories);
	}

	showCategories(1234, "search", "advertising");
	// showCategories(123);

	// console.log("Number of parameters of function showCategories():", showCategories.length);
}


function demo_2() {
	//REST parameters are not spread
	function add (...numbers){
		console.log("numbers instanceof Array: ", numbers instanceof Array);
		console.log("numbers value: ", numbers);
	    var sum  = 0;
	    for(var i =0; i<numbers.length; i++){
	        sum  = sum + numbers[i];
	    }
	    return sum;
	}
	console.log("add(2):", add(2));
	console.log("add(2, 3):", add(2, 3));
	console.log("add(2, 3, 5):", add(2, 3, 5));
}

demo_1();
// demo_2();
