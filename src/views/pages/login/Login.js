import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<div>
			<Row justify='center' align='middle'>
				<Col flex={4}></Col>
				<Col flex={2}>
					<Form
						name='normal_login'
						className='login-form'
						layout='vertical'
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
					>
						<Form.Item
							name='username'
							label='Username'
							rules={[
								{
									required: true,
									message: 'Please input your Username!',
								},
							]}
						>
							<Input
								prefix={<UserOutlined className='site-form-item-icon' />}
								placeholder='Username'
							/>
						</Form.Item>
						<Form.Item
							name='password'
							label='Password'
							rules={[
								{
									required: true,
									message: 'Please input your Password!',
								},
							]}
						>
							<Input
								prefix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Password'
							/>
						</Form.Item>
						<Form.Item>
							{/* <Form.Item name='remember' valuePropName='checked' noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item> */}

							<a className='login-form-forgot' href='/'>
								Forgot password ?
							</a>
						</Form.Item>
						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'
								className='login-form-button'
								block
							>
								Log in
							</Button>
						</Form.Item>
						<div align='center'>
							Don't have an account? <a href='/'>register now!</a>
						</div>
					</Form>
				</Col>
				<Col flex={4}></Col>
			</Row>
		</div>
	);
};

export default Login;
