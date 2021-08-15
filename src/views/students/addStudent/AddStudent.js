import React from 'react';
import { Form, Input, Button, Row, Col, Space, Select } from 'antd';
const { Option } = Select;

const AddStudent = () => {
	return (
		<>
			<h3 align='center'>Add Student Form</h3>
			<Form layout='vertical' className='classForm'>
				<Row></Row>
				<div>Person Particulars</div>
				<hr></hr>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<Form.Item label='First Name'>
							<Input placeholder='' />
						</Form.Item>
						<Form.Item label='Gender'>
							<Select defaultValue=''>
								<Option value=''> ---- </Option>
								<Option value='M'>Male</Option>
								<Option value='F'>Female</Option>
							</Select>
						</Form.Item>
						<Form.Item label='Admission Number'>
							<Input placeholder='' />
						</Form.Item>
						<Form.Item label='Class'>
							<Input placeholder='' />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<Form.Item label='Middle Name'>
							<Input placeholder='' />
						</Form.Item>
						<Form.Item label='Birth Date'>
							<Input placeholder='input placeholder' />
						</Form.Item>
						<Form.Item label='Academic Year'>
							<Select defaultValue=''>
								<Option value=''> ---- </Option>
								<Option value='F'>2020/2021</Option>
								<Option value='F'>2019/2020</Option>
								<Option value='F'>2018/2019</Option>
							</Select>
						</Form.Item>
						<Form.Item label='Disability'>
							<Select defaultValue=''>
								<Option value=''> ---- </Option>
								<Option value='M'>Not Disabled</Option>
								<Option value='F'>Blind</Option>
								<Option value='F'>Deaf</Option>
							</Select>
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<Form.Item label='Surname'>
							<Input placeholder='input placeholder' />
						</Form.Item>
						<Form.Item label='Nationality'>
							<Select defaultValue=''>
								<Option value=''> ---- </Option>
								<Option value='M'>Tanzanian</Option>
								<Option value='F'>Kenyan</Option>
								<Option value='F'>Ugandan</Option>
							</Select>
						</Form.Item>
						<Form.Item label='Programme'>
							<Select defaultValue=''>
								<Option value=''> ---- </Option>
								<Option value='M'>O LEVEL</Option>
								<Option value='F'>A LEVEL</Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<div>Contact Information</div>
				<hr></hr>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<Form.Item label='Mobile Number'>
							<Input placeholder='' />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<Form.Item label='Email'>
							<Input placeholder='' />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<Form.Item label='Postal Address'>
							<Input placeholder='' />
						</Form.Item>
					</Col>
				</Row>
				<div>Next Of Kin</div>
				<hr></hr>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<Form.Item label='Name'>
							<Input placeholder='' />
						</Form.Item>
						<Form.Item label='Relation'>
							<Select defaultValue=''>
								<Option value=''> ---- </Option>
								<Option value='M'>FATHER</Option>
								<Option value='F'>MOTHER</Option>
								<Option value='F'>GUARDIAN</Option>
							</Select>
						</Form.Item>
						<Form.Item label='Email'>
							<Input placeholder='' />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<Form.Item label='Mobile Number'>
							<Input placeholder='' />
						</Form.Item>
						<Form.Item label='Mobile Number 2'>
							<Input placeholder='' />
						</Form.Item>
						<Form.Item label='Postal Address'>
							<Input placeholder='' />
						</Form.Item>
					</Col>
				</Row>
				<Row justify='end'>
					<Space>
						<Form.Item>
							<Button type='primary' size='small'>
								Save
							</Button>
						</Form.Item>

						<Form.Item>
							<Button type='primary' size='small'>
								Save & Close
							</Button>
						</Form.Item>

						<Form.Item>
							<Button size='small'>Cancel</Button>
						</Form.Item>
					</Space>
				</Row>
			</Form>
		</>
	);
};

export default AddStudent;
