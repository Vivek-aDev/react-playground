import authReducer, { login, logout } from "./authSlice";
import { describe, it, expect } from "vitest";

describe("authSlice", () => {
  const initialState = {
    isLoggedIn: false,
    userName: "",
  };

  it("should return the initial State", () => {
    expect(authReducer(undefined, { type: "@@INIT" })).toEqual(initialState);
  });

  it("shoud handle login", () => {
    const nextState = authReducer(initialState, login("vivek"));
    expect(nextState).toEqual({ isLoggedIn: true, userName: "vivek" });
  });

  it("should handle logout", () => {
    const loggedInState = {
      isLoggedIn: true,
      userName: "vivek",
    };
    const nextState = authReducer(loggedInState, logout());
    expect(nextState).toEqual({
      isLoggedIn: false,
      userName: "",
    });
  });
});
