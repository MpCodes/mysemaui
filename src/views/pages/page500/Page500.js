import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const Page500 = () => {
	return (
		<Result
			status='500'
			title='500'
			subTitle='Sorry, something went wrong.'
			extra={
				<Button type='primary'>
					<Link to='/'>Back Home</Link>
				</Button>
			}
		/>
	);
};

export default Page500;
