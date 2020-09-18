import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import SignUpForm from '../components/SignUpForm';
const SignUp = () => {
	return (
		<>
			<Head>
				<title>회원가입</title>
			</Head>
			<AppLayout>
				<SignUpForm />
			</AppLayout>
		</>
	);
};

export default SignUp;
