import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/verify";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user.hasOwnProperty("id")) {
    return <Navigate to="/" replace />;
  }

  return children;
}
