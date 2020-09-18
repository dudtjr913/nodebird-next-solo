import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';

const Home = () => {
	const { isLogged } = useSelector((state) => state.user);
	const { mainPosts } = useSelector((state) => state.post);
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<AppLayout>
				{isLogged && <PostForm />}
				{mainPosts.map((v) => (
					<PostCard post={v} key={v.id} />
				))}
			</AppLayout>
		</>
	);
};

export default Home;
