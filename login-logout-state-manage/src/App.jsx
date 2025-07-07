import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import WelcomeScreen from "./components/WelcomeScreen";
import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <h1>Redux login/logout app</h1>

      {!isLoggedIn ? <LoginForm /> : <WelcomeScreen />}
    </>
  );
}

export default App;
