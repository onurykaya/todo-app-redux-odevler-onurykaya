import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO, COMPLETE_STATUS, SHOW_NOTIFICATION, HIDE_NOTIFICATION} from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function addTodo(todo){
    return {type: ADD_TODO, todo}
}

export function removeTodo(id){
    return {type: REMOVE_TODO, id}
}

export function removeAllTodos(todos){
    return {type: REMOVE_ALL_TODO, todos}
}

export function toggleCompleteStatus(id){
    return {type:COMPLETE_STATUS, id}
}

export function showNotification(notificationStatus) {
    return {type: SHOW_NOTIFICATION, notificationStatus }
}

export function hideNotification(){
    return {type: HIDE_NOTIFICATION}
}