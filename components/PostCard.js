import React, { useState, useCallback } from 'react';
import { Card, Avatar, Popover, Button, Comment, Input, Form } from 'antd';
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
import CommentForm from './CommentForm';
import HashTagForm from './HashTagForm';

const PostCard = ({ post }) => {
	const { me } = useSelector((state) => state.user);
	const [liked, setLiked] = useState(false);
	const [comment, setComment] = useState(false);

	const CommentOnClick = useCallback(() => {
		setComment((prev) => !prev);
	}, []);

	const HeartOnClick = useCallback(() => {
		setLiked((prev) => !prev);
	}, []);

	return (
		<>
			<Card
				cover={post.Images && <PostImages images={post.Images} />}
				actions={[
					liked ? (
						<HeartTwoTone onClick={HeartOnClick} twoToneColor="#eb2f96" />
					) : (
						<HeartOutlined onClick={HeartOnClick} twoToneColor="#eb2f96" />
					),
					<CommentOutlined onClick={CommentOnClick} />,
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
				]}>
				<Card.Meta
					avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
					title={`${post.User.id}의 글`}
					description={
						post.User.content && <HashTagForm content={post.User.content} />
					}
				/>
			</Card>
			{comment && <CommentForm id={post.id} commentProps={post.Comments} />}
		</>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		User: PropTypes.shape({
			id: PropTypes.string,
			nickname: PropTypes.string,
			content: PropTypes.string,
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
