import React from "react";
import { Link } from "react-router-dom";

import styles from "../../assets/styles/Register.module.scss";

const Register = () => {
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
                id="inputForEmail"
                type="email"
                className="form-control"
                aria-describedby="Enter email address"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputForName">Your Name</label>
              <span className="mandatory">*</span>
              <input
                id="inputForName"
                type="text"
                className="form-control"
                aria-describedby="Enter your name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                className="form-control"
                id="inputForPassword"
                placeholder="Enter password"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <button className="btn btn-link">
                <Link to="/login">Cancel</Link>
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
