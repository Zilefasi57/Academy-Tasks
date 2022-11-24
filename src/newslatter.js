import React, { Component } from 'react';
class Newslatter extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="newslatter">
				    <form>
					<input type="email" name="email" id="mail" placeholder="Enter Your Email"></input>
					<input type="submit" name="submit" value="Lets Start"></input>
				    </form>
		        </div>
            </>
        );
    }
}
 
export default Newslatter;