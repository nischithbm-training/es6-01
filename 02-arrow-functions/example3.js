"use strict";

/***************************************************************
 * Arrow Functions: Use cannot bind "this"
 ***************************************************************/

function demo_1_old_syntax() {
	function Student(name, marks) {
	    this.name = name;
	    this.marks = marks;
	    this.showName = function () {
	        console.log("this.name:", this.name, " Problem with 'this'");
	    };
	}
	let student1 = new Student("Batman", 21);
	let student2 = new Student("Superman", 24);
	student1.showName.bind(student2)();
}
function demo_1_arrow_function() {
	function Student(name, marks) {
	    this.name = name;
	    this.marks = marks;
	    this.showName = () => {
	        console.log("this.name:", this.name, " Fixed 'this'. No use of bind()");
	    };
	}
	let student1 = new Student("Batman", 21);
	let student2 = new Student("Superman", 24);
	student1.showName.bind(student2)();
}

demo_1_old_syntax();
demo_1_arrow_function();


