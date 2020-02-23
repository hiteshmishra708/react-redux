import {
    TODO_ONCHANGE,
    TODO_ADD,
    TODO_DELETE,
} from '../../constants/actionTypes';

export const addTodo = (item) => ({
    type: TODO_ADD,
    fata: item
});

export const deleteTodo = (item) => ({
    type: TODO_DELETE,
    data: item
});
