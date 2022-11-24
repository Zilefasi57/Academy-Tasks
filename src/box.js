import React, { Component } from 'react';
class Box extends Component {
    state = {  } 
    render() { 
        return (
            <>
				<div className="box">
					<div className="card">
						<i className="fas fa-bars"></i>
						<h5>Web Development</h5>
						<div className="pra">
							<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

							<p>
								<a className="button" href="#">Read More</a>
							</p>
						</div>
					</div>

					<div className="card">
						<i className="far fa-user"></i>
						<h5>Web Development</h5>
						<div className="pra">
							<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

							<p>
								<a className="button" href="#">Read More</a>
							</p>
						</div>
					</div>

					<div className="card">
						<i className="far fa-bell"></i>
						<h5>Web Development</h5>
						<div className="pra">
							<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

							<p>
								<a className="button" href="#">Read More</a>
							</p>
						</div>
					</div>
				</div>
            </>
        );
    }
}
 
export default Box;