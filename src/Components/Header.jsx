import React from 'react';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

//Material Ui imports
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {

	let [isActive,setActive]=useState("")
	const [isAdmin, setisAdmin] = useState(false)
	 let user;


	

	useEffect(() => {
	user = localStorage.getItem("user");
	if(user == "admin@gmail.com") setisAdmin(true)
	}, [user])
	

	// const links = [
	// 	{ name: 'ABOUT', path: '/about' },
	// 	{ name: 'AUCTION', path: '/auction' },
	// 	{ name: 'COLLECTION', path: '/collections' },
	// 	{ name: 'NEWS', path: '/news' },
	// 	{ name: 'SUBMIT VEHICLES', path: '/submitVehical'},
	// 	{ name: 'SIGN IN', path: '/' }
	// ];
	return (
		<AppBar sx={{ backgroundColor: 'white', borderBottom: '3px solid #b3916b', position: 'fixed' }}>
			<Toolbar sx={{ display: 'flex', alignItems: 'center', p: '20px' }}>
				<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>Logo</Typography>

				<Paper
					component="form"
					sx={{ p: '2px 4px', maxWidth: 400, width: '100%', margin: '0 auto', align: 'center' }}
				>
					<IconButton type="submit" aria-label="search">
						<SearchIcon />
					</IconButton>
					<InputBase sx={{ ml: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
				</Paper>

				<nav className="nav" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto' }}>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>ABOUT</Typography>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>AUCTION</Typography>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>
						<Link style={{ textDecoration: 'none', color: '#b3916b' }} to="/Collections">
							COLLECTION
						</Link>
					</Typography>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>NEWS</Typography>

					<Typography sx = { isAdmin? {display:'block', p: '2px 4px', align: 'right', color: 'black' }:{display:'none', p: '2px 4px', align: 'right', color: 'black' }}>
						<Link style={{ textDecoration: 'none', color: '#b3916b' }} to="/submitVehical">
							SUBMIT VEHICAL
						</Link>
					</Typography>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>
						<Link style={{ textDecoration: 'none', color: '#b3916b' }} to="/">
							SIGN IN
						</Link>
					</Typography>	
				

				 	{/* {links.map((link,index)=> <Typography className={isActive === link.name ? 'active' : ''}  onClick={()=> setActive(link.name)} sx={{ p: '2px 4px', align: 'right', color: 'black' }}>
					 
					 <Link  style={{ textDecoration: 'none', color: '#b3916b' }} to={link.path}>
							{link.name}
						</Link>
					 </Typography>)}  */}
				</nav>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
