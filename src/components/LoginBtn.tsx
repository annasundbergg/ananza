import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="bg-[#CDBDFA] p-1 px-2 m-2 text-sm hover:outline-[#9979f0] active:outline-[#9979f0]"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
