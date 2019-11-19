Some event listeners, ajax, jQuery
document.getElementById('addPost').addEventListener('submit', onSubmitPosts);
   
   //retrieve albums
   function getAlbums() {
       var url = 'https://jsonplaceholder.typicode.com/users/3';
       fetch(url)
.then(response => response.json())
           .then(data => document.getElementById('ps').innerHTML= JSON.stringify(data));

}

   //fetch a file and display contents of .txt file
      function getFile() {
          var fetchFile = 'sam.txt';
          fetch(fetchFile)
              .then(response => response.text())
              .then(text =>  document.getElementById('ps'). innerHTML = text);
      }
//update users
   function updateUsers(){
       var url = 'https://jsonplaceholder.typicode.com/users/1';
       fetch(url, {
           method: 'PUT',
           body: JSON.stringify({
                name: 'Lenny Grant'
           }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

       })
       .then(response => response.json())
       .then(json =>document.getElementById('ps4').innerHTML = JSON.stringify(json));
           }

           //create element, set src attribute and append to document body
        function prevFile(){
            var x = document.createElement('img');
            x.setAttribute('src','Star.jpg');
            x.setAttribute('height', '160px')
            document.body.appendChild(x);
        }

        //displayData from json file
        function displayData(){
            fetch('test.json')
            .then(res => res.json())
            .then(data=> {
                let output ='<h3>Users</h3>';
                 data.forEach(function(d) {
                     output += `
                <ul class="list-group">
                   <li class="list-group-item"> ID : ${d.id}</li>
                   <li class="list-group-item">FirstName : ${d.firstName}</li>
                   <li class="list-group-item"> LastName : ${d.lastName}</li> 
                       </ul>
                       `;
                    });
                    document.getElementById('output').innerHTML = output;
            })
        }

        //onsubmit form which adds post to api

        function onSubmitPosts(e){
            e.preventDefault();

            let title = document.getElementById('title').value;
            let body = document.getElementById('body').value;

            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-type': 'application/json'
              }, 
              body: JSON.stringify({title: title, body: body})  
            })
            .then(res => res.json())
            .then(data => console.log(data));
               
               
            }
          
let top = {
  title: {
    name: 'Jones',
    id: {
      callsign: 'Fox'
 }
 }
 }
 
 const {title:t} = top;
 const {callsign:c} = top.title.id;
 console.log(t);
 console.log(c);

 console.log(window.location.protocol);
 const u = '89';

 console.log(parseFloat(u));

 const noob = 'jimmy';
 console.log(noob.substr(0,3));
 console.log(noob.toUpperCase(noob));

 const num = {title: 'Plumber'};
num.title = 'Clerk';

console.log(num.title);

/**Bad Mutation */
const ar123 = ['red','green','blue'];
ar123.filter(y=> y !=='green');
console.log(ar123);
/**Good Mutation */
console.log([...ar123, 'magenta']);
const second = [...ar123, 'purple'];
console.log(second);//modified spreadin in first array, not mutating it
console.log(ar123);//unchanged array

const prof ={ occ: 'Soldier'};
const pee = {...prof, occ: 'Carpenter', age: 30};//modifies one property and adds another
console.log(pee);
/**Lodash Library/good for deleting object properties
 * Wont mutate object
 */
//const poo = _.omit(...prof,'occ');
//console.log(poo);

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

/**
DELETE LIST ITEMS VIA EVENT LISTENER
*/

<div>
 <ul id="new-list">
   
   <li>One</li>
    <li>Two</li>
     <li>Three</li>
      <li>Four</li>
       <li>Five</li>
 </ul>
 <button class="btn btn-info" onclick="clickEv()">Delete Me</button>
</div>

function clickEv(){
var e = document.getElementById('new-list');
e.removeChild(e.childNodes[0]);
  
}

/** ADD ITEM VIA CREATING ELEMENTS*/
<div>
  <ul id="new-stuff">
  </ul>
  <button onclick="addItem()">Add</button>
</div>

function addItem(){
  var node = document.createElement('LI');
  var text = document.createTextNode('Water');
  node.appendChild(text);
  document.getElementById('new-stuff').appendChild(node);
}

<div>
  <ul id='new-list'>
    
  </ul>
  <button onclick="pushItemsOntoList()">Add</button>
</div>

//Array methods pop/push/slice/splice to affect array
var q = [12,13,1,4,56,32,11];
document.getElementById('new-list').innerHTML = q;

function pushItemsOntoList(){
  //delete last item off array
  //q.pop();
  //add one item to last element in Array
 // q.push('Frank');
 //return a new array index 2 - 5 (last index is excluded)
// q.slice(2,5);
// for(var queen in q ){
//   // 0 1 2 3 4 5 6
//   console.log(queen);
//   // 12 13 1 4 56 32 11
//   console.log(q[queen]);
// }
//splice method inserts elements into Array
//(e.g. example below returns == 12,Jimmy,Kenny, 4,56,32,11)
q.splice(1,2,'Jimmy','Kenny');
  document.getElementById('new-list').innerHTML=q;
 
}

//AWESOME CSS EFFECTS
<h2>Hover Effects</h2>
<div class="b">One</div>
<br/>
<div class="c">Two</div>
<br/>
<div class="d">Three</div>

//CSS FILE THAT EFFECTS THE INDIVIDUAL DIV ELEMENTS
.b {
 width: 100px;
  height: 80px;
  background: red;
  -webkit-transition-property: width; /* Safari */
  -webkit-transition-duration: 5s; /* Safari */
  -webkit-transition-delay: 2s; /* Safari */
  transition-property: width;
  transition-duration: 3s;
  transition-delay: 0.2s;
}
.c {
 width: 100px;
  height: 80px;
  background: green;
  -webkit-transition-property: width; /* Safari */
  -webkit-transition-duration: 5s; /* Safari */
  -webkit-transition-delay: 2s; /* Safari */
  transition-property: width;
  transition-duration: 3s;
  transition-delay: 0.2s;
}
.d {
 width: 100px;
  height: 80px;
  background: blue;
  -webkit-transition-property: width; /* Safari */
  -webkit-transition-duration: 5s; /* Safari */
  -webkit-transition-delay: 2s; /* Safari */
  transition-property: width;
  transition-duration: 3s;
  transition-delay: 0.2s;
}
div:hover{
  width: 400px;
}

h2{
  color: white;
}

Another Example of deleting list items via event listener
<div>
  <ul></ul>
    <li>1<button class="deleteMe">Del</button></li>
     <li>2<button class="deleteMe">Del</button></li>
      <li>3<button class="deleteMe">Del</button></li>
       <li>4<button class="deleteMe">Del</button></li>
        <li>5<button class="deleteMe">Del</button></li>
        
  </ul>
</div>

var docs = document.querySelectorAll('.deleteMe');

docs.forEach(btn=> {
  btn.addEventListener('click',function() {
    var li = this.parentNode;
    li.remove();
  })
})

//sort Array Example
//ascending a-b 7,8,9,12
//descending b-a 12,9,8,7

let c = [12,9,7,8];
c.sort((a,b)=> {
  return b-a;
})
console.log(c);
