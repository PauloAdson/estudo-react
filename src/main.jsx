import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global-styles.css";
import { Home } from "./templates/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
