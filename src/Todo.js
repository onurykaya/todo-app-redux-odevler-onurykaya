import React, {Component} from 'react';
import {connect} from "react-redux";
import {removeTodo, toggleCompleteStatus} from "./actionCreators/actionCreaters";

class Todo extends Component {

    render() {
    const {content, id, checked, handleNotification} = this.props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
        return(
            <div>
                
                <div className={itemClass} onClick={() => {this.props.toggleCompleteStatus(id);}}>
                {content}
                <span
                    className="remove-todo"
                    onClick={(e) => {e.stopPropagation();this.props.removeTodo(id); handleNotification()}}>X</span>
            </div>
            </div>
        );
    }
}



const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))},
    toggleCompleteStatus: (id) => {dispatch(toggleCompleteStatus(id))},
    
});

export default connect(null, mapDispatchToProps)(Todo);
