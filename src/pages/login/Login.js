import React, { useState } from "react";
import { Link } from "react-router-dom";
import makeAPICall from "../../config";
import { useHistory } from "react-router";

import { setAuth } from "../../Auth";

import styles from "../../assets/styles/Register.module.scss";

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
        history.push("/dashboard")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.container__form}>
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.container__form__register} border rounded p-1 text-center`}
          >
            Registration Form
          </legend>
          <form>
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
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
