import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.username);
  return (
    <div>
      <h3>welcome {userName}</h3>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};

export default WelcomeScreen;
