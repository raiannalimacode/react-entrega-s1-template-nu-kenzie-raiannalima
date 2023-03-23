import { useState } from 'react'

import './styles/globalStyles.css'
import './styles/texts.css'

import { Header } from './components/header'
import { Form } from './components/form'
import { TotalValue } from './components/totalValue'
import { ListFinancialData } from './components/listFinancialData'

import { v4 as uuidv4 } from 'uuid';

function App () {

  const [listTransactions, setListTransactions] = useState ([])

  const addNewFinancialData = (formData) => {
    const newFinancialData = {
      ...formData, id: uuidv4(), value: Number(formData.value)
    }
    setListTransactions([...listTransactions, newFinancialData]);
  }

  const removeFinancialData = (id) => {
    const newFinancialData = listTransactions.filter((element) => element.id !== id);
    setListTransactions(newFinancialData);
  }

  return (
    <div>
      <Header/>
      <div className="App container">
        <div className="form_side">
          <Form addNewFinancialData={addNewFinancialData}/>
          <TotalValue listTransactions={listTransactions}/>
        </div>
        <div className="financial-summary_side">
          <h2 className='title-01'>
            Resumo financeiro
          </h2>
          <ListFinancialData listTransactions={listTransactions} removeFinancialData={removeFinancialData}/>
        </div>
      </div>
    </div>
  )
}

export default App

