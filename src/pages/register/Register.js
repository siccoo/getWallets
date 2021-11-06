import React, { useState } from "react";
import { Link } from "react-router-dom";
import makeAPICall from "../../config";
import { useHistory } from "react-router";

import { setAuth } from "../../utils/Auth";

import styles from "../../assets/styles/Register.module.scss";

const Register = () => {
    const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    organization_name: "",
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

    setLoading(true)

    const data = {
      email: inputValues.email,
      organization_name: inputValues.organization_name,
      password: inputValues.password,
    };

    return makeAPICall({
      path: "users",
      method: "POST",
      payload: data,
    })
      .then((data) => {
        console.log(data);
        setAuth(data)
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
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.container__form__register} border rounded p-1 text-center`}
          >
            Registration Form
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
              <label htmlFor="inputForName">Organiztion Name</label>
              <span className="mandatory">*</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your organization name"
                value={inputValues.organization_name}
                onChange={handleChange}
                name="organization_name"
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
                disabled={
                  !(
                    inputValues.email &&
                    inputValues.organization_name &&
                    inputValues.password
                  )
                }
              >
                {loading === true ? "Loading" : "Submit"}
              </button>
              <button className="btn btn-link">
                <Link to="/login">Cancel</Link>
              </button>
            </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
