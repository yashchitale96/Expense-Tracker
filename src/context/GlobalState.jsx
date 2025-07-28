import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// Inital State
const initialState = {
    transactions: [
        {id: 1, text: 'Salary', amount: 3000, timestamp: new Date('2025-01-20')},
        {id: 2, text: 'Grocery Shopping', amount: -120, timestamp: new Date('2025-01-22')},
        {id: 3, text: 'Gas', amount: -50, timestamp: new Date('2025-01-23')},
        {id: 4, text: 'Freelance Project', amount: 800, timestamp: new Date('2025-01-25')},
        {id: 5, text: 'Restaurant Dinner', amount: -75, timestamp: new Date('2025-01-26')}
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
    {children}</GlobalContext.Provider>)
}

/*
    

*/