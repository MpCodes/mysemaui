/* import React from 'react'; */

const _nav = [
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Settings',
		route: '/settings',
		icon: 'cil-settings',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'College/Institution Info',
				to: '/settings/addCollege',
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Users',
				to: '/settings/allUsers',
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Departments',
				to: '/settings/allDepartments',
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Programs',
				to: '/settings/allPrograms',
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Modules',
				to: '/settings/allModules',
			},
		],
	},
	{
		_tag: 'CSidebarNavItem',
		name: 'Students',
		to: '/students/allStudents',
		icon: 'cil-user',
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Classes',
		route: '/base',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'All Classes',
				to: '/base/breadcrumbs',
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Bind Students',
				to: '/base/cards',
			},
		],
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Course',
		route: '/buttons',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'All Courses',
				to: '/buttons/buttons',
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Bind Courses',
				to: '/buttons/brand-buttons',
			},
		],
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Results',
		route: '/icons',
		icon: 'cil-notes',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'Record Results',
				to: '/results/allResults',
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Publish Results',
				to: '/results/publishedResults',
			},
		],
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'School Fees',
		route: '/notifications',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'Fee Types',
				to: '/notifications/alerts',
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Invoices',
				to: '/notifications/badges',
			},
		],
	},
	{
		_tag: 'CSidebarNavDivider',
	},
	{
		_tag: 'CSidebarNavDivider',
		className: 'm-2',
	},
];

export default _nav;
