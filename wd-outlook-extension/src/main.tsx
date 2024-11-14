import { StrictMode } from "react";
import App from "./App.tsx";
import { observeSelectedMessage } from "./utils/observer.ts";
import { connectToBackground } from "./utils/background-connection.ts";
import { createRoot } from "react-dom/client";
import { SELECTOR } from "./lib/consts.ts";

observeSelectedMessage();

connectToBackground();

createRoot(document.getElementById(SELECTOR.WD_EXTENSION_CONTAINER_ID)!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
