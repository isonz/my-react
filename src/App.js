import React from 'react';


import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {routes} from './route';


function App() {
  return (
      <div id="app">
          <BrowserRouter>
              { renderRoutes(routes)  }
          </BrowserRouter>
      </div>
  );
}

export default App;
