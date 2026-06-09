import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Notifications from "./pages/Notifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <Link to="/">Notifications</Link>
        {" | "}
        <Link to="/priority">Priority Notifications</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={<Notifications />}
        />

        <Route
          path="/priority"
          element={<PriorityNotifications />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;