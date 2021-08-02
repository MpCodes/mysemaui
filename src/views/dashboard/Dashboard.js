import React from 'react';
import { Form, Input, Button, Row, Col, Space } from 'antd';

const Dashboard = () => {
	return (
		<>
			<h3 align='center'>Student Form</h3>
			<Form layout='vertical' className='classForm'>
				<Row>
					{/* For error xs={24} xl={12}
xs={24} xl={12} */}
				</Row>
				<Row gutter={{ xs: 32, sm: 24, md: 16, lg: 12 }}>
					<Col>
						<Form.Item label='Field A'>
							<Input placeholder='input placeholder' />
						</Form.Item>
						<Form.Item label='Field B'>
							<Input placeholder='input placeholder' />
						</Form.Item>
					</Col>
					<Col>
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
							<Button type='primary'>Save</Button>
						</Form.Item>

						<Form.Item>
							<Button type='primary'>Save & Close</Button>
						</Form.Item>

						<Form.Item>
							<Button type='primary'>Cancel</Button>
						</Form.Item>
					</Space>
				</Row>
			</Form>
		</>
	);
};

export default Dashboard;
