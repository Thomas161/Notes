
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