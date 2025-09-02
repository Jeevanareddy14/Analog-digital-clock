import "./index.css";
import App from "./App.jsx";
import StopWatch from "./components/StopWatch";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StopWatch />
  </StrictMode>,
)
