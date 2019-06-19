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
