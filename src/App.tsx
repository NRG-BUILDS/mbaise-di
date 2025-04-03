import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <Routes>
      <Route path="/news" element={<News />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
