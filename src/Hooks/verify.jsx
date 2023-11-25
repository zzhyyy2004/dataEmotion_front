import { createContext, useContext, useState, useEffect } from "react";
import UserHTTPService from "../services/infraestructure/service/User";
import { redirect } from "react-router-dom";
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  async function signIn(email, password) {
    try {
      const response = await UserHTTPService.login(email, password);

      setUser(response.data[0]);

      const user = sessionStorage.setItem(
        "user",
        JSON.stringify(response.data[0])
      );

      window.location = "/home";
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    const user = sessionStorage.getItem("user");

    if (!!user) {
      setUser(JSON.parse(user));
      if (window.location.pathname === "/") {
        window.location = "/home";
      }
    }
  }, []);

  async function singOut() {
    sessionStorage.removeItem("user");
    setUser({});
    window.location = "/";
  }

  return (
    <AuthContext.Provider value={{ signIn, user, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
