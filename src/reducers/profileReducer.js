import {
	GET_PROFILE,
	LIST_PROFILE
} from '../constants'

const initialState = {
	loading: false,
	twits: null,
	users:null
}

export default function (state = initialState, action) {
	switch(action.type) {
		case GET_PROFILE:
			return {
				...state,
				loading: false,
				twits: action.payload
			}
		case LIST_PROFILE:
			return {
				...state,
				loading: false,
				users: action.payload
			}
		default:
			return state
	}
}