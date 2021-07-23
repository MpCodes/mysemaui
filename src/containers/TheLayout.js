import React from 'react';
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	SettingOutlined,
} from '@ant-design/icons';

import TheContent from './TheContent';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

class TheLayout extends React.Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className='logo' />
					<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
						<Menu.Item key='1' icon={<UserOutlined />}>
							nav 1
						</Menu.Item>
						<Menu.Item key='2' icon={<VideoCameraOutlined />}>
							nav 2
						</Menu.Item>
						<Menu.Item key='3' icon={<UploadOutlined />}>
							nav 3
						</Menu.Item>
						<SubMenu
							key='sub4'
							icon={<SettingOutlined />}
							title='Navigation Three'
						>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<Header className='site-layout-background' style={{ padding: 0 }}>
						{React.createElement(
							this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
							{
								className: 'trigger',
								onClick: this.toggle,
							}
						)}
					</Header>
					<TheContent />
				</Layout>
			</Layout>
		);
	}
}

export default TheLayout;
