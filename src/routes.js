import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import Dashboard from './components/Dashboard';
import Form from './components/Form'
import Header from './components/Header'


export default () => (
    <Grid container direction='row'>
      <Router>
      <Grid item lg={12} md={12} xs={12}>
        <Header />
      </Grid>
      <Grid item lg={12} md={12} xs={12} className='main' >
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
      </Grid>
      </Router>
    </Grid>
)