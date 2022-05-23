import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignIn() {
	const [ userRegistration, setuserRegistration ] = useState({
		email: '',
		password: ''
	});

	let navigate = useNavigate();


	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		console.log(name, value);

		setuserRegistration({ ...userRegistration, [name]: value });
	};


	const handleSignUp = (e) => {

			e.preventDefault()
		 
			
		  axios.post(
			"https://car-auction-assignment.herokuapp.com/registerProfile",
			userRegistration
		  ).then(
			setuserRegistration({
				email: '',
				password: ''
			}),
			navigate("/")
		  ).catch(
			  err => console.log(err)
		  )
	  };



	return (
		<Container component="main" maxWidth="s">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Typography component="h1" variant="h3">
					Sign Up To Collector Chassis
				</Typography>
				<Typography>
					Have Collector chassis account.
					<Link href="/" variant="body2" sx={{ textDecoration: 'none', color: '#b3916b' }}>
						{'Sign in'}
					</Link>
				</Typography>
				<Grid />
				<form onSubmit={handleSignUp} sx={{ mt: 1 }}>
				<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleInput}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleInput}
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, backgroundColor: '#b3916b' }}
					>
						Sign Up
					</Button>
				</form>	
			</Box>
		</Container>
	);
}
