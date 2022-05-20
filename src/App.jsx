//react library imports
import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router';

//in app imports
import './App.css';
import Header from './Components/Header';
import SignIn from './Components/pages/SignIn';
import SignUp from './Components/pages/SignUp';

function App() {
	return (
		<Fragment>
			<BrowserRouter>
			<Header />
				<Routes>
					<Route path='/' element={<SignIn/>}/>
					<Route path='/signUp' element={<SignUp/>}/>
					</Routes>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
