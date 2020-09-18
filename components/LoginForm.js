import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { LoginAction } from '../reducers/user';
import { useDispatch } from 'react-redux';

const FormWrapper = styled(Form)`
	padding: 10px;
	text-align: center;
`;
const LoginDivWrapper = styled.div`
	margin: 5px auto;
`;
const ButtonWrapper = styled(Button)`
	margin-left: 5px;
`;

const LoginForm = () => {
	const dispatch = useDispatch();
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const onChangeId = useCallback((e) => {
		setId(e.target.value);
	}, []);
	const onChangePassword = useCallback((e) => {
		setPassword(e.target.value);
	}, []);

	const onSubmitForm = useCallback(() => {
		console.log(id, password);
		dispatch(LoginAction({ id, password }));
	}, [id, password]);

	return (
		<>
			<FormWrapper onFinish={onSubmitForm}>
				<label htmlFor="id-form">아이디</label>
				<Input
					name="id-form" //
					value={id} //
					onChange={onChangeId} //
					required
				/>
				<label htmlFor="password-form">비밀번호</label>
				<Input.Password
					name="password-form"
					value={password}
					onChange={onChangePassword}
					required
				/>
				<LoginDivWrapper>
					<Button type="primary" htmlType="submit">
						로그인
					</Button>
					<Link href="/signup">
						<a>
							<ButtonWrapper type="primary">회원가입</ButtonWrapper>
						</a>
					</Link>
				</LoginDivWrapper>
			</FormWrapper>
		</>
	);
};

export default LoginForm;
