import * as Types from './../constants/ActionType';
import * as Messages from './../constants/Message';

var data = JSON.parse(localStorage.getItem('CART'));

var initialState = Messages.MSG_WELCOME;

const message = (state = initialState, action) => {
	switch (action.type) {

		default:
			return [...state];
	}
}

export default message;