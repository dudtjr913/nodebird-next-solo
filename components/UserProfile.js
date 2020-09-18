import React, { useCallback, useState } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../reducers/user';

const UserProfile = () => {
	const dispatch = useDispatch();
	const onLogout = useCallback(() => {
		dispatch(LogoutAction);
	}, []);

	return (
		<Card
			actions={[
				<div key="twit">
					twit <br />0
				</div>,
				<div key="followings">
					followings <br />0
				</div>,
				<div key="followers">
					followers
					<br />0
				</div>,
			]}>
			<Card.Meta avatar={<Avatar>Yeong</Avatar>} title="Yeong" />
			<Button onClick={onLogout}>로그아웃</Button>
		</Card>
	);
};

export default UserProfile;
