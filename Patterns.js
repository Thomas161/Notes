//Module Pattern example 1

var htmlChange = (function () {
    var contents = "Sample text";

    var changeText = function () {
        var element = document.getElementById('attribute-to-change');
        element = contents;
    }
    return {
        callBackChange: function () {
            changeText();
            console.log('Value of contents variable is', contents);
        }
    }
})();

htmlChange.callBackChange();
//example 2

var personName = (function(){
  var fName;
  var lName;
  
  function setName(f,l){
    fName = f;
    lName =l;
  }
  
  function getName(){
    console.log(fName + " " + lName);
    return fName + " " + lName;
   
      
    }
  
  return {
    setName:setName,
    getName: getName
  }
})();

personName.setName('Owen','Davian');
personName.getName();

//Singleton Pattern

var single = (function(){
  var instance;
  
  function init(){
    //private methods and variables
    function privateMeth(){
      console.log('Private');
    }
      var r = Math.random();
      
      return {
        //public methods that encapsutlate the private variables
        publicMeth: function(){
          console.log('public');
        },
        getRandomNumber: function(){
          return r;
        }
      }
  }
    return {
      getInstance: function(){
        if(!instance){
          instance = init();
        }
          return instance;
      }
    };
})();
var single123 = single.getInstance();
var single456 =single.getInstance();
console.log('Two instances ' , single123 + " " + single456);
console.log('Equality', single123===single456);//true


//Prototype Pattern

var TeslaModel = function(){
  this.number = 20;
  this.type = 'Camaro';
  this.make = 'S70';
}

TeslaModel.prototype.number = 80;
TeslaModel.prototype.package = (function(){
  return this.number + " " + this.type + " " + this.make;
})()

var myNewCar = new TeslaModel();
console.log(myNewCar);

