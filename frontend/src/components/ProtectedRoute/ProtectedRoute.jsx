import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  element: ProtectedHomeElement,
  loggedIn,
  ...props
}) {
  return loggedIn ? (
    <ProtectedHomeElement {...props} />
  ) : (
    <Navigate to={"/sign-in"} replace />
  );
}
