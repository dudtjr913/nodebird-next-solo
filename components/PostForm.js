import React, { useCallback, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
	const inputRef = useRef();
	const dispatch = useDispatch();
	const handleOnSubmit = useCallback((e) => {
		console.log(e);
		dispatch(addPost);
	}, []);

	const handleOnFileUpload = useCallback(() => {
		inputRef.current.click();
	}, []);
	return (
		<Form onFinish={handleOnSubmit}>
			<Input.TextArea
				placeholder="오늘 무슨 일이 있었나요?"
				rows={4}></Input.TextArea>
			<input type="file" multiple hidden ref={inputRef} />
			<Button onClick={handleOnFileUpload}>이미지 업로드</Button>
			<Button style={{ float: 'right' }} type="primary" htmlType="submit">
				등록
			</Button>
		</Form>
	);
};

export default PostForm;
