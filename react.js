
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