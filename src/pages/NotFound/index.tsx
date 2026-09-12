import { Link } from "react-router";
import Styles from "./notfound.module.css";

export default function NotFound() {
  return (
    <section className={Styles.wrapper}>
      <div className={Styles.container}>
        <span>404</span>
        <h2>Página Não encontrada</h2>
        <Link to={"/"} className={Styles.actionButton}>Voltar para Página inicial</Link>
      </div>
    </section>
  );
}
