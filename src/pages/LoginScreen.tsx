// import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import LoginBtn from "../components/LoginBtn";

const DashBoard = () => {
  return (
    <>
      <Logo></Logo>
      {/* <Link className="text-xs text-[#CDBDFA]" to={"/test"}>
        Start tracking
      </Link> */}
      <LoginBtn></LoginBtn>
    </>
  );
};

export default DashBoard;
