//React imports
import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

//third-party-imports
import axios from'axios';

//Material Ui imports
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {

	const [ display, setDisplay ] = useState('none');

	const companys = new Set();
	const [ company, setcompany ] = useState([ ...companys ]);

	const [searchKey, setsearchKey] = useState('');

	const [searchMenu, setsearchMenu] = useState([]);

	const navigate = useNavigate();

	let user;
	
	let activeClassName = "active";

	useEffect(
		() => {

			axios.get(`${process.env.REACT_APP_JSON_API}cardetails`).then((res) => {
				res.data.map((details) => companys.add(details.company));
				setcompany([ ...companys ]);
			});

			user = sessionStorage.getItem('user');
			if (user === 'admin@gmail.com') {
				setDisplay('block');
			}
		},
		[ user ]
	);


	const handleSearch = (e) =>{

		const search = e.target.value;

		const searchResult = company.filter((items) => items.includes(search.toUpperCase()));
		setsearchMenu(searchResult);
		setsearchKey(search);
		if (!search) {
			setsearchMenu([]);
		}
		
	}

	const handleMenu = (e) => {

		const seletectedMenu = e.target.getAttribute('data')

		navigate('/search', {state:seletectedMenu});
		setsearchMenu([]);

		// console.log(seletectedMenu)

	}

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

		<div className='px-5 position-relative' >
		<Paper
					component="form"
					sx={{ p: '2px 4px', maxWidth: 400, width: '100%', margin: '0 auto', align: 'center' }}
				>
					<IconButton type="submit" aria-label="search">
						<SearchIcon />
					</IconButton>
					{/* <input type="search"  placeholder="Search" inputProps={{ 'aria-label': 'search' }} id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" onKeyUp={handleSearch}/> */}
					<InputBase sx={{ ml: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search' }} onKeyUp={handleSearch} />
					
				</Paper>
				<Paper className="position-absolute">
				{searchMenu.length ? 
					<div className="nav-search-abs" aria-labelledby="navbarDropdownMenuLink">
					{searchMenu.map((details) => (
						<a className="dropdown-item" data={details} onClick={handleMenu} key={details}>
							{details}
						</a>
					))}
				</div> : ''
				}
				</Paper>
		</div>
				
				<nav className="nav" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto' }}>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>ABOUT</Typography>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>AUCTION</Typography>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>
						<NavLink
							className={({ isActive }) => (isActive ? activeClassName : undefined)}
							// style={{ textDecoration: 'none', color: '#b3916b' }}
							to="/Collections"
						>
							COLLECTION
						</NavLink>
					</Typography>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>NEWS</Typography>

					{/* <Typography sx = { isAdmin? {display:'block', p: '2px 4px', align: 'right', color: 'black' }:{display:'none', p: '2px 4px', align: 'right', color: 'black' }}> */}
					<Typography sx={{ display: `${display}`, p: '2px 4px', align: 'right', color: 'black' }}>
						<NavLink
							className={({ isActive }) => (isActive ? activeClassName : undefined)}
							// style={{ textDecoration: 'none', color: '#b3916b' }}
							to="/submitVehical"
						>
							SUBMIT VEHICAL
						</NavLink>
					</Typography>
					<Typography sx={{ p: '2px 4px', align: 'right', color: 'black' }}>
						<NavLink
							className={({ isActive }) => (isActive ? activeClassName : undefined)}
							// style={{ textDecoration: 'none', color: '#b3916b' }}
							to="/"
						>
							SIGN IN
						</NavLink>
					</Typography>

					{/* {NavLinks.map((NavLink,index)=> <Typography className={isActive === NavLink.name ? 'active' : ''}  onClick={()=> setActive(link.name)} sx={{ p: '2px 4px', align: 'right', color: 'black' }}>
					 
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
