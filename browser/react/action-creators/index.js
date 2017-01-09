import {browserHistory} from 'react-router';

import {
	SET_RADIUS,
	SET_DURATION,
	SET_TIMING_TYPE,
	SET_PARKING_TYPE,
	SET_CURRENT_USER
} from '../constants';

export const setCurrentUser = user =>
		({type: SET_CURRENT_USER, userInfo: {
			username: user.username,
			email: user.email
		}})

export const setRadius = radius => ({type: SET_RADIUS, radius})
export const setDuration = duration => ({type: SET_DURATION, duration})
export const setTimingType = timingType => ({type: SET_TIMING_TYPE, timingType})
export const setParkingType = parkingType => ({type: SET_PARKING_TYPE, parkingType})

// Thunks

export const signupAndGo = user => dispatch => {
  dispatch(setCurrentUser(user))
  browserHistory.push('/map')
}
