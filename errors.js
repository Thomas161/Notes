
/*
 CANNOT READ PROPERTY
 */
var foo;
console.log(foo.bar);//bar is undefined

//items undefined
//fix =  declare and initalise array named items
items.map(it=> 
    <p>{it}</p>
)
//items undefined
//fix =  declare and initalise object named items
items.forEach(f=> {
    <p>{f}</p>
})

/*
UNDEFINED IS NOT AN OBJECT example
This is an error that occurs in Safari when you read a property or call a method on an undefined object
*/
var test = undefined;
if(test.length  === 0){
    console.log('Error');
}

/*
TypeError: NULL IS NOT AN OBJECT
This is an error that occurs in Safari when you read a property or call a method on a null object
*/
var test = null;
if (test.length === 0) {
    console.log('Error');
}
/*
Interestingly, in JavaScript, 
null and undefined are not the same, 
which is why we see two different error messages.
Undefined is usually a variable that has not been assigned,
while null means the value is blank. Use strict equality === instead of ==
    */
    //bad
    undefined == null;
    //good
    undefined === null;

    /*
    TypeError: OBJECT DOESN'T SUPPORT PROPERTY example
    */

    this.isAwesome();

    //Thus, the safest bet when using JS namespacing is to always prefix with the actual namespace

    Rollbar.isAwesome();

    /*
TypeError: UNDEFINED IS NOT A FUNCTION EXAMPLE
    */
    function clearBoard() {
        alert("Cleared");
    }

    document.addEventListener("click", function () {
        this.clearBoard(); // what is “this” ?
    });

    //FIX 
    var self = this;
      document.addEventListener("click", function () {
          self.clearBoard(); //solves above method
      });

      /*
UNCAUGHT RANGEERROR EXAMPLE
      */

      var a = new Array(1);
      function recurse(a) {
          a[0] = new Array(1);
          recurse(a[0]);
      }
      recurse(a);

      /*
TypeError: CANNOT READ PROPERTY LENGTH
      */

      var testArray = ["Test"];

      function testFunction(testArray) {
          for (var i = 0; i < testArray.length; i++) {
              console.log(testArray[i]);
          }
      }

      testFunction();

   //When you declare a function with parameters, 
   //these parameters become local ones. 
   //This means that even if you have variables with names testArray, 
   //parameters with the same names within a function will still be treated as local.

   //2 FIXES
   //1. remove parameters of method
   //2. Invoke function with params,and pass it in when called

   /*
Uncaught TypeError: CANNOT SET PROPERTY
When we try to access an undefined variable it always 
returns undefined and we cannot get or set any property of undefined
   */
  var test = undefined;
  test.value = 0;//cannot set property value on undefined

  /*
ReferenceError: EVENT IS NOT DEFINED
  */

  function testFunction(){
var foo;
  }
  console.log(foo);

  //fix
  document.addEventListener("mousemove", function (event) {
      console.log(event);
  })
 

