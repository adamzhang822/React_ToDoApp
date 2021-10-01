import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="right center">
          <li>
            {!isUser && (
              <a onClick={loginWithRedirect}>Login / Signup With Google</a>
            )}
          </li>
          <li>
            {isUser && (
              <a
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                Logut
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
