import React from 'react';

function HeaderOption({ avatar, Icon, title }) {
	return (
		<div className='headerOption'>
			{Icon && <Icon className='headerOption__icon' />}
			{avatar && <img className='headerOption__icon' alt='' src={avatar} />}
			<h3 className='headerOption__title'>{title}</h3>
		</div>
	);
}

export default HeaderOption;
