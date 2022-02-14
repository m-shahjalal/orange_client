import React from 'react';

const Layout = ({ children }) => {
	return (
		<div
			style={{ maxWidth: '100%', width: '1000px' }}
			className='container mx-auto mb-12'>
			{children}
		</div>
	);
};

export default Layout;
