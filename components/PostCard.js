import React, { useState, useCallback } from 'react';
import { Card, Avatar, Popover, Button } from 'antd';
import {
	CommentOutlined,
	HeartTwoTone,
	SettingOutlined,
	HeartOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import PropTypes, { number } from 'prop-types';

const PostCard = ({ post }) => {
	const { me } = useSelector((state) => state.user);
	const [liked, setLiked] = useState(false);
	const HeartOnClick = useCallback(() => {
		setLiked((prev) => !prev);
	}, []);
	return (
		<Card
			cover={post.Images[0] && <PostImages images={post.Images} />}
			actions={[
				liked ? (
					<HeartTwoTone onClick={HeartOnClick} twoToneColor="#eb2f96" />
				) : (
					<HeartOutlined onClick={HeartOnClick} twoToneColor="#eb2f96" />
				),
				<CommentOutlined />,
				<SettingOutlined />,
				<Popover
					content={
						<Button.Group>
							{me && post.User.id === me.id ? (
								<>
									<Button>수정</Button>
									<Button danger>삭제</Button>
								</>
							) : (
								<Button type="primary" danger>
									신고
								</Button>
							)}
						</Button.Group>
					}>
					<EllipsisOutlined />
				</Popover>,
			]}></Card>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		User: PropTypes.shape({
			id: PropTypes.string,
			nickname: PropTypes.string,
		}),
		Comments: PropTypes.arrayOf(
			PropTypes.shape({
				nickname: PropTypes.string,
				comment: PropTypes.string,
			}),
		),
		Images: PropTypes.arrayOf(
			PropTypes.shape({
				src: PropTypes.string,
			}),
		),
	}),
};

export default PostCard;
