import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./pages/home/App";
import Termos from "./pages/termos-privacidade/Termos";
import Politicas from './pages/termos-privacidade/politicas'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/termos" element={<Termos />} />
        <Route exact path="/politicas" element={<Politicas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
