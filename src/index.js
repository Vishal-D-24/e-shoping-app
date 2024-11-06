import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContextProvider from "./contextApi/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductContextProvider>
);
