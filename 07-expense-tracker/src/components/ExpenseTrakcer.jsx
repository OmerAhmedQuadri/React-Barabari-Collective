import { useEffect } from 'react'
import { useState } from 'react'

function ExpenseTrakcer() {
    // usestate() can take simple value or it can also take a callback to set initial value
    const [expenses, setexpenses] = useState(() => {
        const saved_expenses = JSON.parse(localStorage.getItem('EXPENSES_DB')) || []
        return saved_expenses
    })
    const [expName, setexpName] = useState('')
    const [expAmount, setexpAmount] = useState('')


    // useEffect(() => {
    //     const saved_expenses = JSON.parse(localStorage.getItem('EXPENSES_DB')) || []
    //     if(saved_expenses){
    //         setexpenses(saved_expenses)
    //     }
    // }, [])

    useEffect(() => {
        console.log('every re render')
    }, [])


    useEffect(() => {
        localStorage.setItem('EXPENSES_DB', JSON.stringify(expenses))
        console.log('expense updated')
    }, [expenses])



    const addExpenseToList = () => {
        if(expName.trim() == '') return
        const expAmt = Number(expAmount)
        if(isNaN(expAmt) || (expAmt <= 0)) return
        
        // if(expAmount<=0) return

        console.log('expense creatred')

        const newExpense = {
            id: Date.now(),
            name: expName.trim(),
            amount: Number(expAmount)
        }

        setexpenses([...expenses, newExpense])
        setexpAmount('')
        setexpName('')

        // localStorage.setItem('EXPENSES_DB', JSON.stringify(expenses))
    }


    const deleteExpense = (id) => {
        setexpenses(expenses.filter(exp => exp.id != id))
    }

    const total = expenses.reduce((total, exp) => total + exp.amount, 0)


  return (
    <div className='flex flex-col items-center justify-center gap-4 rounded-4xl w-full max-w-md border border-neutral-800 bg-neutral-900 p-5'>
        {/* Main heading */}
        <h1 className='text-2xl font-bold text-neutral-100'>Expense Tracker</h1>

        {/* Input container */}
        <div className='flex w-full flex-row items-center gap-3'>
            <input type='text' value={expName} 
                className='flex-1 rounded border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 outline-none focus:border-orange-500'
                onChange={e => setexpName(e.target.value)} placeholder='Expense name' 
            />

            <input type="number" value={expAmount} 
                className='w-24 rounded border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 outline-none focus:border-orange-500'
                onChange={e => setexpAmount(e.target.value)} placeholder='Amount' 
            />
            
            <button
                className='rounded bg-orange-500 px-4 py-2 font-semibold text-neutral-950 hover:bg-orange-400'
                onClick={addExpenseToList}
            >Add</button>
        </div>


        {/* Expenses Display */}
        {/* ul.innerHTML = '' */}
        <ul className='flex w-full flex-col gap-2'>
            {
                expenses.map( exp => (
                    <li
                        key={exp.id}
                        className='flex items-center justify-between gap-2 border border-neutral-800 px-3 py-2 text-neutral-100'
                    >
                        <span>{exp.name}</span>

                        <div className='flex items-center gap-3'>
                            <span>${exp.amount}</span>
                            <button 
                                onClick={() => deleteExpense(exp.id)}
                                className='rounded border border-neutral-700 px-3 py-1 text-sm font-semibold text-neutral-400 hover:border-orange-500 hover:text-orange-400'
                            >Delete</button>
                        </div>
                    </li>
                ))
            }
        </ul>

        <div className='flex w-full items-center justify-between border-t border-neutral-800 pt-3 text-xl font-bold text-neutral-300'>
            <span>Total: </span>
            <span>${total}</span>
        </div>

    </div>
  )
}

export default ExpenseTrakcer