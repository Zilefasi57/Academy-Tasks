import React, { Component } from 'react';
class About extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <section className="about">
					<div className="main">
						<div>
							<img src={ require('./img/main-img.png')}></img>
						</div>
						<div className="about-text">
							<h2>About Me</h2>
							<h5>Developer <span>& Designer</span></h5>
							<p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
							<button type="button">Let's Talk</button>
						</div>
					</div>
				</section>
            </>
        );
    }
}
 
export default About;