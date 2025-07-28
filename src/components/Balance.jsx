import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { formatCurrency } from '../utils/formatters'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc+=item),0);

  return (
    <div className="card balance-card">
      <h4>Your Balance</h4>
      <h1 className="balance-amount">{formatCurrency(total)}</h1>
    </div>
  )
}

export default Balance