import React from 'react'
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig, loginRequest } from './authConfig'

import Homepage from './view/homepage'
import Login from './view/login'

function App(): JSX.Element {
  const msalInstance = new PublicClientApplication(msalConfig)

  return (
    <MsalProvider instance={msalInstance}>
      <AuthenticatedTemplate>
        <Homepage msalInstance={msalInstance} />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login msalInstance={msalInstance} loginRequest={loginRequest} />
      </UnauthenticatedTemplate>
    </MsalProvider>
  )
}

export default App
