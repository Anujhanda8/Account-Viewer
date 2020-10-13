import React from 'react'
import { Row } from 'react-flexbox-grid';
import { Wrapper, GridSection, GridText, CurrencyText, HeaderText } from '../styles'


export function AccountTransactionsHeader(props) {

    return (
        <div className="account-transactions-header">
            <Wrapper>
                <GridSection container spacing={10}>
                    <Row>
                        <GridText item xs={2}>
                            <HeaderText>Account Number</HeaderText>
                        </GridText>
                        <GridText item xs={2}>
                            <HeaderText>Account Name</HeaderText>
                        </GridText>
                        <GridText item xs={1}>
                            <CurrencyText>Value Date</CurrencyText>
                        </GridText>
                        <GridText item xs={1}>
                            <CurrencyText>Currency</CurrencyText>
                        </GridText>
                        <GridText item xs={1}>
                            <CurrencyText>Debit Amount</CurrencyText>
                        </GridText>
                        <GridText item xs={1}>
                            <CurrencyText>Credit Amount</CurrencyText>
                        </GridText>
                        <GridText item xs={1}>
                            <CurrencyText>Debit/Credit</CurrencyText>
                        </GridText>
                        <GridText item xs={3}>
                            <HeaderText>Transaction Narrative</HeaderText>
                        </GridText>
                    </Row>
                </GridSection>
            </Wrapper>
        </div>
    )
}
