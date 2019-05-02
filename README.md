//CORE CONCEPTS IN JAVASCRIPT

#
ES6 Class example:
#
```python
function Bike(model,color) {
    this.model = model;
    this.color = color;
}
 
Bike.prototype.getInfo = function() {
    return this.color + ' ' + this.model+ ' bike';
};
```
#
Class Expression
#
```python
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
```
#
Class Declaration
#
```python
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4,3).area);
```
#
Prototype example
#
```python
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
```
#
Immediately Invoked Function Expression
#
```python
(function ()
{logic here})
();
```
#
Closures
#
```python
function User(name){
  var displayName = function(greeting){
   console.log(greeting+' '+name);
  }
return displayName;
}
var myFunc = User('Raj');
myFunc('Welcome '); //Output: Welcome Raj
myFunc('Hello '); //output: Hello Raj
```
#
Module Pattern
In JavaScript, the word “modules” refers to small units of independent, reusable codeJavaScript module export as the value rather than define a type, as JavaScript JavaScript module can export an object
#

```python
var myModule = (function() {
    'use strict';
 
    var _privateProperty = 'Hello World';
     
    function _privateMethod() {
        console.log(_privateProperty);
    }
     
    return {
        publicMethod: function() {
            _privateMethod();
        }
    };
}());
  
myModule.publicMethod();                    // outputs 'Hello World'   
console.log(myModule._privateProperty);     // is undefined 
```
export default myModule;
import myModule from ‘./myModule’;

Benefits:
maintainability
reusability
Namespacing

#
Hoisting
#
```python
console.log(Hoist);
var Hoist = ’The variable Has been hoisted’;
//output : undefined//
```
Javascript only hoists declarations not initalization

#
Scope
#
GLOBAL
```python
var greeting='Welcome to blog';
(function(){
  console.log(greeting); //Output: Welcome to blog
})();
```
LOCAL
```python

(function(){
  var greeting = 'Welcome to blog';
  console.log(greeting); //Output: Welcome to blog
})();
console.log(greeting); //Output:Reference-Error greeting not defined
```

#
Currying
when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth until all arguments have been fulfilled
#

```python
var add =   function (a){
                 return function(b){
                       return function(c){
                              return a+b+c;
                              }        
                        }
                  }
console.log(add(2)(3)(4)); //output 9
console.log(add(3)(4)(5)); //output 12
```


//ERRORS IN JAVASCRIPT

