import React from 'react';
import {connect} from "react-redux";
import {removeAllTodos} from "./actionCreators/actionCreaters";


class RemoveAll extends React.Component {


    render() {
        return (
        <div>
            <button className = "remove-all"
            onClick = {() => {
                    this.props.removeAllTodos();
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
})

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAll);
