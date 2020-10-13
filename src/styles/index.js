import { Grid, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

export const MainContainer = styled.section`
    border: 1px solid black;
    background: white;
    width: 80%;
    margin-top: 80px;
    margin-left: 140px;
`;

export const Wrapper = styled.section`
    border: 1px solid black;
    background: #cad1d9;
`;

export const HeaderText = styled.section`
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    padding-left: 30px;
`;

export const DataText = styled(HeaderText)`
    font-size: 12px;
`;

export const GridSection = styled(Grid)`
    height: 50px
`;

export const GridText = styled(Col)`
    padding-top: 10px;
`;

export const CurrencyText = styled(HeaderText)`
    font-size: 12px;
    text-align: center;
    padding-left: 0px;
`;

export const ColumnContainer = styled.button.attrs({
    type: 'button',
    role: 'link',
})
`
    color: inherit;
    cursor: pointer;
    text-decoration: inherit !important;
    outline: none;
    background: transparent;
    border: none;
    border-bottom: 0.5px solid black;
    display: block;
    width: 100%;
`