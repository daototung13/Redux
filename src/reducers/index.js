import toggle from './toggle';
import status from './student';

import {combineReducers} from 'redux';

const myReducer = combineReducers({
  toggle,
  status
});
export default myReducer
