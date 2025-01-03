import Savings from "../../assets/image/savings.svg";
import LinkBT from "../layout/LInkBT";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center w-full py-8 gap-4">
      <h1 className="font-bold text-4xl">
        Bem-vindo ao <span className="text-[#ffbb33] bg-[#222] p-2">Costs</span>
      </h1>
      <p className="text-[#7b7b7b]">
        Comece a gerenciar seus projetos agora mesmo!
      </p>
      <LinkBT to="/newproject" text="Criar Projeto" />
      <img src={Savings} alt="savings" className="w-[350px]" />
    </section>
  );
}
