import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Global = createGlobalStyle`
.slick-slide{
    display : inline-block;
}
`;

export const AllWrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 1000;
	text-align: center;
`;

export const SliderWrapper = styled.div`
	background-color: #23241f;
	display: flex;
	height: calc(100% - (50px));
	flex-direction: column;
	justify-content: center;
`;

export const Header = styled.div`
	background-color: white;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
`;

export const XButton = styled(CloseOutlined)`
	position: absolute;
	right: 2vw;
	cursor: pointer;
`;

export const ImageWrapper = styled.img`
	user-select: none;
`;

export const PagesWrapper = styled.div`
	position: absolute;
	width: 100%;
	bottom: 10px;
	color: white;
	font-size: 20px;
`;
