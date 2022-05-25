//react imports 
import React, { useEffect, useState } from 'react';

//Css imports
import '../App.css';

//MUI imports
import Container from '@mui/material/Container';

//Third Party library imports
import axios from 'axios';

const Collections = () => {
	const companys = new Set();
	const [ company, setcompany ] = useState([ ...companys ]);
	const [ searResult, setsearResult ] = useState([ ...companys ]);
	const [ carDetails, setcarDetails ] = useState([]);
	const [ filterCarDetails, setfilterCarDetails ] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_JSON_API}cardetails`).then((res) => {
			setcarDetails(res.data);
			setfilterCarDetails(res.data)
			res.data.map((details) => companys.add(details.company));
			setcompany([ ...companys ]);
			setsearResult([ ...companys ]);
		});
	}, []);

	const searchDropdown = (e) => {
		const Search = e.target.value;

		const searchResult = company.filter((items) => items.includes(Search.toUpperCase()));
		setsearResult(searchResult);
		if (!Search) {
			setsearResult(company);
		}
	};

	const handleMenu =  (e) => { 
		console.log(e.target.getAttribute('data'))

		const search = e.target.getAttribute('data')

		const searchResult = carDetails.filter( details => Object.values(details).join('').toLowerCase().includes(search.toLowerCase()))

		setfilterCarDetails(searchResult)

		console.log('car',searchResult)
	
	}

	const handleReset = () => {
		setfilterCarDetails(carDetails)
	}

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
									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									All Auction
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"

									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Maker
								</a>

								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<input
										type="text"
										className="dropdown-item"
										id="dropdown-input"
										onKeyUp={searchDropdown}
									/>
									{searResult.map((details) => (
										<a className="dropdown-item" data={details} onClick={handleMenu} key={details}>
											{details}
										</a>
									))}
								</div>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link"
									data='reset'
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									onClick={handleReset}
								>
									Reset Menu
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="row">
				{filterCarDetails.map((details) => (
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
