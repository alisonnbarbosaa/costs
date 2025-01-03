import { Link } from "react-router-dom";

export default function LinkBT({ to, text }) {
  return (
    <Link
      to={to}
      className="bg-[#222] p-2 text-[#f2f5f7] hover:text-[#ffbb33] duration-100"
    >
      {text}
    </Link>
  );
}
