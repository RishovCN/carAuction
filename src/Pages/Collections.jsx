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
				{carDetails.map((details) => (
					<div className="col-lg-4 col-sm-6 col-xs-12" key = {details.id}>
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
                                <h6>
									Auction-End-Date {`${details.auctionEndTime}`}
								</h6>
							</div>
								
						</div>
					</div>
				))}
				{/* <div className="col-lg-4 col-sm-6 col-xs-12">
				<div className="">
					<div className="">
						<img className='car_collection'
							data-fallback-src="https://s3.amazonaws.com/car.app.prod.bucket/production/1653352176877.jpeg"
							data-retry-count="1"
							data-retry-limit="3"
							src="https://s3.amazonaws.com/car.app.prod.bucket/production/1653352176877.jpeg"
							alt="post"
						/>
					</div>
					<div className="block_txt mb-0">
						<h6>
							<br />
							2015 Porsche 911 
						</h6>
					</div>
                    <div className="block_txt mb-0">
						<h6>
							<br />
							Auction-End-Date
						</h6>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-sm-6 col-xs-12">
				<div className="">
					<div className="">
						<img className='car_collection'

							src="https://s3.amazonaws.com/car.app.prod.bucket/production/1653352176877.jpeg"
							alt="post"
						/>
					</div>
					<div className="block_txt mb-0">
						<h6>
						<br />
							2015 Porsche 911
						</h6>
					</div>
                    <div className="block_txt mb-0">
						<h6>
							<br />
							Auction-End-Date
						</h6>
					</div>
				</div>
                </div> */}
			</div>
		</Container>
	);
};
export default Collections;
