import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'

const LoginScreen = (props) => {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-container">
          <h2 className="login-container__heading">Welcome</h2>
          <div className="login-container__btns">
            <button>
              <>
                <GitHubIcon style={{ fontSize: 30 }} />
                <strong>Log in with Github</strong>
              </>
            </button>
            <button>
              <FacebookIcon style={{ fontSize: 30 }} />
              <strong>Log in with Facebook</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginScreen
