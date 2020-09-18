import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import {
	AllWrapper,
	Header,
	XButton,
	Global,
	SliderWrapper,
	ImageWrapper,
	PagesWrapper,
} from './styles';

const ZoomOn = ({ images, zoomOff }) => {
	const [page, setPage] = useState(0);
	const buttonRef = useRef();

	useEffect(() => {
		buttonRef.current.focus();
	}, []);

	const handleOnFocus = useCallback((e) => {
		buttonRef.current.focus();
	}, []);

	const handleOnClose = useCallback((e) => {
		if (e.key === 'Escape') {
			return zoomOff();
		}
	}, []);

	return (
		<AllWrapper onClick={handleOnFocus}>
			<Header>
				<div>상세 이미지</div>
				<XButton onKeyDown={handleOnClose} ref={buttonRef} onClick={zoomOff} />
			</Header>
			<Global />
			<SliderWrapper>
				<Slider
					infinite={true}
					slidesToScroll={1}
					slidesToShow={1}
					beforeChange={(current, next) => setPage(next)}
					arrows={false}>
					{images.map((v, i) => (
						<div key={i}>
							<ImageWrapper style={{ userSelect: 'none' }} src={v.src} />
						</div>
					))}
				</Slider>
				<PagesWrapper>{`${page + 1} / ${images.length}`}</PagesWrapper>
			</SliderWrapper>
		</AllWrapper>
	);
};

ZoomOn.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object.isRequired),
	zoomOff: PropTypes.func.isRequired,
};

export default ZoomOn;
