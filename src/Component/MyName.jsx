import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return(
            <div>
                안녕! 난 <b>{this.props.name}</b> 이고,
                <b>{this.props.sex}</b>이야
            </div>
        )
    }
}

export default MyName;