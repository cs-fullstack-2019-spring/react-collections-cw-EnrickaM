import React, { Component } from 'react';
import './App'
import KeyElements from './KeyElements'


class FinalProduct extends Component{
    render(){
        const keyElementMap=this.props.rawData.map(

            (eachElement)=>{
                console.log(eachElement)
                return (<KeyElements key={eachElement.address} element={eachElement}/>)
            });
        return(
            <div>{keyElementMap}</div>
        )

    }
}

export default FinalProduct;