//literal notation

var snoopy ={
    species: "beagle",
    age: 10
    };

//constructor notation
var buddy = new Object();
buddy.age = 5;
buddy.species = "golden retriever";






//Custom Constructors

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);
