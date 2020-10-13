import React from 'react'
import {  Row } from 'react-flexbox-grid';
import { Wrapper, GridSection, GridText, CurrencyText, HeaderText } from '../styles'

export function AccountsHeader(props) {

    return (
        <div className="accounts-header">
            <Wrapper>
                <GridSection container spacing={10}>
                    <Row>
                        <GridText item xs={2}>
                            <HeaderText>Account Number</HeaderText>
                        </GridText>
                        <GridText item xs={2}>
                            <HeaderText>Account Name</HeaderText>
                        </GridText>
                        <GridText item xs={2}>
                            <HeaderText>Account Type</HeaderText>
                        </GridText>
                        <GridText item xs={2}>
                            <HeaderText>Balance Date</HeaderText>
                        </GridText>
                        <GridText item xs={1}>
                            <CurrencyText>Currency</CurrencyText>
                        </GridText>
                        <GridText item xs={3}>
                            <HeaderText>Opening Available Balance</HeaderText>
                        </GridText>
                    </Row>
                </GridSection>
            </Wrapper>
        </div>
    )
}
