import React from 'react';

export default () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
			<div className="container">
				<a className="navbar-brand js-scroll-trigger" href="#page-top">
					Coding Interview Helper
				</a>
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					Menu
					<i className="fa fa-bars" />
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav text-uppercase ml-auto">
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#services">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#portfolio">
								Exercices
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
