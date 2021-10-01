import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <br />
      <h2 className="center">Login to continue!</h2>
      <div className="center">
        <button
          type="submit"
          className="ui button circular icon brown"
          onClick={loginWithRedirect}
        >
          <i className="ui sign-in icon"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
