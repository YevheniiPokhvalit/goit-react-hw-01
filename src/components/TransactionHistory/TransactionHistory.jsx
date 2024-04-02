import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem.jsx";
import css from './TransactionHistory.module.css'

export default function TransactionHistory ({items}) {

    return (
        <table className={css.tableTransaction}>
            <thead className={css.tableHead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <TransactionHistoryItem items={items} />
        </table>

    );
}

