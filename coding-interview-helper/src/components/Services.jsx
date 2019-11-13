import React from 'react';

export default () => {
	return (
		<section className="page-section" id="services">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase">Services</h2>
						<h3 className="section-subheading text-muted">Step up your coding game...</h3>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fa fa-circle fa-stack-2x text-primary" />
							<i className="fa fa-users fa-stack-1x fa-inverse" />
						</span>
						<h4 className="service-heading">Community</h4>
						<p className="text-muted">
							This platform is made for you and for other people to help each other succeed coding
							interviews. Don't be afraid we all start somewhere..
						</p>
					</div>
					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fa fa-circle fa-stack-2x text-primary" />
							<i className="fa fa-laptop fa-stack-1x fa-inverse" />
						</span>
						<h4 className="service-heading">Coding</h4>
						<p className="text-muted">
							You'll find plenty of exercices on this platform. Interactive coding, MCQ about a lot of
							programming languages. We'll always find a way to help you!
						</p>
					</div>
					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fa fa-circle fa-stack-2x text-primary" />
							<i className="fa fa-battery-three-quarters fa-stack-1x fa-inverse" />
						</span>
						<h4 className="service-heading">Improvement</h4>
						<p className="text-muted">
							We are always trying to add to the platform. If you can't find something now, it might be coming later and you could be the one to help us create something better for everybody!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
