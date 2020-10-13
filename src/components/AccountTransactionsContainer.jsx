import React, { useEffect, useState } from 'react'
import { AccountTransactions } from "./AccountTransactions"
import { AccountTransactionsHeader } from "./AccountTransactionsHeader"
import { MainContainer } from '../styles'
import axios from 'axios';

export function AccountTransactionsContainer(props) {

    const [accountTransactions, setAccountTransactions] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/accounts/transactions/${props.location.accountNumber}`)
            .then(res => {
                const accountTransactions = res.data;
                setAccountTransactions(accountTransactions)
            })
    }, [props.location.accountNumber])

    return (
        <MainContainer className="accounts-header" >
            <AccountTransactionsHeader />
            {accountTransactions &&
                accountTransactions.map((accountTransaction, index) => (
                    <AccountTransactions accountTransaction={accountTransaction} key={index} />
                ))
            }
        </MainContainer>
    )
}