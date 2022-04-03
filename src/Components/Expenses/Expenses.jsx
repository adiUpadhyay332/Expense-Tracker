//props parent hi transfer karega and expenses vhi props receive karega.
import React from 'react'
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {
                props.item.map(
                    expense => (

                    <ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount} />

                    )
                )
            }

        </Card>
    );
}

export default Expenses;