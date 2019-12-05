import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO, COMPLETE_STATUS, SHOW_NOTIFICATION, HIDE_NOTIFICATION} from "../actions/actions";

const rootReducer = function (state = {
    activeFilter: "all",
    todos: [],
    show: false,
    notificationStatus: ''
 
}, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter};
        case SET_TODOS:
            return {...state, todos: action.todos}
        case ADD_TODO:            
            return {...state, todos: state.todos.concat([action.todo])}
        case REMOVE_TODO:
            const newTodos = state.todos.filter((todo) => todo.id !== action.id);
            return {
                ...state,
                todos: newTodos
            };
        case REMOVE_ALL_TODO:
            return {
                ...state,
                todos : []
            }

        case COMPLETE_STATUS:
            const newArr = state.todos.map((todo)=>{
                if(action.id === todo.id){
                    let currentTodo = {...todo};
                    currentTodo.checked = !currentTodo.checked;
                    return currentTodo
                }else{
                    return todo;
                }
            });
            return {
                ...state,
                todos: newArr
            }
        case SHOW_NOTIFICATION: 
            return {
                ...state,
                show: true,
                notificationStatus: action.notificationStatus
            }
        case HIDE_NOTIFICATION:
            return {...state, show: false}
        default:
            return state;
    }

};

export default rootReducer