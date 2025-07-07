import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthRegister from "./pages/auth/Register";
import AuthLogin from "./pages/auth/Login";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/*Common Components */}
      <h1>HEADER COMPONENTS</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
