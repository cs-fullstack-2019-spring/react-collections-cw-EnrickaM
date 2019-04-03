import React, { Component } from 'react';
import './App'
import KeyElements from './KeyElements'
class Address extends Component{
    render(){
        return(
            <div>
                <p>street:{this.props.street}</p>
                <p>suite:{this.props.suite}</p>
                <p>city:{this.props.city}</p>
                <p>zipcode:{this.props.zipcode}</p>
            </div>

        );
    }
}

export default Address;