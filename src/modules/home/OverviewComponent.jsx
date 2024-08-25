import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  align-items: center;
  margin: 1.5rem 0 1.5rem;
  width: 40%;
`;

const BalanceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  font-weight: 700;
  gap: 8rem;
`;

const AddTransactionButton = styled.button`
  background: linear-gradient(to right, #182848, #4b6cb7);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  margin-left: 2rem;
  text-align: center;
  border: none;
`;

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  margin: 10px 20px;
  width: 100%;

  & input {
    outline: none;
    padding: 10px 12px;
    border: 1px solid transparent;
    border-radius: 1rem;
  }

  & input:focus {
    border: 1px solid black;
  }
`;

const Radiobox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const AddTransactionView = ({ addTransaction, toggleAddTxn }) => {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('EXPENSE');

  const handleAddTransaction = () => {
    addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    toggleAddTxn();
  };

  return (
    <AddTransactionContainer>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Radiobox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === 'EXPENSE'}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === 'INCOME'}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </Radiobox>
      <AddTransactionButton onClick={handleAddTransaction}>Add Transaction</AddTransactionButton>
    </AddTransactionContainer>
  );
};

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpenseBox = styled.div`
  background: #e3f6ff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  width: 135px;

  & span {
    font-weight: bold;
    font-size: 1.4rem;
    color: ${(props) => (props.isIncome ? 'green' : 'red')};
  }
`;

const OverviewComponent = ({ expense, income, addTransaction }) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);

  return (
    <Container>
      <BalanceBox>
        Balance: ${income - expense}
        <AddTransactionButton onClick={() => toggleAddTxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? 'Cancel' : 'ADD'}
        </AddTransactionButton>
      </BalanceBox>
      {isAddTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={addTransaction} />}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Expense<span>${expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>${income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverviewComponent;
