<<<<<<< HEAD
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"

function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name"
                placeholder="Insira o nome do projeto"/>
            <Input type="number" text="orçamento total" name="name"
                placeholder="Insira o orçamento total"/>
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText} />
        </form>
    )
}

=======
function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>
        </form>
    )
}

>>>>>>> origin/main
export default ProjectForm