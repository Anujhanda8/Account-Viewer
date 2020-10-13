import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { AccountsContainer } from "../components/AccountsContainer"
import { AccountTransactionsContainer } from "../components/AccountTransactionsContainer"
import history from '../history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={AccountsContainer} />
        <Route path="/accountTransactions" exact component={AccountTransactionsContainer} />
      </Switch>
    </Router>
  );
}