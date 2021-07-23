import React from 'react';

const AllStudents = React.lazy(() =>
	import('./views/students/allStudents/AllStudents')
);
const AddStudent = React.lazy(() =>
	import('./views/students/addStudent/AddStudent')
);
const AddCollege = React.lazy(() =>
	import('./views/settings/addCollege/AddCollege')
);
const AllUsers = React.lazy(() => import('./views/settings/allUsers/AllUsers'));
const AddUser = React.lazy(() => import('./views/settings/addUser/AddUser'));

const AllDepartments = React.lazy(() =>
	import('./views/settings/allDepartments/AllDepartments')
);
const AddDepartment = React.lazy(() =>
	import('./views/settings/addDepartment/AddDepartment')
);

const AllPrograms = React.lazy(() =>
	import('./views/settings/allPrograms/AllPrograms')
);
const AddProgram = React.lazy(() =>
	import('./views/settings/addProgram/AddProgram')
);

const AllModules = React.lazy(() =>
	import('./views/settings/allModules/AllModules')
);
const AddModule = React.lazy(() =>
	import('./views/settings/addModule/AddModule')
);

const AllResults = React.lazy(() =>
	import('./views/results/allResults/AllResults')
);
const RecordResults = React.lazy(() =>
	import('./views/results/recordResults/RecordResults')
);

const EditResults = React.lazy(() =>
	import('./views/results/editResults/EditResults')
);

const PublishedResults = React.lazy(() =>
	import('./views/results/publishedResults/PublishedResults')
);

const PublishResults = React.lazy(() =>
	import('./views/results/publishResults/PublishResults')
);

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
	{ path: '/', exact: true, name: 'Home' },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/students/allStudents', name: 'Students', component: AllStudents },
	{ path: '/students/addStudent', name: 'AddStudent', component: AddStudent },
	{ path: '/settings/addCollege', name: 'AddCollege', component: AddCollege },
	{ path: '/settings/allUsers', name: 'AllUsers', component: AllUsers },
	{ path: '/settings/addUser', name: 'AddUser', component: AddUser },
	{
		path: '/settings/allPrograms',
		name: 'AllPrograms',
		component: AllPrograms,
	},
	{ path: '/settings/addProgram', name: 'AddProgram', component: AddProgram },
	{ path: '/settings/allModules', name: 'AllModules', component: AllModules },
	{ path: '/settings/addModule', name: 'AddModule', component: AddModule },

	{
		path: '/settings/allDepartments',
		name: 'AllDepartments',
		component: AllDepartments,
	},
	{
		path: '/settings/addDepartment',
		name: 'AddDepartment',
		component: AddDepartment,
	},

	{
		path: '/results/allResults',
		name: 'AllResults',
		component: AllResults,
	},
	{
		path: '/results/recordResults',
		name: 'RecordResults',
		component: RecordResults,
	},
	{
		path: '/results/editResults',
		name: 'EditResults',
		component: EditResults,
	},

	{
		path: '/results/publishedResults',
		name: 'PublishedResults',
		component: PublishedResults,
	},

	{
		path: '/results/publishResults',
		name: 'PublishResults',
		component: PublishResults,
	},

	{ path: '/users', exact: true, name: 'Users', component: Users },
	{ path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
