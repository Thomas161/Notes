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
