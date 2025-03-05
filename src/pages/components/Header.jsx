import "./Header.css";
import { Link } from "react-router-dom";
import { ContatoHeader } from "../../pixelService";

export default function Header() {
  const SendPixel = () => {};
  return (
    <header id="header">
      <div className="items-central">
        <a
          style={{ textDecoration: "none" }}
          href="https://wa.me/553298696380?text=Ol%C3%A1%20Matheus,%20tenho%20interesse%20em%20escalar%20meu%20neg%C3%B3cio%20com%20intelig%C3%AAncia%20artificial"
          target="_blank"
          onClick={ContatoHeader}
        >
          <div className="item-central">
            <p>Contato</p>
          </div>
        </a>
        <div className="item-central">
          <Link style={{ textDecorationLine: "none" }} to="/termos-privacidade">
            <p>Termos de uso</p>
          </Link>
        </div>
        <div className="item-central">
          <Link style={{ textDecorationLine: "none" }} to="/termos-privacidade">
            <p>Politicas de privacidade</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
