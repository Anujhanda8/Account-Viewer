import React, { useEffect, useState } from 'react'
import { AccountsHeader } from "./AccountsHeader"
import { Accounts } from "./Accounts"
import { MainContainer } from '../styles'
import axios from 'axios';

export function AccountsContainer() {

    const [accounts, setAccounts] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/accounts`)
            .then(res => {
                const accounts = res.data;
                setAccounts(accounts)
            })
    }, [])

    return (
        <MainContainer className="accounts-header" >
            <AccountsHeader />
            {accounts &&
                accounts.map((account, index) => (
                    <Accounts account={account} key={`account-${index}`} />
                ))
            }
        </MainContainer>
    )
}