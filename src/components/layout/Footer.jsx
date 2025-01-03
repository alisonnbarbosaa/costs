import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-[#f2f5f7] py-4 flex flex-col justify-center items-center gap-4">
      <ul className="flex gap-4">
        <li className="hover:text-[#ffbb33] text-2xl">
          <FaFacebook />
        </li>
        <li className="hover:text-[#ffbb33] text-2xl">
          <FaInstagram />
        </li>
        <li className="hover:text-[#ffbb33] text-2xl">
          <FaLinkedin />
        </li>
      </ul>
      <p className="text-[#ffbb33]">
        <span>Costs</span> &copy;2025
      </p>
    </footer>
  );
}
