import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        
        if (!text.trim() || !amount) {
            alert('Please fill in all fields');
            return;
        }

        setIsLoading(true);

        // Simulate API call delay for better UX
        setTimeout(() => {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text: text.trim(),
                amount: +amount,
                timestamp: new Date()
            }

            addTransaction(newTransaction);
            setText('');
            setAmount('');
            setIsLoading(false);
        }, 300);
    }

    return (
        <div className="card form-section">
            <h3>
                <i className="fas fa-plus-circle"></i>
                Add New Transaction
            </h3>
            
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="text">Description</label>
                    <div className="input-group">
                        <i className="fas fa-tag"></i>
                        <input 
                            type="text" 
                            id="text"
                            value={text} 
                            onChange={(e) => setText(e.target.value)} 
                            placeholder='Enter description...'
                            maxLength="50"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <div className='form-control'>
                    <label htmlFor="amount">Amount</label>
                    <div className="input-group">
                        <i className="fas fa-dollar-sign"></i>
                        <input 
                            type="number" 
                            id="amount"
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)} 
                            placeholder='Enter amount...'
                            step="0.01"
                            disabled={isLoading}
                        />
                    </div>
                    <small>Use negative values for expenses (e.g., -50) and positive for income (e.g., 1000)</small>
                </div>

                <button 
                    className='btn' 
                    type="submit"
                    disabled={isLoading || !text.trim() || !amount}
                >
                    {isLoading ? (
                        <>
                            <i className="fas fa-spinner fa-spin"></i>
                            Adding...
                        </>
                    ) : (
                        <>
                            <i className="fas fa-plus"></i>
                            Add Transaction
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

export default AddTransaction