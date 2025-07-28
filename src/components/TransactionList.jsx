import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  
  return (
    <div className="card history-section">
      <h3>
        <i className="fas fa-history"></i>
        Recent Transactions
      </h3>
      
      {transactions.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-receipt"></i>
          <h4>No transactions yet</h4>
          <p>Add your first transaction to get started</p>
        </div>
      ) : (
        <ul className='list'>
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction}/>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TransactionList