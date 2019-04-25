import { userConstants } from '../_constants';

export function token(state = null, action) {
  switch (action.type) {
    case userConstants.SET_TOKEN:
      return action.token;
    default:
      return state;
  }
}