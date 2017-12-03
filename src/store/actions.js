import * as TYPES from './types';

let apikey = null;

export function generate() {
  return { 
    apikey,
    type: TYPES.GENERATE,
  };
}

export function auth(key) {
  apikey = key;
  return { 
    type: TYPES.AUTH,
    payload: { key },
  };
}

