import React, { Component } from 'react';
import Box from './box';
class Service extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="service">
		            <div className="title">
			            <h2>Our Services</h2>
		            </div>
                </div>
                <Box />
            </>
        );
    }
}
 
export default Service;