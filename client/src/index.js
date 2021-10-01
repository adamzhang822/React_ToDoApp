import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = "dev-4rn09kg0.us.auth0.com";
const CLIENT_ID = "GUdNcemRfLZoeMTFO7bg0AyubHfUgDAs";

ReactDom.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.querySelector("#root")
);
