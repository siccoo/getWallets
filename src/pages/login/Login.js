import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="main">
      <section>
        <div className="container">
          <div className="login-content">
            <div className="login-image">
              {/* <div className="logo_holder">
                <header className="header">
                  <div className="login__logoHolder">
                    <img src="" alt="App logo" />
                    <p>SWIRGE</p>
                  </div>
                </header>
              </div> */}
              <figure className="figure_image_holder">
                <img src="" alt="hello shape" />
              </figure>
            </div>
            <div className="login-form">
              <h1><div className="form-title"><span className="wave">👋 </span>Welcome back!</div></h1>
              <form
                method="POST"
                className="register-form"
                id="login-form"
              >
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type={"text"}
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <div className="password-eye-div">
                    <label>Password</label>
                    <input
                      type={'password'}
                      placeholder="Password"
                    />
                    <span
                    //   className={
                    //     passwordType === "password"
                    //       ? "eye-slash"
                    //       : "eye-slash none"
                    //   }
                      onClick={() => console.log()}
                    >
                      <i className="fas fa-eye-slash"></i>
                    </span>
                    <span
                    //   className={passwordType === "text" ? "eye" : "eye none"}
                      onClick={() => console.log()}
                    >
                      <i className="far fa-eye"></i>
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="myCheckbox agree-term"
                    onClick={() => console.log()}
                  />
                  <label htmlFor="remember-me" className="agree-term">
                    <span> Keep me signed in </span>
                    <Link className="small" to="/reset">
                      {" "}
                      forgot password?{" "}
                    </Link>
                  </label>
                </div>
                <div className="form-group form-button">
                  <div className="form-group-button">
                    <button
                      type="submit"
                      variant="danger"
                      button_class="btn-form-submit"
                      size={"lg"}
                      onClick={() => console.log()}
                    >
                        Login
                    </button>
                  </div>
                </div>
              </form>
              <div className="alternative-footer">
                <div className="already_user">
                  <p>
                    {" "}
                    Don’t have an account?{" "}
                    <button className="page-toggle" onClick={() => console.log()}>
                      {" "}
                      Register{" "}
                    </button>{" "}
                  </p>
                </div>
                <div className="guidance">
                  <ul className="guidance_links">
                    <li>
                      <Link to="/terms"> Terms of use</Link>
                    </li>
                    <li>
                      <Link to="/supports"> Supports</Link>
                    </li>
                    <li>
                      <Link to="/privacy"> Privacy policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Login
