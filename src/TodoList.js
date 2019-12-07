import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component{
    state= {
        title: "Yapılacaklar"
    }

    render(){
       
        return (
            
            <div className="todo-list">
                <h3>
                    {this.state.title} <span>{this.props.todos.length}</span>
                </h3>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                            onCheckedToggle={this.props.onCheckedToggle}
                        />
                    })
                }
            </div>
        );
    }
}



export default TodoList;
