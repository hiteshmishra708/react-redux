import React, { Component } from 'react';
import Aux from '../../hoc/ux';
import { connect } from 'react-redux';
import { increment, decrement, addFive } from '../../store/actions/counter';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    userCount = (e) => {
        this.setState({ number: e.target.value })
    }
    handleSubmit(e) {
        alert('The value is: ' + this.input.value);
        e.preventDefault();
    }
    render() {
        return (<Aux>
            Home
            <div>
                {this.props.counter}
                <input value={this.state.number} type="number" onChange={(e) => this.userCount(e)} />
                <button onClick={() => this.props.onIncrementByUser(this.state.number)} >Increment by user</button>
                <button onClick={this.props.onIncrement} >Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button>
            </div>



            {/* <form onSubmit={this.handleSubmit}>
                <label>
                    Name:<input type="text" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit" />
            </form> */}
        </Aux>)
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onIncrementByUser: (number) => dispatch(addFive(Number(number)))
        // onIncrement: () => dispatch({ type: INC }),
        // onDecrement: () => dispatch({ type: DEC }),
        // onIncrementByUser: (number) => dispatch({ type: ADD_FIVE, payload: Number(number) })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);