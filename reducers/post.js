import shortId from 'shortid';
import faker from 'faker';

const initialState = {
	mainPosts: [
		{
			id: 1,
			User: {
				id: 'dudtjr913',
				nickname: '영석',
				content: '#해시태그 #오늘 #안에 ##가능#할까? 휴우 힘들다',
			},
			Comments: [
				{ nickname: '영석', comment: '무플방지 내가직접' },
				{ nickname: '슬기', comment: '나도 달아드림 ^^' },
			],
			Images: [
				{ src: 'https://velopert.com/wp-content/uploads/2016/03/react.png' },
				{
					src:
						'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
				},
				{
					src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
				},
				{
					src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
				},
				{
					src:
						'https://blog.kakaocdn.net/dn/PAkOZ/btqxwEMvpqH/iBiyldE1hv8avELugFhgYk/img.jpg',
				},
				{
					src:
						'https://media.vlpt.us/images/mtmin/post/1a9ed69e-db6c-41f3-8763-dd0f723ad1a5/react-redux.png',
				},
			],
		},
	],
};

const dummyData = () => ({
	id: shortId.generate(),
	User: {
		id: 'bak',
		nickname: '슬기',
	},
	Comments: [{ nickname: '영석', comment: '더미데이터' }],
	Images: [{ src: faker.image.image() }],
});

export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';

export const addPost = {
	type: ADD_POST,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				mainPosts: [dummyData(), ...state.mainPosts],
			};
		case ADD_COMMENT_REQUEST: {
			const mainPost = [...state.mainPosts];
			const index = mainPost.findIndex((v) => v.id === action.data.id);
			mainPost[index].Comments = [
				...mainPost[index].Comments,
				{ nickname: action.data.nickname, comment: action.data.comment },
			];
			return {
				...state,
				mainPosts: mainPost,
			};
		}
		default:
			return state;
	}
};

export default reducer;
