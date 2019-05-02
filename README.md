//CORE CONCEPTS IN JAVASCRIPT

#
ES6 Class example:
#
function Bike(model,color) {
    this.model = model;
    this.color = color;
}
 
Bike.prototype.getInfo = function() {
    return this.color + ' ' + this.model+ ' bike';
};

#
Class Expression
#
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}

console.log(new Rectangle(5,8).area());

#
Class Declaration
#
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4,3).area);

#
Prototype example
#
function Bike(model,color){
   this.model = model,
   this.color = color,
   this.getDetails = function(){
     return this.model+' bike is '+this.color;
   }
}
var bikeObj1 = new Bike('BMW','BLACK');
var bikeObj2 = new Bike('BMW','WHITE');
console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE

#
Immediately Invoked Function Expression
#
(function ()
{logic here})
();
#
Closures
#
function User(name){
  var displayName = function(greeting){
   console.log(greeting+' '+name);
  }
return displayName;
}
var myFunc = User('Raj');
myFunc('Welcome '); //Output: Welcome Raj
myFunc('Hello '); //output: Hello Raj

#
Module Pattern
In JavaScript, the word “modules” refers to small units of independent, reusable code
#



//ERRORS IN JAVASCRIPT

