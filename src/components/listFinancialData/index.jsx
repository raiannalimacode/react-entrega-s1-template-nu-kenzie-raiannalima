import { Card } from "../card"

export const ListFinancialData = ({listTransactions, removeFinancialData}) => {
    return (
        <>   
            {
                listTransactions.length > 0 ? (
                    <ul>
                        {
                        listTransactions.map((financialData) => {
                            console.log(financialData);
                            return (
                            <Card key={financialData.id}
                            financialData = {financialData}
                            removeFinancialData = {removeFinancialData} />
                            )
                        })
                        }
                    </ul>
                ) : (
                    <p className="title-02">
                        Você ainda não possui nenhum lançamento.
                    </p>
                )
            }
      </>
    )
}