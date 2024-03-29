import { combineReducers } from 'redux';

import uiReducer from './uiReducer';

export default combineReducers<RootState>({
  ui: uiReducer,
});
