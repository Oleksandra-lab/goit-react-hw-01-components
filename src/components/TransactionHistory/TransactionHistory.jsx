import PropTypes from 'prop-types'
import { TransactionTable, TableHead, TableBody, HeadTitle, TableCell} from './TransactionHistory.styled'
const TransactionHistory = ({items}) => {
    return (
        <TransactionTable>
  <TableHead>
    <tr>
      <HeadTitle>Type</HeadTitle>
      <HeadTitle>Amount</HeadTitle>
      <HeadTitle>Currency</HeadTitle>
    </tr>
  </TableHead>

  <TableBody>
  {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </tr>
        ))}
  </TableBody>
</TransactionTable>
)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
}

export default TransactionHistory
