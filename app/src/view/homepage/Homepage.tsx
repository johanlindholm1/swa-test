import React from 'react'
import { PublicClientApplication } from '@azure/msal-browser'

type HomepageProps = {
  msalInstance: PublicClientApplication
}

const handleLogout = (instance: PublicClientApplication): void => {
  instance.logoutRedirect().catch((e: unknown) => {
    // eslint-disable-next-line no-console
    console.error(e)
  })
}

const Homepage: React.FC<HomepageProps> = ({ msalInstance }) => {
  return (
    <div>
      <h1>Homepage</h1>

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
          handleLogout(msalInstance)
        }}
      >
        logout
      </button>
    </div>
  )
}

export default Homepage
