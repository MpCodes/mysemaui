import React from 'react';
import SideBarMenu from '../components/SideBarMenu';

const TheSidebar = () => {
	return (
		<div className='Thesidebar'>
			<div className='sideHeader'>
				<h4>Sema-UI</h4>
			</div>
			<div className='sideMain'>
				<SideBarMenu />
			</div>
		</div>
	);
};

export default TheSidebar;
