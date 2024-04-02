import css from './TransactionHistoryItem.module.css'

export default function TransactionHistoryItem ({items}) {
    return (
            <tbody className={css.tableBody}>
            {items.map((item) => (
            <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>))}
            </tbody>
    )
}