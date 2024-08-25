import { useEffect, useState } from 'react';
import styled from 'styled-components';
import OverviewComponent from './OverviewComponent';
import Transactions from './Transactions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  align-items: center;
  margin: 3rem 0 2rem;
  width: 100%;
`;

const HomeComponent = () => {
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const addTransaction = (payload) => {
    setTransactions([...transactions, payload]);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.forEach(({ type, amount }) => {
      if (type === "EXPENSE") {
        exp += amount;
      } else {
        inc += amount;
      }
    });
    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateBalance();
  }, [transactions]);

  return (
    <Container>
      <OverviewComponent addTransaction={addTransaction} expense={expense} income={income} />
      <Transactions transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;
