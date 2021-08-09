import React from 'react';
import { Table, Space, Button, Row } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';

/* import usersData from "../../users/UsersData"; */

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<Row justify='end'>
				<Space size='middle' justify='end'>
					<Button icon={<EditOutlined />} size='small' />
					<Button icon={<EyeOutlined />} size='small' />
					<Button icon={<DeleteOutlined />} size='small' />
					{/* <a>Invite {record.name}</a>
        <a>Delete</a> */}
				</Space>
			</Row>
		),
	},
];

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
];

const AllStudents = () => {
	return (
		<>
			<Table columns={columns} dataSource={data} />
		</>
	);
};

export default AllStudents;
