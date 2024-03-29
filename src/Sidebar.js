import React from 'react';
import { Avatar } from '@mui/material';
import './Sidebar.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
					alt=''
				/>
				<Avatar src={user.photoUrl} className='sidebar__avatar'>
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>2,543</p>
				</div>
				<div className='sidebar__stat'>
					<p>View on post</p>
					<p className='sidebar__statNumber'>2,448</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('softwareengineering')}
				{recentItem('design')}
				{recentItem('developer')}
			</div>
		</div>
	);
}

export default Sidebar;
