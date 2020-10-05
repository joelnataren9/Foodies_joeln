import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Foodies from '../pages/Foodies';
import Menu from '../pages/Menu';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Foodies}/>
        <Route exact path='/Menu' component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
