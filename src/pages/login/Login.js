import React, { useState } from "react";
import { Link } from "react-router-dom";
import makeAPICall from "../../utils/config";
import { useHistory } from "react-router";

import { setAuth } from "../../utils/Auth";

import styles from "../../assets/styles/Register.module.scss";
import logo from "../../assets/images/GetWalletsLogo.svg";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      email: inputValues.email,
      password: inputValues.password,
    };

    return makeAPICall({
      path: "users/auth/",
      method: "POST",
      payload: data,
    })
      .then((data) => {
        console.log(data);
        setAuth(data);
        setLoading(false);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.container__form}>
        <div className="container__image">
          <img
            src={logo}
            loading="lazy"
            width="150"
            alt=""
            style={{ margin: "auto" }}
          />
        </div>
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.container__form__register} border rounded p-1 text-center`}
          >
            Login Form
          </legend>
          <div className="form-group">
            <label htmlFor="inputForEmail">Email address</label>
            <span className="mandatory">*</span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              value={inputValues.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputForPassword">Password</label>
            <span className="mandatory">*</span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={inputValues.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={handleSubmit}
              disabled={!(inputValues.email && inputValues.password)}
            >
              {loading === true ? "Loading" : "Login"}
            </button>
            <button className="btn btn-link">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
