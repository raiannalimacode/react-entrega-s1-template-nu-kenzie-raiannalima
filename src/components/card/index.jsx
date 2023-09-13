export const Card = ({financialData, removeFinancialData}) => {
    
    return (
        <li style= {{borderLeft: financialData.state === 'Entrada' ? '4px solid var(--color-secondary-01)' : '4px solid var(--color-grey-02)'}}>
            <div className="card_title-state">
                <h3 className="title-01">
                    {financialData.description}
                </h3>
                <p className="txt-01"> 
                    {financialData.state}
                </p>
            </div>
            <div className="card_value-delete">
                <span className="txt-01">
                    R$ {financialData.value}
                </span>
                <button type="button" className="btn_delete" onClick={() => removeFinancialData(financialData.id)}>
                    Excluir
                </button>
            </div>
        </li>
    )
    
}
