import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Home = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<AppLayout>Home!!</AppLayout>
		</>
	);
};

export default Home;
