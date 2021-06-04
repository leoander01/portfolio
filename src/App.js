import React from 'react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

import { Route, Redirect, Switch, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          {/* SIDEBAR */}
          <div className="col-lg-3">
            <Sidebar />
          </div>

          {/* NAVBAR */}
          <div className="col-lg-9 app__main-content">
            <Navbar />

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects}>
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
