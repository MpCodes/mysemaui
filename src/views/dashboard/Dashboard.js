import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const Dashboard = () => {
	return (
		<>
			<Form layout='vertical'>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col span={12}>
						<Form.Item label='Field A'>
							<Input placeholder='input placeholder' />
						</Form.Item>
						<Form.Item label='Field B'>
							<Input placeholder='input placeholder' />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label='Field C'>
							<Input placeholder='input placeholder' />
						</Form.Item>
						<Form.Item label='Field D'>
							<Input placeholder='input placeholder' />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col flex='auto'>4 / 5</Col>
					<Col flex='200px'>
						<Row gutter={16}>
							<Col>
								<Form.Item>
									<Button type='primary'>Submit</Button>
								</Form.Item>
							</Col>
							<Col>
								<Form.Item>
									<Button type='primary'>Cancel</Button>
								</Form.Item>
							</Col>
						</Row>
					</Col>
				</Row>
			</Form>
		</>
	);
};

export default Dashboard;
