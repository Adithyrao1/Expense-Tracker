import styled from 'styled-components';
import { useState } from 'react';
import './OverviewComponent.css'
const Container = styled.div `
display: flex;
flex-direction: column;
font-family: 'Raleway', sans-serif;
font-size: 1rem;
align-items: center;
margin: 1.5rem 0 1.5rem;
width: 100%;
`;
const BalanceBox = styled.div `
display:flex;
flex-direction:row;
justify-content: space-between;
text-align:center;
font-weight:700;
gap: 8rem;
`;
const AddTransaction = styled.div `
background: #4b6cb7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

color:white;
padding: 5px 10px;
border-radius:4px;
cursor: pointer;
font-weight:bold;
font-size: 15px;
margin-left:2rem;
text-align:center;
`;
const AddTransactionContainer = styled.div `
display:flex;
flex-direction:column;

gap:10px;
padding:15px 20px;
margin:10px 20px;
width: 100%;
& input {
    outline: none;
    padding:10px 12px;
    border: 1px solid transparent;
    border-radius: 1rem;
}
& input:active {
  border: 1px solid black;
}
`;

const Radiobox = styled.div `
display:flex;
flex-direction:row;
width:100%;
align-items:center;


`;
const AddTransactionView = (props) => {
    const [amount,setAmount] = useState();
    const [desc,setDesc] = useState();
    const [type,setType] = useState("EXPENSE");
    const addTransaction =  () => {
      props.addTransaction(
        {
          amount: Number(amount),
          desc,
          type,
          id: Date.now(),
        }
      );
       props.toggleAddTxn();
    }
    return (
      <AddTransactionContainer>
      <input 
      type ='number' 
      placeholder='Amount'
      value={amount}
      onChange = { (event) => setAmount(event.target.value)}
      />
      <input
       type='text' 
       placeholder='Description' 
       value={desc}
       onChange = {(event) => setDesc(event.target.value)}
       />
      <Radiobox> 
      <input type='radio' id='expense' name='type' value='EXPENSE' checked={type==="EXPENSE"} onChange={ (event) => setType(event.target.value) }/>
      <label htmlfor='expense'>Expense</label>
      <input type='radio' id='income' name='type' value='INCOME' checked={type==="INCOME"}  onChange={ (event) => setType(event.target.value) }/>
      <label htmlfor='income'>Income</label>
      </Radiobox>
      <AddTransaction style={{marginRight:'2rem'}} className='Addbutton' onClick={addTransaction}>Add Transaction</AddTransaction>
      </AddTransactionContainer>
    )
}
const ExpenseContainer = styled.div `
    display:flex;
    flex-direction:row;
    gap:12px;
    margin:20px;
`;
const ExpenseBox  = styled.div`
  background: #E3F6FF;
   display:flex;
   flex-direction:column;
   border-radius: 10px;
   border 1px solid #e6e8e9;
   padding:15px 20px;
   width:135px;
   & span {
    font-weight:bold;
    font-size:1.4rem;
    color: ${(props) => (props.isIncome ? 'green' : 'red')};
   }
`;
const OverviewComponent = (props) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(false);
    // function updateclick() {
    //     toggleAddTxn(true);
    // }
    return (
        <Container>
      <BalanceBox>
        Balance: ${props.income - props.expense}
         <AddTransaction className='Addbutton' onClick={()=> toggleAddTxn(!isAddTxnVisible)}>{ isAddTxnVisible ? "Cancel" : "ADD" }</AddTransaction>
      </BalanceBox>
      { isAddTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/> }
       <ExpenseContainer>
       <ExpenseBox isIncome={false}>
        Expense<span>${props.expense}</span>
       </ExpenseBox>
       <ExpenseBox isIncome={true}>
        Income<span>${props.income}</span>
       </ExpenseBox>
       </ExpenseContainer>
        </Container>
    )
}
export default OverviewComponent;