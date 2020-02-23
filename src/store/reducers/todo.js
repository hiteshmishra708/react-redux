import {
    TODO_ADD,
    TODO_DELETE,
} from '../../constants/actionTypes';

export const initialState = {
    todos: [],
};

const TodosReducer = (state = initialState, action) => {
    switch (action.actionTypes) {
        case TODO_ADD: {
            return {
                ...state,
                data: [...state.todos, action.data],
            }
        }
        case TODO_DELETE: {
            return {
                ...state,
                todos: state.todos.filter(_item => _item.value !== action.value)
            }
        }
        default: {
            return state;
        }
    }
};


export default TodosReducer;