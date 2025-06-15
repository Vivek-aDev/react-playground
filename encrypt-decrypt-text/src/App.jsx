import { useState } from "react";
import "./App.css";
import CryptoJS from "crypto-js";

const SECRET_PASS = "XkhzG4fW2t2W";

function App() {
  const [screen, setScreen] = useState("encrypt");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [encryptedData, setEncryptedData] = useState("");
  const [decryptedData, setDecryptedData] = useState("");

  const switchScreen = (type) => {
    setScreen(type);
    setText("");
    setEncryptedData("");
    setDecryptedData("");
    setErrorMessage("");
  };

  function encryptData() {
    try {
      const data = CryptoJS.AES.encrypt(
        JSON.stringify(text),
        SECRET_PASS
      ).toString();
      setEncryptedData(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Encryption Failed, Please check your input.", error);
    }
  }

  function decryptData() {
    try {
      const bytes = CryptoJS.AES.decrypt(text, SECRET_PASS);
      const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setDecryptedData(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Decryption failed. Please check your input.", error);
    }
  }

  const handleClick = () => {
    if (!text) {
      setErrorMessage("Please Enter Some Text.");
      return;
    }

    if (screen === "encrypt") {
      encryptData();
    } else {
      decryptData();
    }
  };

  return (
    <div className="container">
      <div className="">
        <button
          className={`btn btn-left ${screen === "encrypt" ? "active" : ""}`}
          onClick={() => {
            switchScreen("encrypt");
          }}
        >
          Encrypt
        </button>
        <button
          className={`btn btn-right ${screen === "decrypt" ? "active" : ""}`}
          onClick={() => {
            switchScreen("decrypt");
          }}
        >
          Decrypt
        </button>
      </div>

      <div className="card">
        <textarea
          name=""
          id=""
          value={text}
          onChange={({ target }) => {
            setText(target.value);
          }}
          placeholder={
            screen === "encrypt" ? "Enter Your Text" : "Enter Encrypted Data"
          }
        />

        {errorMessage && <div className="error">{errorMessage}</div>}

        <button
          className={`btn submit-btn ${
            screen === "encrypt" ? "encrypt-btn" : "decrypt-btn"
          }`}
          onClick={handleClick}
        >
          {screen === "encrypt" ? "Encrypt" : "Decrypt"}
        </button>
      </div>

      {encryptData || decryptData ? (
        <div className="content">
          <label>
            {screen === "encrypt" ? "ENCRYPTED" : "DECRYPTED"} DATA{" "}
          </label>
          <p>{screen === "encrypt" ? encryptedData : decryptedData}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
