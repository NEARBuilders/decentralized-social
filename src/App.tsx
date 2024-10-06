import { RouterProvider } from "@tanstack/react-router";
import AuthProvider from "./providers/auth-provider";
import { router } from "./router";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
