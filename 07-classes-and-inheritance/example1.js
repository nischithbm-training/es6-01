
function demo_old_style() {
  function Parent() {
     // constructor
  }
  Parent.prototype.foo = function () { console.log("Hello foo()"); }
  Parent.prototype.bar = function () { console.log("Hello bar()"); }

  var parent = new Parent();
  parent.foo();
  parent.bar();
}

function demo_new_style() {
  class Parent() {
     constructor() {
     
     }
     
     foo () {
      console.log("Hello foo()");
     }
     
     bar () {
      console.log("Hello bar()");
     }
  }

  var parent = new Parent();
  parent.foo();
  parent.bar();
  
  ////
  
  class Child extends Parent() {
     constructor() {
        super();
     }
     
     bazz () {
      console.log("Hello bazz()");
     }
  }
  
  var child = new Child();
  child.foo();
  child.bar();
  child.bazz();
  
}



demo_old_style();
//demo_new_style();

