import { NextUIProvider } from "@nextui-org/react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./app";

createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
