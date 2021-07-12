import React from 'react';
import { TheContent, TheSidebar, TheHeader } from './index';

const TheLayout = () => {
	return (
		<div className='layout'>
			<TheSidebar />
			<TheHeader />
			<TheContent />
		</div>
	);
};

export default TheLayout;
