"use strict";

/***************************************************************
 * Arrow Functions: Fix "this"
 ***************************************************************/

//Lexical this
function demo_1_old_syntax_prob_with_this() {
	function Student(name, marks) {
	    this.name = name;
	    this.marks = marks;
	    this.showName = function () {
	        setTimeout(function(){
	            //output empty
	            console.log("this.name:", this.name, " Problem with 'this'");
	        });
	    };
	}
	let student1 = new Student("Ajay", 13);
	student1.showName();
}
function demo_1_old_syntax_workaround_using_that() {
	function Student(name, marks) {
	    this.name = name;
	    this.marks = marks;
	    this.showName = function () {
	    	var that = this;
	        setTimeout(function(){
	            //output empty
	            console.log("that.name:", that.name, "      Use 'that' as a workaround to fix 'this'");
	        });
	    };
	}
	let student1 = new Student("Ajay", 13);
	student1.showName();
}

function demo_1_arrow_function_to_fix_this() {
	function Student(name, marks) {
	    this.name = name;
	    this.marks = marks;
	    this.showName = function () {
	        //proper Lexical binding, arrow do not create its own this
        	setTimeout( () => { console.log("this.name:", this.name, "      Use arrow functions to fix 'this'"); })
	    };
	}
	let student1 = new Student("Ajay", 13);
	student1.showName();
}




demo_1_old_syntax_prob_with_this();
demo_1_old_syntax_workaround_using_that();

demo_1_arrow_function_to_fix_this();


