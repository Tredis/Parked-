import {
	SET_RADIUS,
	SET_DURATION,
	SET_TIMING_TYPE,
	SET_PARKING_TYPE
} from '../constants';

var defaultState = {
	center:{lat:40.705189, long:-74.009209},
	radius:8, // blocks (20blks / mi)
	duration:120, //minutes
	//timelimit: 8am,
	timingType: "duration", //"limit"
	parkingType: "parking" //"standing","stopping"
}

export default function (prev = defaultState, action){
	switch (action.type){
		case SET_RADIUS: return Object.assign({}, prev, {radius: action.radius})
		case SET_DURATION: return Object.assign({}, prev, {duration: action.duration})
		case SET_TIMING_TYPE: return Object.assign({}, prev, {timingType: action.timingType})
		case SET_PARKING_TYPE: return Object.assign({}, prev, {parkingType: action.parkingType})
		default: return prev
	}
}