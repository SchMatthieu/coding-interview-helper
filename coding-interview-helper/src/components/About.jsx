import React from 'react';

export default () => {
	return (
		<section className="page-section" id="about">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase">About</h2>
						<h3 className="section-subheading text-muted">Step by step...</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<ul className="timeline">
							<li>
								<div className="timeline-image">
									<img
										className="rounded-circle img-fluid"
										src="img/about/question-mark.png"
										alt=""
									/>
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4 className="subheading">Facing an issue?</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
											One of the main reason of this platform is to help people prepare for their
											coding interview. We've all faced this type of problem at least once in our
											career, as an intern or even when starting a new job. But trust us, you're
											in the right place.
										</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<img className="rounded-circle img-fluid" src="img/about/training.png" alt="" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4 className="subheading">Start training</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
											Learning and training regularly is the best way to prepare for those types
											of interviews! So bring your knowledge and your best code with you and let's
											get to it.
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className="timeline-image">
									<img className="rounded-circle img-fluid" src="img/about/communicate.png" alt="" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4 className="subheading">Communicate</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
											You are not alone! The goal is also to build a community for people to help
											each other. If you have a question or an answer feel free to say what you
											think.
										</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<img className="rounded-circle img-fluid" src="img/about/satisfaction.png" alt="" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4 className="subheading">Feel good</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
											What better feeling than feeling good about yourself? After all those failed
											exercices and all this training you're finally ready to make your step into
											the big league. And guess what will come next?
										</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<img className="rounded-circle img-fluid" src="img/about/success.png" alt="" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
