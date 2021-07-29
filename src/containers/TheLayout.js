import React from 'react';
import { Col, Layout, Menu, Row, Space, Tooltip, Input } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	SettingOutlined,
	BellOutlined,
	UserOutlined,
} from '@ant-design/icons';

import TheContent from './TheContent';
import { Link } from 'react-router-dom';
import navigation from './_nav';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

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
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					className='sidebarL'
				>
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
						<Row>
							<Col span={12}>
								<Space size='small' align='center'>
									{React.createElement(
										this.state.collapsed
											? MenuUnfoldOutlined
											: MenuFoldOutlined,
										{
											className: 'trigger',
											onClick: this.toggle,
										}
									)}

									<strong>COMPANY</strong>
									<Search
										placeholder='search'
										allowClear
										className='searchHead'
										style={{ width: 200, marginTop: 15 }}
									/>
								</Space>
							</Col>
							<Col span={12}>
								<Row justify='end'>
									<Space size='large'>
										<Col>
											<Tooltip title='settings'>
												<SettingOutlined />
											</Tooltip>
										</Col>
										<Col>
											<Tooltip title='notification'>
												<BellOutlined />
											</Tooltip>
										</Col>
										<Col>
											<Tooltip title='profile'>
												<UserOutlined />
											</Tooltip>
										</Col>
										<Col>&nbsp;</Col>
									</Space>
								</Row>
							</Col>
						</Row>
					</Header>
					<TheContent />
				</Layout>
			</Layout>
		);
	}
}

export default TheLayout;
