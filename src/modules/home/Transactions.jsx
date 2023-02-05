import { useState } from 'react';
import styled from 'styled-components';
import {GiMoneyStack} from 'react-icons/gi'
import {AiOutlineCopyright} from 'react-icons/ai'
const Container = styled.div `
display: flex;
flex-direction: column;
font-family: 'Raleway', sans-serif;
font-size: 1rem;
align-items: flex-start;
margin-top: 1rem;
width:100%;
font-weight:bold;
& input {
    margin-top: 1rem;
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border:1px solid #e6e8e9;
    outline: none;
    width:100%;
}
`;
const Cell = styled.div`
margin-top: 0.5rem;
background: #F7F5EB;
display:flex;
gap:0.3rem;
flex-direction:column;
padding:10px 15px;
font-size:0.8rem;
width:97%;
border-radius:0.4rem;
border: 1px solid #e6e8e9;
align-item:center;
justify-Container: space-between;
border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};

`;
const TransactionCell = (props) => {
    return (
        <Cell isExpense = {props.payload.type === "EXPENSE"}>
            <span> {props.payload.desc}</span>
            <span> ${props.payload.amount} <GiMoneyStack style={{marginLeft:'90%',fontSize:'1.6rem'}}></GiMoneyStack></span>
        </Cell>
    )
}
const TransactionsComponent = (props) => {
    const[searchText,updateSearchText] = useState(props.transactions);

    const [filteredTransaction,updateTxn] = useState(props.transactions);
    return (
        <Container>
         Transactions
         <input placeHolder="Search" value={searchText}/>
         {props.filteredTransaction.length ? props.filteredTransaction.map((payload) => { return ( <TransactionCell payload={payload}></TransactionCell>)}) : ""}

        </Container>
    )
}
export default TransactionsComponent;