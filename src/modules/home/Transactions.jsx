import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GiMoneyStack } from 'react-icons/gi';
import { AiFillDelete } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  align-items: flex-start;
  margin-top: 1rem;
  width: 40%;
  font-weight: bold;

  & input {
    margin-top: 1rem;
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
  }
`;

const Cell = styled.div`
  margin-top: 0.5rem;
  background: #f7f5eb;
  display: flex;
  gap: 0.3rem;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 0.8rem;
  width: 97%;
  border-radius: 0.4rem;
  border: 1px solid #e6e8e9;
  align-items: center;
  justify-content: space-between;
  border-right: 4px solid ${(props) => (props.isExpense ? 'red' : 'green')};
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TransactionCell = (props) => {
  const { desc, amount, id, type } = props.payload;
  return (
    <Cell isExpense={type === 'EXPENSE'}>
      <TransactionDetails>
        <span>{desc}</span>
        <span style={{ marginLeft: 'auto' }}>
          ${amount}{' '}
          <GiMoneyStack
            style={{ marginLeft: '10px', fontSize: '1.6rem' }}
          />
        </span>
      </TransactionDetails>
    </Cell>
  );
};

const TransactionsComponent = (props) => {
  const [searchText, setSearchText] = useState('');
  const [filteredTransaction, setFilteredTransaction] = useState(props.transactions);

  useEffect(() => {
    const filtered = props.transactions.filter((transaction) =>
      transaction.desc.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTransaction(filtered);
  }, [searchText, props.transactions]);
  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {filteredTransaction.length ? (
        filteredTransaction.map((payload) => (
          <TransactionCell key={payload.id} payload={payload} />
        ))
      ) : (
        <span style={{ marginTop: '30px' }}>No transactions found</span>
      )}
    </Container>
  );
};

export default TransactionsComponent;
