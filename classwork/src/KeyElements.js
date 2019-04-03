import React, { Component } from 'react';
import './App'
import Address from "./Address";
class KeyElements extends Component{
    render(){
        return(
            <div>
                {/*<p>postId:{this.props.element.id}</p>*/}
                <p> id:{this.props.element.id}</p>
                <p>name:{this.props.element.name}</p>
                <p>username:{this.props.element.username}</p>
                <p>email:{this.props.element.email}</p>
                <Address key={this.props.address}/>
            </div>
        );
    }
}

export default KeyElements;