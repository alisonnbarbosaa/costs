import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "../../assets/image/costs_logo.png";

export default function Header() {
  return (
    <header className="bg-[#222] py-4">
      <nav className="flex justify-around items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className="flex justify-between items-center gap-8">
          <li className="text-[#f2f5f7] hover:text-[#ffbb33]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#f2f5f7] hover:text-[#ffbb33]">
            <Link to="/projects">Projetos</Link>
          </li>
          <li className="text-[#f2f5f7] hover:text-[#ffbb33]">
            <Link to="/company">Empresa</Link>
          </li>
          <li className="text-[#f2f5f7] hover:text-[#ffbb33]">
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
