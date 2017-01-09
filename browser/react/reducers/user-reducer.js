import {
	SET_CURRENT_USER,
	UPDATE_EMAIL,
	UPDATE_USERNAME
} from '../constants';

var defaultState = {
	username: '',
	email: ''
}

export default function (prev = defaultState, action){
	switch (action.type){
		case SET_CURRENT_USER:
			return Object.assign({}, prev, action.userInfo)
		case UPDATE_EMAIL:
			return Object.assign({}, prev, {email: action.email})
		case UPDATE_USERNAME:
			return Object.assign({}, prev, {username: action.username})
		default: return prev
	}
}