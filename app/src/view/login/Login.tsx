import React from 'react'
import { PublicClientApplication, RedirectRequest } from '@azure/msal-browser'

type LoginProps = {
  msalInstance: PublicClientApplication
  loginRequest: RedirectRequest
}

const handleLogin = (
  instance: PublicClientApplication,
  loginRequest: RedirectRequest
): void => {
  instance.loginRedirect(loginRequest).catch((e: unknown) => {
    console.error(e)
  })
}

const Login: React.FC<LoginProps> = ({ msalInstance, loginRequest }) => {
  return (
    <div>
      <h1>Please login</h1>
      <button
        type="button"
        style={{
          height: '80px',
          width: '200px',
          fontSize: '2em',
          borderRadius: 10,
          alignSelf: 'center',
        }}
        onClick={() => {
          handleLogin(msalInstance, loginRequest)
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login
