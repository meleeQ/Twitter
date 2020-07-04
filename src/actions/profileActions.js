import axios from 'axios'
import {
	GET_PROFILE,
	LIST_PROFILE,
} from '../constants'

//get single user profile with tweets info
export const getUserProfile = (userId) => dispatch => {
	axios.get(`http://localhost:5000/api/users/${userId}`)
		.then(res => dispatch({
			type: GET_PROFILE,
			payload: res.data
		}))
		.catch(err => console.log(err))
}
// search users by name
export const searchUser = (searchData) => dispatch => {
	const name = searchData.name;
	axios.get(`http://localhost:5000/api/users/search/${name}`)
		.then(res => dispatch({
			type: LIST_PROFILE,
			payload: res.data
		}))
		.catch(err => console.log(err))
}
