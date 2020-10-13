import React from 'react'
import {  Row } from 'react-flexbox-grid';
import { ColumnContainer, GridSection, GridText, CurrencyText, DataText } from '../styles'
import { gotoPage } from '../history'

export function Accounts(props) {

    const handleClick = () => {
        gotoPage({
            pathname: '/accountTransactions',
            accountNumber: props.account.userAccountNumber
        })
    }

    const { account } = props
    return (
        <ColumnContainer className="accounts-header" onClick={handleClick}>
            <GridSection container spacing={10}>
                <Row>
                    <GridText item xs={2}>
                        <DataText>{account.userAccountNumber}</DataText>
                    </GridText>
                    <GridText item xs={2}>
                        <DataText>{account.accountName}</DataText>
                    </GridText>
                    <GridText item xs={2}>
                        <DataText>{account.accountType}</DataText>
                    </GridText>
                    <GridText item xs={2}>
                        <DataText>{account.balanceDate}</DataText>
                    </GridText>
                    <GridText item xs={1}>
                        <CurrencyText>{account.currency}</CurrencyText>
                    </GridText>
                    <GridText item xs={3}>
                        <DataText>{account.openingAvailableBalance}</DataText>
                    </GridText>
                </Row>
            </GridSection>
        </ColumnContainer>
    )
}