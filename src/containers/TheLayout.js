import React from 'react';
import { TheContent, TheSidebar, TheHeader } from './index';
import { Layout } from 'antd';

const { Sider } = Layout;

class TheLayout extends React.Component {
	state = {
		collapsed: false
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		const { collapsed } = this.state;

		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
					<TheSidebar />
				</Sider>
				<Layout className='site-layout'>
					<TheHeader />
					<TheContent />
				</Layout>
			</Layout>
		);
	}
}

export default TheLayout;
