//decimal to binary

console.log(Number(200).toString(2));
console.log(200..toString(2));
console.log(5..toString(2));

const arr = [85];
console.log(arr[0].toString(2));


/* BANK ACCOUNT USING A CONSTRUCTOR**/
//creating a constructor
var Bank = function(name,balance){
  this.balance = balance;
  this.name = name;
  this.withdraw = function(amount){
     var newBalance =this.balance - amount;
    if(newBalance <= 0){
      console.log('Error negative funds');
    } 
   return `New balance after withdraw : ${newBalance}`;
  
  }
  this.deposit = function(amount2){
    var newDeposit = this.balance + amount2;
    return ` New balance after deposit : ${newDeposit}`;
  }
}

  var p = new Bank('Pool', 60);
  console.log(p.withdraw(30));
  console.log(p.deposit(90));

/*ANOTHER BANK ACCOUNT SNIPPET**/
<body>
    <div>
<input type="text" id="amount" placeholder="Enter withdrawal amount">
<button id="enter">Submit Total</button>

<p id="sum"> </p>

    </div>
    
    <script>
    function withdrawMoney(amount){
        var balance = 3000;
        if(amount >= balance){
            alert('insufficient funds');
            return false;
        }
        balance = balance - amount;
 document.getElementById('sum').innerText = `$ Total Remaining:${balance}`;

    }

    function enterAmount(){
        var amount = document.getElementById('amount').value;
        withdrawMoney(amount);
    }
     document.getElementById('enter').addEventListener('click',enterAmount);
    </script>
</body>

##Currency Converter
<body onload="init()">

<h1>Currency Converter</h1>

<div>
  
  <input type="text" id="AUD" size="10" value="0" onchange="auDollar()" />
  <label for="AUD">AUS</label>
  <br/>
  <br/>
  <input type="text" id="USD" size="10" value="0" onchange="usDollar()" />
  <label for="USD"> USD </label>
</div>
<script>
var aud,usd;
function init(){
    aud = document.getElementById("AUD");
     usd = document.getElementById('USD');
}  
  function auDollar(){
    usd.value =parseFloat(aud.value) * 0.68;
  }
  function usDollar(){
    aud.value = parseFloat(usd.value)* 1.46;
  }
</script>
</body>

//Time Conversions

var sec = 1000;//1 second
var min = sec*60;//1 minute
var hour = min*60;//1 hour (minutes * 60 minutes in day/divided by total milliseconds in hour(3,600,000)

console.log('Milliseconds in Seconds',sec);
console.log('Seconds in a Minute',min);//millisecinds in a minute
console.log('milliseconds in an hour', hour);//3,600,000
console.log('convert milliseconds in an hour to single unit', hour/3600000);

//Set and Get Cookies
<script>
var x =document.cookie = 'name=Hello';
var y = document.cookie = 'title=FoxTrot';

function alertCookie(){
  alert(x + " " + y);
}
</script>
<div>
  <button onclick="alertCookie()">Get Da Cookies</button>
</div>


//binding objects
//solution 1 
const user ={
   firstname : 'Jamie',
  talk(){
    alert(`Hey ${this.firstname}`);
  }
}
//setTimeout(function(){user.talk();},2000);

//solution 2 
const poop = {
  last: 'Jimmy JaBah'
  
}

function pod(){
  console.log(this.last);
}
//bind the method to the object to allow method to use this to invoke the this 

const utopia = pod.bind(poop);
console.log(utopia());

//solution 3 
const u2 = {
  reg: '008',
  pods: function(phrase){
    console.log(`${phrase} +++++ ${this.reg}`)
  }
}
 let sayHi =u2.pods.bind(u2);
 console.log(sayHi('Penelope'));
 
 
 //solution 4 
 const ties = {
   fat(){
     console.log('Ties that bind');
   },
   cat(){
     console.log('In the hat');
   }
 }
 for(var key in ties){
   if(typeof ties[key] === 'function'){
     ties[key] =ties[key].bind(ties);
   }
    
 console.log(ties[key]);
 }
 
 //confusing
 function right(){
   console.log(this);
 }
 
 const reggie = {
   g: right.bind(null)
 }
 
reggie.g();

//implicit binding using prototype

var MyObj = function(){
  this.name = 'kyser sosay';
}
MyObj.prototype.fosure = function(action){
  console.log(this.name + " is a " + action);
}
var jam = new MyObj();
jam.fosure('Mystery'); //kyser sosay is a Mystery


//explicit calling (Using object above)

var runner = {state: 'Victoria', nationality: 'Australia'};
MyObj.prototype.fosure.call(runner, runner.nationality);


//var -> function level
//let -> block
//const -> cannot be reassigned

//objects
const person12345 = {
  name: "Lizzie",
  //methods inside an object with/without colon :
  walk: function() {},
  talk() {},
  easy() {
    //reference to the object usiing this keyword
    console.log(this);
  }
};
//reference to object
const willy = person12345.easy;
console.log(willy);
//binding this, arg passed in (person12345) binds to this keyword
const wet = person12345.easy.bind(person12345);
wet();
//willy(); undefined no willy method,
//only a variable with reference to the objcts method

//person12345.easy();

//arrow function
const squid = number => (number * number) / 3;
console.log(squid(10));

//arrow function filtering an array
let ton = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 5, isActive: false }
];
const fitter = ton.filter(f => {
  return f.isActive === true;
});
console.log(fitter);
//arrow functions dont rebind this
const peeps12 = {
  talk() {
    var self = this;
    setTimeout(function() {
      console.log("self reference", self);
    }, 3000);
  }
};

peeps12.talk(); //prints this reference timeout function after 3 secs
const y2k = peeps12.talk.bind(peeps12);
console.log(y2k);
//binary search
function serach(list, value) {
  let start = 0;
  let end = list.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (list[middle] !== value && start < end) {
    if (value < list[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return list[middle] !== value ? -1 : middle;
}
let arr = [12, 13, 45, 67, 69, 89];
console.log(serach(arr, 45)); //prints 2 index of value

let red = ["Starch", "Yeast", "Hopps"];
let tool = ["Hammer", "Nail", "PlyWood"];

let teeth = red.concat(tool);

console.log(teeth);
console.log(teeth.find(f => f.startsWith("N"))); //nail
console.log(teeth.slice(4)); //nail and plywood, index 4 and 5
console.log(teeth.filter(fd => fd !== "Yeast")); //prints array excluding "Yeast"
console.log("hello");

/**Some Objects */

var retro = {
  type: "commodore",
  year: 1983
};
console.log(retro["type"]); //object notation

class Abs {
  constructor(name, sign) {
    this.name = name;
    this.sign = sign;
  }
}
//creating new object from object class above
var newbie = new Abs("Roger", 007);

console.log(newbie);

let fred = [12, 13, 45];
let james = [this.fred, 94, 93];
console.log(james);
let gerry = [99, 98, ...fred, 100, 102];
console.log(gerry);

let tits = [12, 13, 22, 18, 22, 44];
for (var i in tits) {
  var d = [Math.floor(Math.random() * tits.length[i])];
}
console.log(d);
