/**
* ACTIONS FOR LOGIN
**/

import {setUser} from './currentUser';
import matrixClient from '../utils/client';

export const START_LOGIN = 'START_LOGIN';
export const FAILED_LOGIN = 'FAILED_LOGIN';
export const IS_LOGGED = 'IS_LOGGED';

export const LOGOUT = 'LOGOUT';

const startLogin = () => {
	return {
		type: START_LOGIN,
		payload: {
			isLoading: true
		}
	};
};

const failedLogin = () => {
	return {
		type: FAILED_LOGIN,
		payload: {
			isLoading: false
		}
	};
};

const isLogged = () => {
	return {
		type: IS_LOGGED,
		payload: {
			isLoading: false,
			isLogged: true
		}
	};
};

const loggout = () => {
	return {
		type: LOGOUT
	};
};

export const makeLogin = (data) => {
	return dispatch => {
		dispatch(startLogin());

		const client = new matrixClient({baseUrl: 'https://192.168.0.103:8448'});

		return new Promise((resolve, reject) => {
			client.login('test', '123456', (err, data) => {
				if (err) {
					return reject(err);
				}
				resolve(data);
			});
		});

		// make request here

		// if ok
		// dispatch(isLogged());
		// dispatch(setUser(user));

		// if fail
		// dispatch(failedLogin());
	};
};