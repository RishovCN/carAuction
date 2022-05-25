import React, { useEffect, useState } from 'react';
import '../App.css';

import Link from '@mui/material/Link';

import Container from '@mui/material/Container';
import axios from 'axios';

const Collections = () => {
	const [ carDetails, setcarDetails ] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/cardetails').then((res) => {
			setcarDetails(res.data);
		});
	}, []);

	return (
		<Container component="main" maxWidth="s">
			<div className="row">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									All Auction
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Maker
								</a>

								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<input type="text" className="dropdown-item" id="dropdown-input" />
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link"
									href="#"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Reset Menu
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="row">
				{carDetails.map((details) => (
					<div className="col-lg-4 col-sm-6 col-xs-12" key={details.id}>
						<div className="">
							<div className="">
								<img
									className="car_collection"
									src="https://s3.amazonaws.com/car.app.prod.bucket/production/1653352176877.jpeg"
									alt="post"
								/>
							</div>
							<div className="block_txt mb-0">
								<h6>
									<br />
									{`${details.year} ${details.model} ${details.company} `}
								</h6>
								<h6>Auction-End-Date {`${details.auctionEndTime}`}</h6>
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};
export default Collections;
