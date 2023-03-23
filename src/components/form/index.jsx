import { useState } from "react"

export const Form = ({listTransactions, setListTransactions, addNewFinancialData}) => {
    const [formData, setFormData] = useState({
        description: '',
        value: '',
        state: 'Entrada',
    })

    const submit = (event) => {
        event.preventDefault();
        addNewFinancialData(formData);
    }

    return (
        <form onSubmit={submit}>
            <fieldset>
                <label htmlFor='description' className="txt-01">
                    Descrição
                </label>
                <input type='text' value={formData.description} onChange={(event) => setFormData({...formData, description: event.target.value})} required></input>
                <span className="text-02">
                    Exemplo: Compra de roupas
                </span>
                <label htmlFor='value' className="txt-01">
                    Valor
                </label>
                <input type='number' value={formData.value} onChange={(event) => setFormData({...formData, value: event.target.value})} required></input>
                <label htmlFor="typeValue" className="txt-01">
                    Tipo de valor
                </label>
                <select value={formData.state} onChange={(event) => setFormData({...formData, state: event.target.value})} required>
                    <option value="Entrada">
                        Entrada
                    </option>
                    <option value="Saída">
                        Saída
                    </option>
                </select>
                <button type='submit' className="btn_insert-value">
                    Inserir valor
                </button>
            </fieldset>
        </form>
    )
}