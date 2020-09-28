import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Comment, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({ commentProps, id }) => {
	const [comment, setComment] = useState('');
	const dispatch = useDispatch();
	const { me } = useSelector((state) => state.user);

	const handleOnComment = useCallback((e) => {
		setComment(e.target.value);
	}, []);

	const commentOnSubmit = useCallback(() => {
		dispatch({
			type: ADD_COMMENT_REQUEST,
			data: {
				comment,
				nickname: me.nickname,
				id,
			},
		});
		setComment('');
	}, [comment]);

	return (
		<>
			{me && (
				<Form onFinish={commentOnSubmit}>
					<Input.TextArea
						value={comment}
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
	id: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
	commentProps: PropTypes.arrayOf(
		PropTypes.shape({
			nickname: PropTypes.string.isRequired,
			comment: PropTypes.string.isRequired,
		}),
	),
};

export default CommentForm;
