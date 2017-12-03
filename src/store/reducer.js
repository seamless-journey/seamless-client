import { combineReducers } from 'redux';
import * as TYPES from './types';

function auth(state = null, { type, payload }) { 
  switch(type) { 
    case TYPES.AUTH: 
      return payload.key;
    default:
      return state
  }  
}

export default combineReducers({ auth });