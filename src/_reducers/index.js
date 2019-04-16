import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { token } from './token.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  token
});

export default rootReducer;