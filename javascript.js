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
