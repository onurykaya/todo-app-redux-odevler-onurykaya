import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO, COMPLETE_STATUS, SHOW_NOTIFICATION, HIDE_NOTIFICATION} from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function addTodo(todo){
    return(dispatch) =>{
        dispatch({type: ADD_TODO, todo})
        dispatch(showNotification(`${todo.content} Eklendi`))
    }
}

export function removeTodo(id){
    return(dispatch) => {
        dispatch({type: REMOVE_TODO, id})
        dispatch(showNotification(`Silindi`))
    }
}

export function removeAllTodos(){
    return(dispatch) => {
        dispatch({type: REMOVE_ALL_TODO})
        dispatch(showNotification(`Hepsi Silindi `))
    }
}

export function toggleCompleteStatus(id){
    return {type:COMPLETE_STATUS, id}
}

export function showNotification(notificationStatus) {
    return (dispatch) => {
        dispatch({type: SHOW_NOTIFICATION, notificationStatus })
        setTimeout(()=>{
            dispatch(hideNotification());
        }, 2000);
    }
}

export function hideNotification(){
    return {type: HIDE_NOTIFICATION}
}