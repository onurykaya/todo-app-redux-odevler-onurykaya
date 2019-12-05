import React from 'react';
import {connect} from "react-redux";
import {removeAllTodos, showNotification, hideNotification} from "./actionCreators/actionCreaters";


class RemoveAll extends React.Component {

    handleNotification = () => {
        this.showNotification();
        setTimeout(() => {
            this.hideNotification();
        }, 1000);
    }

     showNotification = () => {
         this.props.showNotification('removeAllTodo');
     }

     hideNotification = () => {
         this.props.hideNotification();
     }
    
    render() {
        const show = this.props.show && (this.props.notificationStatus === 'removeAllTodo')
        return (
        <div>
            {show && <p>Hepsi silindi! </p>}
            <button className = "remove-all"
            onClick = {() => {
                    this.props.removeAllTodos();
                    this.handleNotification();
                }
            } >
                    Tümünü Sil
            </button>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    show: state.show,
    notificationStatus: state.notificationStatus
});


const mapDispatchToProps = dispatch =>({
    removeAllTodos: () => {dispatch(removeAllTodos())},
    showNotification: (notificationStatus) => {dispatch(showNotification(notificationStatus))},
    hideNotification: () => {dispatch(hideNotification())}
})

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAll);
