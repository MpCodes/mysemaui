import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const TheHeader = () => {
	const [collapsed, setState] = useState(false);

	const toggle = () => {
		setState({
			collapsed: !collapsed
		});
	};

	return (
		<>
			<Header className='site-layout-background' style={{ padding: 0 }}>
				{React.createElement(
					collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
					{
						className: 'trigger',
						onClick: () => toggle
					}
				)}
			</Header>
		</>
	);
};

export default TheHeader;
