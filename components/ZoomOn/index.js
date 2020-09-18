import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

const Global = createGlobalStyle`
.slick-slide{
    display : inline-block;
}
`;

const ZoomOn = ({ images, zoomOff }) => {
	return (
		<div
			style={{
				position: 'fixed',
				left: 0,
				top: 0,
				bottom: 0,
				right: 0,
				zIndex: 1000,
				textAlign: 'center',
			}}>
			<header
				style={{
					backgroundColor: 'white',
					width: '100%',
					height: '50px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '24px',
				}}>
				<div>상세 이미지</div>
				<CloseOutlined
					onClick={zoomOff}
					style={{
						position: 'absolute',
						right: '2vw',
						cursor: 'pointer',
					}}
				/>
			</header>
			<Global />
			<div style={{ backgroundColor: 'gray', height: '1000px' }}>
				<Slider
					infinite={true}
					slidesToScroll={1}
					slidesToShow={1}
					arrows={false}>
					{images.map((v, i) => (
						<div>
							<img key={i} src={v.src} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

ZoomOn.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object.isRequired),
	zoomOff: PropTypes.func.isRequired,
};

export default ZoomOn;
