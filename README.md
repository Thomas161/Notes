//CORE CONCEPTS IN JAVASCRIPT
#
To Avoid Copyright, i attribute these copy and pasted notes for quick reference to Medium.com

https://medium.com/@madasamy/15-javascript-concepts-that-every-nodejs-programmer-must-to-know-6894f5157cb7
#

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

#
Memoization
Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results
#

```python
const memoizedAdd = () => {
  let cache = {};
 return (value) => {
  if (value in cache) {
   console.log('Fetching from cache');
   return cache[value];
  }
  else {
   console.log('Calculating result');
   let result = value + 10;
   cache[value] = result;
   return result;
  }
 }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); //output: 19 calculated
console.log(newAdd(9)); //output: 19 cached
```

#
Callback Function
the callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
#

```python
function greeting(name) {

 console.log('Hello '+name);
}
function processUserInput(callback) {
  //var name = prompt('Please enter your name.');
  name='raja';
  callback(name);
}
processUserInput(greeting); //output Hello Raja
```

#
Apply, Bind, Call Methods
#
```python
var obj={
   num : 2
}
var add = function(num2,num3,num4){
   return this.num + num2 + num3 + num4;
}
var arr=[3,4,5];
//Call method 
console.log(add.call(obj,3,4,5));  //Output : 14
//Apply method
console.log(add.apply(obj,arr));   //Output : 14
//bind Method
var bound = add.bind(obj);
console.log(bound(3,4,5));         //output : 14 
```

#
Ploymorphism
Polymorphism is one of the tenets of Object Oriented Programming (OOP). It is the practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones
#

```python
var employee = new Employee('raja');
//override function
//this method going to execute
Employee.prototype.getDetails = function(){
   return this.name.toUpperCase();
}
console.log(employee.getDetails());  //outPut: RAJA
//object and prototype function
function Employee(name){
  this.name = name;
}
Employee.prototype.getDetails = function(){
  return this.name;
}
```

#
Asynchronous

In JavaScript Synchronous and asynchronous are code execution Pattern,

In JavaScript Code Execution done By two separate ways:

Browser JS Engine (popular V8 JS Engine)
NodeJs V8 Engine
Browser JS Engine parse Html file and executes JavaScript by three patterns,

synchronous
Asynchronous
defer

NodeJS V8 Engine:
NodeJS V8 engine executes its JavaScript Code as single threaded based on Event loop
#
```python

index.html
<script src='index.js'>           //default Synchronous
<script async src='index.js'>      //parse as Asynchronously
<script defer src='index.js'>      //parse as deferred

```

#
Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
A promise represents the result of the asynchronous function. Promises can be used to avoid chaining of callbacks.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed
#

```python
var promise1 = new Promise(function(resolve,reject){
isDbOperationCompleted = false;
if(isDbOperationCompleted){
  resolve('Completed');
} else{
  reject('Not completed');
}
});
promise1.then(function(result){
   console.log(result);          //Output : Completed
}).catch(function(error){
   console.log(error);           //if isDbOperationCompleted=FALSE                                                  
                                 //Output : Not Completed
})
```

#
Async & Await
ES5 -> Callback
ES6 -> Promise
ES7 -> async & await
#

```python
async function getUserDetail() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'default user'
        };
    }
}
```

//ERRORS IN JAVASCRIPT

