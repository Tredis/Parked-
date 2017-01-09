import {combineReducers} from 'redux';
import settingsReducer from './settings-reducer';
import userReducer from './user-reducer';

export default combineReducers({
  settings: settingsReducer,
  user: userReducer
});


