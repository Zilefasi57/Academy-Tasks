import React, { Component } from 'react';
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <footer>
					<p>Tahmid Ahmed</p>
					<p>For more HTML, CSS, and coding tutorial - please click on the link below to subscribe to my channel:</p>
					<div className="social">
						<a href="#"><i className="fab fa-facebook-f"></i></a>
						<a href="#"><i className="fab fa-instagram"></i></a>
						<a href="#"><i className="fab fa-dribbble"></i></a>
					</div>
					<p className="end">CopyRight By Tahmid Ahmed</p>
				</footer>
            </>
        );
    }
}
 
export default Footer;