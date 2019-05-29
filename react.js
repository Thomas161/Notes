
//stateless components:
//No state required, just output with styles
//one-dimensional functionality - no overly complex calculations
import React from 'react'
import moment from 'moment'
//stateless component
const StatelessComponent = ({ title, subtitle, onClick }) =>
    <div onClick={onClick}>
        <div>{title}</div>
        <div>{subtitle}</div>
    </div>

// StatelessComponentWithInsideFunction
const StatelessComponentWithInsideFunction = props => {
    const { title, subtitle, datetime, onClick } = props
    const ago = moment(datetime).fromNow()

    return (
        <div onClick={onClick}>
            <div>{title}</div>
            <div>{subtitle}</div>
            <div>{ago}</div>
        </div>
    )
}

export default StatelessComponent

//STATEFUL COMPONENT
//Specifically, you need a component that has a state and / or 
//lifecycle.You’ll need the state for situations when the parent component doesn’t change, 
//but you need this component or it’s children to change.
import React, { Component } from 'react'

class StatefulComponent extends Component {
    //CAN ALSO INCLUDE:  
    //constructor() & super() passing in props(prop drilling)
    //also can optional this.state = (depends on syntax)
    state = {
        timer: null,
        visible: false,
    }

render() {
    const styles = { display: this.state.visible ? 'block' : 'none' }
    return <div style={styles}>I will hide in 4 seconds.</div>
}
}

export default StatefulComponent

//functional component
//Functional Components are functions, no state and lifecycle methods i.e stateless like above
//easier to test, no state or side effects to worry about
//easier to debug
function Hello(props) {
    return <div>Hello {props.name}</div>
}
//ES6 functional component, identical to one above
const Hello = ({ name }) => <div>Hello {name}</div>

//Functional components can reduce coupling 
//One of the core concepts used to describe clean code is coupling.
//Coupling describes the degree of dependency between one entity to another.
//If our code has low coupling, 
//it means that we can change one area of our code without impacting another. 


//ERRORS


/*
ARRAY KEY MISSING WARNING
*/

const arr = ['red','blue','green'];

//inside render and return
<p>{arr.map(m=> <li>{m}</li>)}</p>
//will produce warning key is required for arrays
//fix <p key={m}>{m}</p>

/*
MUTATED A STATE VARIABLE
*/

state = {
    arrow: ['violet','blossom'];
}
//function
//bad - do not mutate object, unexpected behaviour
changeColor=()=> {
    const a = this.state.arrow;
    a[0] = 'green';
    this.setState({a});
}
//fix - spread ... or Object.assign
//both maintain immutability of objects
const a = [...this.state.arrow];
const a = Object.assign({});

/*
setState is asynchronous
*/

state = {
    counter: 1,
};

incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
};
//expected value to be 4, but answer is 2, not enough time to change the value when next call is done

/*
Forgot Arrows in Callback
*/

state = {
    counter: 1,
};

incrementCounter = (amount) => {
    this.setState({ counter: this.state.counter + amount });
};

render() {
    return (
        <div>
            <p>{this.state.counter}</p>
            <button onClick={this.incrementCounter(5)} />
        </div>
    );
}
//The correct way to assign a function at events is to use arrow function
onClick = {() => this.incrementCounter(5)}
//When you don’t need parameter in your function or parameters are given directly by the event
onClick = { this.myFunction }
// Is the same as onClick={(e) => this.myFunction(e)}

/*
Objects are not valid as a React child”
*/
import * as React from "react";
type Status =
    | "Open"
    | "Closed"

type PureProps = {
    status: Status;
};

function StatusDescription(status: Status): JSX.Element {
    return <span>{status}</span>;;
}

export class StatusSummary extends React.PureComponent {
    render() {
        return (
            <StatusDescription status={this.props.status} />
        );
    }
}

//fix => return <span>{status}</span> has two properties Open or closed, 
//solution status.Open or status.Closed


/*
Currying
Currying is transforming a function with N number of parameters into a chain of N functions,
 each with one parameter. 
The resulting function is calledcurried function
*/

const add = (a, b) => console.log(a + b)

add(1, 2) // Result is 3

const addCurried = a => b => console.log(a + b)

addCurried(1)(2) // Result is also 3

const anotherAddCurried = a => b => c => console.log(a + b + c)

anotherAddCurried(1)(2)(3) // Result is 6

/*
CONDITIONAL RENDERING USING TRENARY
//RULE OF THUMB, CANNOT USE if/else if, else, switch inside a render, can be used inside a function
*/

render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            {isLoggedIn ? (
                <LogoutButton onClick={this.handleLogoutClick} />
            ) : (
                    <LoginButton onClick={this.handleLoginClick} />
                )}
        </div>
    );
}

/*
handleChange & handleSubmit functions
*/
//hypothetically if there was a state object called value
//we would modify it via a input field(form)
//thus submitting this form would alert us of state object value, and prevent default behaviour of browser
handleChange(event) {
    this.setState({ value: event.target.value });
}

handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
}

/*
PROPTYPES GOOD FOR VALIDATION
*/
<h1>{this.props.name}</h1>

Greeting.propTypes = {
    name: PropTypes.string
};
// Specifies the default values for props:
Greeting.defaultProps = {
    name: 'Stranger'
};

//specifying type
optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
        optionalFunc: PropTypes.func,
            optionalNumber: PropTypes.number,
                optionalObject: PropTypes.object,
                    optionalString: PropTypes.string,
                        optionalSymbol: PropTypes.symbol,

                        /*
                        REQUIRING SINGLE CHILD, PASSING SINGLE CHILD TO A COMPONENT
                        */
    class MyComponent extends React.Component {
        render() {
            // This must be exactly one element or it will warn.
            const children = this.props.children;
            return (
                <div>
                    {children}
                </div>
            );
        }
    }

MyComponent.propTypes = {
    children: PropTypes.element.isRequired
};

/*
FRAGMENTS
component to return multiple elements
group a list of children without adding extra nodes to the DOM
*/
//ALSO CAN BE ACHIEVED VIA <> </>, IDENTICAL
render() {
    return (
        <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
        </React.Fragment>
    );
}

/*
AUTOBINDING
This means that they don’t automatically bind this to the instance. 
You’ll have to explicitly use .bind(this) in the constructor:
*/

//INSIDE CONSTRUCTOR
this.handleClick = this.handleClick.bind(this);

render() {
    // Because `this.handleClick` is bound, we can use it as an event handler.
    return (
        <button onClick={this.handleClick}>
            Say hello
      </button>
    );
}
}

// WARNING: this syntax is experimental!
// Using an arrow here binds the method:
handleClick = () => {
    alert(this.state.message);
}

/*
REFS
Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.

 created using React.createRef() WITH THE ref attribute
*/

//Refs and Function Components
//You may not use the ref attribute on function components

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}

//below is an error ref

function MyFunctionComponent() {
    return <input />;
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    render() {
        // This will *not* work!
        return (
            <MyFunctionComponent ref={this.textInput} />
        );
    }
}

/*
Context
Context provides a way to share values 
like these between components without 
having to explicitly pass a prop through 
every level of the tree.
global passing data through tree
*/
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
    render() {
        // Use a Provider to pass the current theme to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing "dark" as the current value.
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />;
    }
}

//WEBPACK
// cannot resolve module style-loader or css loader
npm i style-loader && css loader
update webpack.config to include modules





