export const msalConfig = {
  auth: {
    clientId: `cb216348-899c-4810-bddd-8a8a033dabf8`,
    authority: `https://login.microsoftonline.com/3b68c6c1-04d4-4e86-875f-e48fa80b9529`,
    // redirectUri: `${process.env.REACT_APP_AAD_APP_REDIRECT_URI}`,
    // postLogoutRedirectUri: `${process.env.REACT_APP_AAD_APP_REDIRECT_URI}`,
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
}

export const loginRequest = {
  scopes: [],
}

export const protectedResources = {
  graphMe: {
    endpoint: 'https://graph.microsoft.com/v1.0/me',
    scopes: ['User.Read'],
  },
  functionApi: {
    endpoint: '/api/hello',
    scopes: [`api://cb216348-899c-4810-bddd-8a8a033dabf8/access_as_user`],
  },
}
