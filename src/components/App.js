import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Foodies from '../pages/Foodies';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Foodies}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
