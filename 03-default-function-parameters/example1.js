"use strict";


function demo_1() {
	function sayHello(name = "Batman"){
	    console.log("Hello " + name);
	}
	sayHello();
	sayHello("Superman");
}

function demo_2() {
	function sayHello(name = "Batman", messageSuffix = "Welcome!"){
	    console.log("Hello " + name + ". " + messageSuffix);
	}
	sayHello(undefined, "Good Morning!");
	sayHello("Superman");
	sayHello("Superman", "Good Morning!");
}


demo_1();
// demo_2();
