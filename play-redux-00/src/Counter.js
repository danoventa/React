import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const counter =  (props) => {

    const increment = () => {
        props.dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        props.dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{props.count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
};

export default connect(mapStateToProps)(counter);