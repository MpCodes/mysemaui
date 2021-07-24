import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout, Spin } from 'antd';

// routes config
import routes from '../routes';

const { Content } = Layout;

const loading = (
	<div className='spinCenter'>
		<Spin size='large' />
	</div>
);

const TheContent = () => {
	return (
		<Content
			className='site-layout-background'
			style={{
				margin: '24px 16px',
				padding: 24,
				minHeight: 560,
			}}
		>
			<Suspense fallback={loading}>
				<Switch>
					{routes.map((route, idx) => {
						return (
							route.component && (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									render={(props) => <route.component {...props} />}
								/>
							)
						);
					})}
					<Redirect from='/' to='/dashboard' />
				</Switch>
			</Suspense>
		</Content>
	);
};

export default TheContent;
