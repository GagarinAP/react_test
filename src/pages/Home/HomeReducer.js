const initialState = {
		data: 'empty'
};// стартує з такими константами

const CHANGE_DATA = 'CHANGE_DATA';//константа екшена

export const onChangeData = data => ({ type: CHANGE_DATA, payload: data });// наш екшен

export default (state = initialState, action) => {
		switch (action.type) {
				case CHANGE_DATA:
						return { ...state, data: action.payload };// віддаєм новий стейт
				default:
						return state;
		}
};
