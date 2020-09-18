import React, { useState, useCallback, useRef } from 'react';
import { Form, Input, Tooltip, Select, Checkbox, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const prePhoneNumber = (
	<Form.Item initialValue="010" name="prePhone" noStyle>
		<Select style={{ width: '80px', textAlign: 'center' }}>
			<Select.Option value="010">+010</Select.Option>
			<Select.Option value="011">+011</Select.Option>
			<Select.Option value="017">+017</Select.Option>
			<Select.Option value="018">+018</Select.Option>
			<Select.Option value="019">+019</Select.Option>
		</Select>
	</Form.Item>
);

const SignupForm = () => {
	const formRef = useRef();

	const handleOnSignUp = useCallback(() => {
		const id = formRef.current.getFieldValue('id');
		const password = formRef.current.getFieldValue('password');
		const passwordConfirm = formRef.current.getFieldValue('passwordConfirm');
		const nickname = formRef.current.getFieldValue('nickname');
		const phone = formRef.current.getFieldValue('phone');
		console.log(id, password, nickname, phone);
	}, []);

	return (
		<Form
			wrapperCol={{ span: '8' }}
			labelCol={{ span: '8' }}
			ref={formRef}
			onFinish={handleOnSignUp}
			scrollToFirstError>
			<Form.Item
				name="id"
				label="아이디"
				rules={[
					{
						required: true,
						message: '아이디를 입력해주세요.',
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name="password"
				label="비밀번호"
				rules={[
					{
						required: true,
						message: '비밀번호를 입력해주세요.',
					},
				]}>
				<Input.Password />
			</Form.Item>
			<Form.Item
				name="passwordConfirm"
				dependencies={['password']}
				hasFeedback
				label="비밀번호 확인"
				rules={[
					{
						required: true,
						message: '비밀번호를 다시 입력해주세요.',
					},
					({ getFieldValue }) => ({
						validator(rule, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}
							return Promise.reject('비밀번호가 일치하지 않습니다.');
						},
					}),
				]}>
				<Input.Password />
			</Form.Item>
			<Form.Item
				name="nickname"
				label={
					<span>
						닉네임
						<Tooltip title="닉네임은 화면에 표시됩니다.">
							<QuestionCircleOutlined />
						</Tooltip>
					</span>
				}
				rules={[
					{
						required: true,
						message: '닉네임을 입력해주세요.',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name="phone"
				label="핸드폰 번호"
				rules={[
					{
						required: true,
						message: '핸드폰 번호를 입력해주세요.',
					},
				]}>
				<Input type="number" addonBefore={prePhoneNumber} />
			</Form.Item>
			<Form.Item
				wrapperCol={{ offset: '8' }}
				name="agreement"
				valuePropName="checked"
				rules={[
					{
						validator: (rule, value) =>
							value
								? Promise.resolve()
								: Promise.reject('회원가입에 동의해주세요.'),
					},
				]}>
				<Checkbox>회원가입에 동의합니다.</Checkbox>
			</Form.Item>
			<Form.Item name="register" wrapperCol={{ offset: '9' }}>
				<Button type="primary" htmlType="submit">
					회원가입
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SignupForm;
