import React, { useCallback, useState } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLogged }) => {
	const onLogout = useCallback(() => {
		setIsLogged(false);
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
