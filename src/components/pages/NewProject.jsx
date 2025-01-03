import Form from "./project/ProjectForm"

export default function NewProject() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-full">
      <h1 className="font-bold text-4xl">Criar Projeto</h1>
      <p className="text-[#7b7b7b]">Crie seus projetos para depois adicionar os serviços</p>
      <Form/>
    </section>
  )
}
