import React, { Fragment } from 'react';

import {BrowserRouter as Router} from "react-router-dom";

import AppRoute from './route/AppRoute';
const App = () => {
  return (
    <Fragment>
     <Router>
        <AppRoute />
      </Router>
      
    </Fragment>
  );
};

export default App;