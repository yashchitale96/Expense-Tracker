import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { formatCurrency } from '../utils/formatters'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc+=item), 0);

  const expense = Math.abs(amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0));

  return (
    <div className='inc-exp-container'>
      <div className='inc-exp-card income'>
        <h4>
          <i className="fas fa-arrow-up"></i>
          Income
        </h4>
        <p className='money plus'>{formatCurrency(income)}</p>
      </div>

      <div className='inc-exp-card expense'>
        <h4>
          <i className="fas fa-arrow-down"></i>
          Expense
        </h4>
        <p className='money minus'>{formatCurrency(expense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses