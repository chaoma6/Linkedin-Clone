import React from 'react';
import { Avatar } from '@mui/material';

function HeaderOption({ avatar, Icon, title }) {
	return (
		<div className='headerOption'>
			{Icon && <Icon className='headerOption__icon' />}
			{avatar && <Avatar sx={{ width: 25, height: 25 }} src={avatar} />}
			<h3 className='headerOption__title'>{title}</h3>
		</div>
	);
}

export default HeaderOption;
