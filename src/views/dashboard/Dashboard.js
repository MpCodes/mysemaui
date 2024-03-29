import React from 'react';
import { Form, Input, Button, Row, Col, Space } from 'antd';

const Dashboard = () => {
	return (
		<>
			<h3 align='center'>Student Form</h3>
			<Form layout='vertical' className='classForm'>
				<Row></Row>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<Form.Item label='Field A'>
							<Input placeholder='input placeholder' />
						</Form.Item>
						<Form.Item label='Field B'>
							<Input placeholder='input placeholder' />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12}>
						<Form.Item label='Field C'>
							<Input placeholder='input placeholder' />
						</Form.Item>
						<Form.Item label='Field D'>
							<Input placeholder='input placeholder' />
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
							<Button type='primary' size='small'>
								Cancel
							</Button>
						</Form.Item>
					</Space>
				</Row>
			</Form>
		</>
	);
};

export default Dashboard;
