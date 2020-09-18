import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ZoomOn from './ZoomOn';

const PostImages = ({ images }) => {
	const [zoom, setZoom] = useState(false);
	const ZoomOnClick = useCallback(() => {
		setZoom(true);
	}, []);
	const ZoomOffClick = useCallback(() => {
		setZoom(false);
	}, []);
	if (images.length === 1) {
		return (
			<>
				<img
					alt={images[0].src}
					style={{ maxWidth: '700px' }}
					src={images[0].src}
					onClick={ZoomOnClick}
					role="presentation"
				/>
				{zoom && <ZoomOn images={images} zoomOff={ZoomOffClick} />}
			</>
		);
	}
	if (images.length === 2) {
		return (
			<>
				<img
					style={{ display: 'inline-block', width: '50%' }}
					src={images[0].src}
					alt={images[0].src}
					onClick={ZoomOnClick}
					role="presentation"
				/>
				<img
					style={{ display: 'inline-block', width: '50%' }}
					src={images[1].src}
					alt={images[1].src}
					onClick={ZoomOnClick}
					role="presentation"
				/>
				{zoom && <ZoomOn images={images} zoomOff={ZoomOffClick} />}
			</>
		);
	}
	return (
		<>
			<img
				style={{ display: 'inline-block', width: '50%' }}
				src={images[0].src}
				alt={images[0].src}
				onClick={ZoomOnClick}
				role="presentation"
			/>
			<div
				onClick={ZoomOnClick}
				role="presentation"
				style={{
					display: 'inline-block',
					width: '50%',
					textAlign: 'center',
				}}>{`${images.length - 1}개의 사진 더보기`}</div>
			{zoom && <ZoomOn images={images} zoomOff={ZoomOffClick} />}
		</>
	);
};

PostImages.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default PostImages;
