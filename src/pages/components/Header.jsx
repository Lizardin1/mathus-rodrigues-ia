import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header id="header">
      <div className="items-central">
        <div className="item-central">
          <p>Contato</p>
        </div>
        <div className="item-central">
          <Link style={{textDecorationLine: "none"}} to="/termos-privacidade">
            <p>Termos de uso</p>
          </Link>
        </div>
        <div className="item-central">
          <Link style={{textDecorationLine: "none"}} to="/termos-privacidade">
            <p>Politicas de privacidade</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
