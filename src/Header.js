import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' alt='linkedin logo' />
				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={GroupIcon} title='My Network' />
				<HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOption Icon={MessageIcon} title='Messaging' />
				<HeaderOption Icon={NotificationsIcon} title='Notifications' />
				<HeaderOption avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx_d3NrogyyO9eXj_4N2gSeCWOHWPInqvcxB0u98&s' title='me' />
			</div>
		</div>
	);
}

export default Header;
