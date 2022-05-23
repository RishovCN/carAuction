import React from 'react';

import Link from '@mui/material/Link';

import Container from '@mui/material/Container';

const SubmitVehical = () => {
	return (
		<Container component="main" maxWidth="s">
			<div className="colHead">
				<h2>Submit your Vehicle</h2>
				<p>
					Collector Chassis is a social platform for enthusiasts, hobbyists and collectors to showcase to
					showcase, spectate, buy and sell vintage, classic and special interest vehicles.
				</p>

				<strong>Choose: "Cool Collections" or "Awesome Auctions"</strong>
			</div>
			<div className="tab">
				<h2>Process</h2>
				<div className="tabButtons">
					<ul>
						<li className="tab1Btn active">Cool Collections</li>
						<li className="tab2Btn">Awesome Auctions</li>
					</ul>
				</div>
				<div className="tabContents">
					<div className="tab1Cont">Hello1</div>
					<div className="tab2Cont">Hello2</div>
				</div>
			</div>
		</Container>
	);
};

export default SubmitVehical;
