import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const TheContent = () => {
	return (
		<Content style={{ margin: '0 16px' }}>
			<div
				className='site-layout-background'
				style={{ padding: 24, minHeight: 360 }}
			>
				Bill is a cat.
			</div>
		</Content>
	);
};

export default TheContent;
