import React from 'react';
import Todo from './Todo';
import { connect } from "react-redux";
import { showNotification, hideNotification } from "./actionCreators/actionCreaters";


class TodoList extends React.Component{
    state= {
        title: "Yapılacaklar"
    }

    handleNotification = () => {
        this.showNotification();
        setTimeout(() => {
            this.hideNotification();
        }, 1000);
    }

    showNotification = () => {
        this.props.showNotification('removeTodo');
    }

    hideNotification = () => {
        this.props.hideNotification();
    }

    render(){
        const show = this.props.show && (this.props.notificationStatus === 'removeTodo')
        return (
            
            <div className="todo-list">
                {show && <p>Todo silindi</p>}
                <h3>
                    {this.state.title} <span>{this.props.todos.length}</span>
                </h3>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                            onCheckedToggle={this.props.onCheckedToggle}
                            handleNotification = {this.handleNotification}
                        />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    show: state.show,
    notificationStatus: state.notificationStatus
});


const mapDispatchToProps = dispatch => ({
    showNotification: (notificationStatus) => {
        dispatch(showNotification(notificationStatus))
    },
    hideNotification: () => {
        dispatch(hideNotification())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
