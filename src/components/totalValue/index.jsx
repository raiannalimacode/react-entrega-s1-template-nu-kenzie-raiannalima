export const TotalValue = ({listTransactions}) => {
    const total = listTransactions.reduce((acc, element) => {
        if (element.state === 'Entrada') {
            return acc + element.value;
        } else {
            return acc - element.value;
        }
    }, 0)
    return (
        <>
        {
            total > 0 ? (
                <div className="container_total-value">
                    <div>
                        <h3 className="title-01">
                            Valor total:
                        </h3>
                        <span className="text-04">
                            R$ {total.toFixed(2)}
                        </span>
                    </div>
                    <p className="txt-01">
                        O valor se refere ao saldo
                    </p>
                </div>
            ) : (
                <div></div>
            )
        } 
        </>
    )
}