export default function Form(){
    return (
        <form className="flex flex-col gap-2">
            <label>
                Nome:
                <input type="text" placeholder="Insira o nome do projeto" />
            </label>
            <label>
                Orçamento: 
                <input type="number" placeholder="Insira o orçamento total" />
            </label>
            <label>
                Categoria:
                <select>
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </label>
            <button type="submit">Criar Projeto</button>
        </form>
    )
}