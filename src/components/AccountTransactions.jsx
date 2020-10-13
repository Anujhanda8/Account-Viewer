import React from 'react'
import {  Row } from 'react-flexbox-grid';
import { ColumnContainer, GridSection, GridText, CurrencyText, DataText } from '../styles'

export function AccountTransactions(props) {

    const { accountTransaction } = props
    return (
        <ColumnContainer className="accounts-transaction-header">
            <GridSection container spacing={10}>
                <Row>
                    <GridText item xs={2}>
                        <DataText>{accountTransaction.accountNumber}</DataText>
                    </GridText>
                    <GridText item xs={2}>
                        <DataText>{accountTransaction.accountName}</DataText>
                    </GridText>
                    <GridText item xs={1}>
                        <CurrencyText>{accountTransaction.valueDate}</CurrencyText>
                    </GridText>
                    <GridText item xs={1}>
                        <CurrencyText>{accountTransaction.currency}</CurrencyText>
                    </GridText>
                    <GridText item xs={1}>
                        <CurrencyText>{accountTransaction.debitAmount}</CurrencyText>
                    </GridText>
                    <GridText item xs={1}>
                        <CurrencyText>{accountTransaction.creditAmount}</CurrencyText>
                    </GridText>
                    <GridText item xs={1}>
                        <CurrencyText>{accountTransaction.transactionType}</CurrencyText>
                    </GridText>
                    <GridText item xs={3}>
                        <DataText>{accountTransaction.transactionNarrative}</DataText>
                    </GridText>
                </Row>
            </GridSection>
        </ColumnContainer>
    )
}