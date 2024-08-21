import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-u213kjeag2ixlcp0.us.auth0.com"
        clientId="aIKvhqDlljGIl5k6SEUfiQDWtXwt3Lgq"
        authorizationParams={{
          redirect_uri: "http://localhost:5173/test",
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
