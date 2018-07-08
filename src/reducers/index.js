import { combineReducers } from 'redux'

import homeReducer from './../pages/Home/HomeReducer';

const rootReducer = combineReducers({
		home: homeReducer
});

export default rootReducer
