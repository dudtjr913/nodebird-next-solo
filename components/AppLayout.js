import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import {
	MailOutlined,
	AppstoreOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const InputWrapper = styled(Input.Search)`
	vertical-align: middle;
`;

const AppLayout = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	return (
		<>
			<Menu mode="horizontal">
				<Menu.Item key="main" icon={<MailOutlined />}>
					<Link href="/">
						<a>메인 화면</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="profile" icon={<AppstoreOutlined />}>
					<Link href="/profile">
						<a>프로필</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<InputWrapper
						placeholder="input search text"
						enterButton></InputWrapper>
				</Menu.Item>
				<Menu.Item key="signUp" icon={<SettingOutlined />}>
					<Link href="/signup">
						<a>회원가입</a>
					</Link>
				</Menu.Item>
				<br />
			</Menu>
			<Row gutter={10}>
				<Col xs={24} md={6}>
					{isLogged ? (
						<UserProfile setIsLogged={setIsLogged} />
					) : (
						<LoginForm setIsLogged={setIsLogged} />
					)}
				</Col>
				<Col xs={24} md={12}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					오른쪽 메뉴
				</Col>
			</Row>
		</>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
