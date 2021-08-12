import React from 'react';
import { Table, Space, Button, Row } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';

/* import usersData from "../../users/UsersData"; */

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.name.length - b.name.length,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.address.length - b.address.length,
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

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(
			`selectedRowKeys: ${selectedRowKeys}`,
			'selectedRows: ',
			selectedRows
		);
	},
	getCheckboxProps: (record) => ({
		disabled: record.name === 'Disabled User',
		// Column configuration not to be checked
		name: record.name,
	}),
};

const AllStudents = () => {
	return (
		<div>
			<Table
				rowSelection={{
					type: 'checkbox',
					...rowSelection,
				}}
				columns={columns}
				dataSource={data}
			/>
		</div>
	);
};

export default AllStudents;
