import React from 'react';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import TheContent from './TheContent';
import { Link } from 'react-router-dom';
import navigation from './_nav';

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
			<Layout
				style={{
					minHeight: 560,
				}}
			>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className='logo' />
					<Menu theme='dark' mode='inline' defaultSelectedKeys={['7']}>
						{navigation.map((navigation) => {
							if (navigation._tag === 'SubMenu') {
								return (
									<SubMenu
										key={navigation.key}
										title={navigation.title}
										icon={navigation.icon}
									>
										{navigation._children.map((_children) => {
											return (
												<Menu.Item key={_children.key}>
													<Link to={_children.route}>{_children.title}</Link>
												</Menu.Item>
											);
										})}
									</SubMenu>
								);
							} else {
								return (
									<Menu.Item key={navigation.key} icon={navigation.icon}>
										<Link to={navigation.route}>{navigation.title}</Link>
									</Menu.Item>
								);
							}
						})}
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
