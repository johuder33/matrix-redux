import {
	START_REQUEST_USER,
	FAILED_REQUEST_USER,
	SET_USER,
	UPDATE_USER
} from '../actions/currentUser';

import {LOGOUT} from '../actions/login';

const initialState = {
	isLoading: false,
	accessToken: null,
	homeServer: null,
	userId: null,
	refreshToken: null,
	deviceId: null
};

const currentUser = function(state = initialState, action){
	let newState = null;
	switch(action.type){
		case START_REQUEST_USER:
		case FAILED_REQUEST_USER:
			newState = {...state, ['isLoading']: action.payload.isLoading};
			break;
		case SET_USER:
			newState = {...state, ...action.payload};
			return newState;
			break;
		case UPDATE_USER:
			return state;
			break;
		case LOGOUT:
			return initialState;
			break;
		default:
			return state;
			break;
	};
};

export default currentUser;