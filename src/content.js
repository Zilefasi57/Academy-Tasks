import React, { Component } from 'react';
import Newslatter from './newslatter';
class Content extends Component {
    state = {  } 
    render() { 
        return (
            <>
        <div className="content">
			<h4>Hello, my name is</h4>
			<h1>Tahmid <span>Ahmed</span></h1>
			<h3>I'am a Web Developer.</h3>
			<Newslatter />
		</div> 
            </>
        );
    }
}
 
export default Content;
