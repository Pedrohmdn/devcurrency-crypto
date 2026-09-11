import { Link } from "react-router";
import Logo from "../../assets/logo.svg";
import Styles from "./header.module.css";
export default function Header() {
  return (
    <header className={Styles.header}>
      <Link to={"/"}>
        <img src={Logo} alt="Logo devCurrency" />
      </Link>
    </header>
  );
}
