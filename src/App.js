import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
