//react library imports
import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router';

//in app imports
import './App.css';
import Header from './Components/Header';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

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
