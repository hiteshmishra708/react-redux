import React, { useState, useEffect } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layouts/Layout';
import Home from './containers/Home/Home';
import ShowTodo from './containers/ShowTodo/ShowTodo';
import AddTodo from './containers/AddTodo/AddTodo';
import Header from './components/Header/Header';
import Siginup from './components/Signup/Siginup';
import Login from './components/Login/Login';
// import AuthenticatedRoute from "./hoc/AuthenticatedRoute";
// import UnauthenticatedRoute from "./hoc/UnauthenticatedRoute";


import Aux from './hoc/ux';
function App() {

  // const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      // await Auth.currentSession();
      // userHasAuthenticated(true);
    } catch (e) {
      alert(e);
    }
  }

  let auth = sessionStorage.getItem("auth") ? true : false;
  return (
    <div className="App">
      {auth ? (
        <Aux>
          <Header />
          <Layout>
            <Switch>
              <Route path="/addtodo" component={AddTodo} />
              <Route path="/signup" component={Siginup} />
              <Route path="/showtodo" component={ShowTodo} />
              <Route path="/Home" component={Home} />
            </Switch>
          </Layout>
        </Aux>
      ) :
        (<Layout>
            <Switch>
              <Route path="/" component={Login} />
            </Switch>
          </Layout>)
      }
    </div>
  );
}


export default App;