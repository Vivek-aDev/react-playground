import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  return (
    <div className="container">
      <div className="card">
        <h4>Verify OTP</h4>

        <input
          placeholder="Enter Otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <div className="countdown-text">
          <p>
            Time Remaining:
            <span style={{ fontWeight: 600 }}>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </p>

          <button
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
            }}
            onClick={resendOTP}
          >
            Resend Otp
          </button>
        </div>

        <button className="submit-btn">submit</button>
      </div>
    </div>
  );
}

export default App;
