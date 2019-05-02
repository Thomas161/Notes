
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

   

