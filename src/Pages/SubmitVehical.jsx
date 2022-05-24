import React, { useState } from 'react';

import Container from '@mui/material/Container';
import axios from 'axios';

const SubmitVehical = () => {
	const [ model, setmodel ] = useState('');
	const [ company, setcompany ] = useState('');
	const [ year, setyear ] = useState('');
	const [ auctionEnd, setauctionEnd ] = useState('');

	let payload = {
		model: model,
		company: company,
		year: year,
		auctionEndTime: auctionEnd
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(payload)
		axios.post('http://localhost:3001/cardetails', payload).then((res) => console.log(res));
	};

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
				<form style={{ margin: '10px', padding: '10px' }} onSubmit={handleSubmit}>
					<div className="form-row">
						<div className="col-md-4 mb-3">
							<label htmlFor="validationDefault01">Model</label>
							<input
								type="text"
								className="form-control"
								id="validationDefault01"
								placeholder="Model"
								name="model"
								onChange={(e) => setmodel(e.target.value)}
								required
							/>
						</div>
						<div className="col-md-4 mb-3">
							<label htmlFor="validationDefault02">Company</label>
							<input
								type="text"
								className="form-control"
								id="validationDefault02"
								placeholder="Company"
								name="model"
								onChange={(e) => setcompany(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="col-md-4 mb-3">
							<label htmlFor="validationDefault03">Year</label>
							<input
								type="number"
								className="form-control"
								id="validationDefault03"
								onChange={(e) => setyear(e.target.value)}
								placeholder="Year"
								required
							/>
						</div>
						<div className="col-md-4 mb-3">
							<label htmlFor="validationDefault04">Auction end time</label>
							<input
								type="date"
								className="form-control"
								id="validationDefault04"
								placeholder="Auction end time"
								onChange={(e) => setauctionEnd(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className="form-row">
						<label for="img">Select image:</label>
						<input type="file" id="img" name="img" accept="image/*" />
					</div>
					<div className="form-row">
						<button className="btn btn-primary" type="submit">
							Submit form
						</button>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default SubmitVehical;
