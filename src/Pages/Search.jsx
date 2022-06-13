//react imports
import React, {useEffect,useState} from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCarDetail } from '../slice/carDetailSlice'

//MUI imports
import { Container } from '@mui/system';

//third party library
import axios from 'axios';

const Search = () => {
  const {state} = useLocation();

  const dispatch = useDispatch();

  const carDetails = useSelector( state => state.carDetails)
  // console.log(state)

  const [searchCarResult, setsearchCarResult] = useState([])

  useEffect(() => {

		dispatch(fetchCarDetail())
    
  },[])
  

  useEffect(() => {

	const searchCarResult = carDetails.carDetail.filter( details => Object.values(details).join('').toLowerCase().includes(state.toLowerCase()))
	// console.log(searchCarResult)
	setsearchCarResult(searchCarResult);
  }, [state])
  

  return (
    <Container component="main" maxWidth="s">
        <div className="row">
				{searchCarResult.map((details) => (
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
    
  )
}

export default Search