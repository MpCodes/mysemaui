/* import React from 'react'; */
import {
	SettingOutlined,
	UserOutlined,
	AppstoreOutlined,
	BankOutlined,
	ReadOutlined,
	SolutionOutlined,
	DollarCircleOutlined
} from '@ant-design/icons';

const _nav = [
	{
		_tag: 'MenuItem',
		title: 'Dashboard',
		route: '/dashboard',
		icon: <AppstoreOutlined />,
		key: '7'
	},
	{
		_tag: 'SubMenu',
		title: 'Settings',
		route: '/settings',
		icon: <SettingOutlined />,
		key: '1',
		_children: [
			{
				title: 'College/Institution Info',
				route: '/settings/addCollege',
				key: '1.1'
			},
			{
				title: 'Users',
				route: '/settings/allUsers',
				key: '1.2'
			},
			{
				title: 'Departments',
				route: '/settings/allDepartments',
				key: '1.3'
			},
			{
				title: 'Programs',
				route: '/settings/allPrograms',
				key: '1.4'
			},
			{
				title: 'Modules',
				route: '/settings/allModules',
				key: '1.5'
			}
		]
	},
	{
		_tag: 'MenuItem',
		title: 'Students',
		route: '/students/allStudents',
		icon: <UserOutlined />,
		key: '2'
	},
	{
		_tag: 'SubMenu',
		title: 'Classes',
		route: '/base',
		icon: <BankOutlined />,
		key: '3',
		_children: [
			{
				title: 'All Classes',
				route: '/base/breadcrumbs',
				key: '3.1'
			},
			{
				title: 'Bind Students',
				route: '/base/cards',
				key: '3.2'
			}
		]
	},
	{
		_tag: 'SubMenu',
		title: 'Course',
		route: '/buttons',
		icon: <ReadOutlined />,
		key: '4',
		_children: [
			{
				title: 'All Courses',
				route: '/buttons/buttons',
				key: '4.1'
			},
			{
				title: 'Bind Courses',
				route: '/buttons/brand-buttons',
				key: '4.2'
			}
		]
	},
	{
		_tag: 'SubMenu',
		title: 'Results',
		route: '/icons',
		icon: <SolutionOutlined />,
		key: '5',
		_children: [
			{
				title: 'Record Results',
				route: '/results/allResults',
				key: '5.1'
			},
			{
				title: 'Publish Results',
				route: '/results/publishedResults',
				key: '5.2'
			}
		]
	},
	{
		_tag: 'SubMenu',
		title: 'School Fees',
		route: '/notifications',
		icon: <DollarCircleOutlined />,
		key: '6',
		_children: [
			{
				title: 'Fee Types',
				route: '/notifications/alerts',
				key: '6.1'
			},
			{
				title: 'Invoices',
				route: '/notifications/badges',
				key: '6.2'
			}
		]
	}
];

export default _nav;
