import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function SignIn() {
	const handleSubmit = () => {

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
				<Typography component="h1" variant="h3" >
					Sign in to Collector Chassis
				</Typography>
				<Typography>
					No Collector chassis account yet?
					<Link href="/signUp" variant="body2" sx={{ textDecoration: 'none', color: '#b3916b' }}>
						{'Create an account'}
					</Link>
				</Typography>
                <Grid>
                    
                </Grid>
				<Box component="form" onChange={handleSubmit} noValidate  sx={{ mt: 1}}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
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
					/>
         
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor:'#b3916b' }}>
						Sign Up
					</Button>
					
				</Box>
			</Box>
		</Container>
	);
}
