import {
    INC,
    DEC,
    ADD_FIVE
} from '../../constants/counterTypes'

const initailState = {
    counter: 0
}

const CounterReducer = (state = initailState, action) => {
    switch (action.type) {
        case INC: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case DEC: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case ADD_FIVE: {
            return {
                ...state,
                counter: state.counter + action.data
            }
        }
        default:
            return state;

    }
}

export default CounterReducer;