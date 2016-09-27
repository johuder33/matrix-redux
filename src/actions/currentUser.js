/**
* ACTIONS FOR ROOMS
**/

import {setError} from './error';

export const SET_USER = 'START_REQUEST_ROOM';
export const START_REQUEST_USER = 'START_REQUEST_USER';
export const FAILED_REQUEST_USER = 'FAILED_REQUEST_USER';
export const UPDATE_USER = 'UPDATE_USER';

const setUser = (user) => {
	return {
		type: SET_USER,
		payload: {
			user
		}
	};
};

const updateUser = (user) => {
	return {
		type: UPDATE_USER,
		payload: {
			user
		}
	};
};

const startRequestUser = () => {
	return {
		type: START_REQUEST_USER,
		payload: {
			isLoading: true
		}
	};
};

const failedRequestUser = () => {
	return {
		type: FAILED_REQUEST_USER,
		payload: {
			isLoading: false
		}
	};
};

const requestUser = () => {
	return dispatch => {
		dispatch(startRequestUser());

		// make request here to create room

		// if ok
		// dispatch(setRoom());

		// if fail
		// dispatch(failedRequestUser());
		// dispatch(setError(error));
	};
};