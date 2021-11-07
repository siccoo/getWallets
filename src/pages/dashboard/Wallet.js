import React, { useState, useEffect } from "react";
import Topbar from "../../components/dashboard/misc/Topbar";
import Sidebar from "../../components/dashboard/misc/Sidebar";
import makeAPICall from "../../utils/configtwo";

import "../../assets/styles/Transaction.scss";

const Wallet = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showWallet, setShowWallet] = useState(false);
  const [table, setTable] = useState(false);
  const [walletItems, setWalletItems] = useState([]);
  const [inputValues, setInputValues] = useState({
    customer_email: "",
  });

  const getWallets = () => {
    return makeAPICall({
      path: "wallets",
      method: "GET",
    })
      .then((data) => {
        setWalletItems(data.data);
        setTable(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (showWallet === true) {
      getWallets();
    }
  }, [showWallet]);

  useEffect(() => {
    getWallets();
  }, []);

  function handleChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  const getTransactionDetails = (item) => {
    return makeAPICall({
      path: `transactions/wallets/${item.wallet_id}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const list = walletItems.map((walletItem, index) => {
    return (
      <tr key={index} onClick={() => getTransactionDetails(walletItem)}>
        <td>{walletItem.status}</td>
        <td>{walletItem.customer_email}</td>
        <td>{walletItem.wallet_id}</td>
        <td>{walletItem.balance}</td>
        <td>{walletItem.created_at}</td>
      </tr>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      customer_email: inputValues.customer_email,
    };

    return makeAPICall({
      path: "wallets",
      method: "POST",
      payload: data,
    })
      .then((data) => {
        // console.log(data);
        setSuccess("Wallet created successfully...");
        setLoading(false);
        setShowWallet(true);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };
  return (
    <div className="page-control">
      <Topbar />
      <div className="i-dashboard-row">
        <Sidebar />
        <div className="i-dashboard-content">
          <div className="history-heading">
            <div className="i-power-history-header">Wallet List</div>
            <div>
              <span className="i-power-search-field"> Fund your wallet</span>
            </div>
          </div>
          <p>{error && error}</p>
          <p>{success && success}</p>
          <div className="content-form-div">
            <div>
              <div className="i-power-form-rol">
                <div className="i-power-form-col">
                  <div className="form-col-label">
                    Customer <span className="form-col-spotlight">Email</span> ?{" "}
                    <span className="form-col-required">*</span>
                  </div>
                  <input
                    type="email"
                    className="i-power-form-textfield w-input"
                    name="customer_email"
                    value={inputValues.customer_email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="i-power-form-rol">
                <div className="i-power-form-col i-btn">
                  <button onClick={handleSubmit} className="i-power-button">
                    {loading === true ? "Loading" : "Create Wallet"}
                  </button>
                </div>
                <div className="i-power-form-col _2"></div>
              </div>
            </div>
          </div>
          <div className="history-table">
            {table && (
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Customer Email</th>
                    <th>Wallet ID</th>
                    <th>Balance</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>{list}</tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
