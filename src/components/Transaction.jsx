import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { formatCurrency, getCategoryIcon } from '../utils/formatters'

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    const isPositive = transaction.amount > 0;

    return (
      <li className={`transaction-item ${isPositive ? 'plus' : 'minus'} slide-in`}>
        <div className="transaction-content">
          <div className="transaction-icon">
            <i className={getCategoryIcon(transaction.text)}></i>
          </div>
          <div className="transaction-details">
            <h4>{transaction.text}</h4>
          </div>
        </div>
        
        <div className={`transaction-amount ${isPositive ? 'plus' : 'minus'}`}>
          {sign}{formatCurrency(Math.abs(transaction.amount))}
        </div>
        
        <button  
          onClick={() => deleteTransaction(transaction.id)} 
          className='delete-btn'
          aria-label="Delete transaction"
        >
          <i className="fas fa-times"></i>
        </button>
      </li>
    )
}

export default Transaction