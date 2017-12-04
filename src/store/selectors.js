

function getLocal(state) { 
  return state.local || {};
}

function getRemote(state) { 
  return state.remote || {};
}

export function isConnected(state) { 
  return state.status === 'CONNECTED';
}

export function isAuthenticated(state) { 
  return getLocal(state).auth;
}

export function getQuote(state) { 
  return getRemote(state).quote;
}