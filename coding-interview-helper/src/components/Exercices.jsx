import React from 'react';

export default ({ exercicesLinks }) => {
	return (
		<section className="bg-light page-section" id="portfolio">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase">Exercices</h2>
						<h3 className="section-subheading text-muted">Find your favorite programming language and start now!</h3>
					</div>
				</div>
				<div className="row">
					{exercicesLinks &&
						exercicesLinks.map(({ title, link }) => 
							<div className="col-md-4 col-sm-6 portfolio-item">
								<a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
									<div className="portfolio-hover">
										<div className="portfolio-hover-content">
											<i className="fa fa-plus fa-3x" />
										</div>
									</div>
									<img className="img-fluid" src={link} alt="" height="150" width="150" />
								</a>
								<div className="portfolio-caption">
									<h4>{ title }</h4>
								</div>
							</div>
						)
                    }
				</div>
			</div>
		</section>
	);
};
