import { useNavigate, useLocation } from "react-router";
import { Outlet } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "./Context/Theme";

const Auth = () => {
  const location = useLocation();
  const { watch } = useContext(ThemeContext);

  console.log(watch);

  return <>{}</>;
};

export default Auth;
