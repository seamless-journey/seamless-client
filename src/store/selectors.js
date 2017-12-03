

export function isConnected(state) { 
  return state.status === 'CONNECTED';
}

export function isAuthenticated(state) { 
  return state.local.auth;
}

export function getQuote(state) { 
  console.log('getQuote', JSON.stringify(state));
  return state.remote.quote;
}