import React, { useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login';
import Widgets from './Widgets';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className='app'>
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}
		</div>
	);
}

export default App;
