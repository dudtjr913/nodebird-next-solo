import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Comment, Avatar } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CommentForm = ({ commentProps }) => {
	const [comment, setComment] = useState(false);
	const [commentValue, setCommentValue] = useState('');
	const { me } = useSelector((state) => state.user);

	const handleOnComment = useCallback((e) => {
		setCommentValue(e.target.value);
	}, []);

	const commentOnSubmit = useCallback(() => {
		console.log(commentValue);
		setCommentValue('');
	}, [commentValue]);

	return (
		<>
			{me && (
				<Form onFinish={commentOnSubmit}>
					<Input.TextArea
						value={commentValue}
						onChange={handleOnComment}
						placeholder="댓글을 작성해주세요."
						rows={2}
					/>
					<Button
						htmlType="submit"
						type="primary"
						style={{ float: 'right', zIndex: '1000' }}>
						등록
					</Button>
				</Form>
			)}
			{commentProps.map((v) => (
				<Comment
					key={v.comment}
					avatar={<Avatar>{v.nickname[0]}</Avatar>}
					author={v.nickname}
					content={v.comment}
					style={{ borderBottom: '1px solid #e0e0e0' }}></Comment>
			))}
		</>
	);
};

CommentForm.propTypes = {
	commentProps: PropTypes.arrayOf(
		PropTypes.shape({
			nickname: PropTypes.string.isRequired,
			comment: PropTypes.string.isRequired,
		}),
	),
};

export default CommentForm;
