import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Home from './components/home/Home';
import Mission from './components/Mission';
import Blog from './components/Blog';
import Register from './components/Register';
import Browse from './components/browse/Browse';

function App() {
  return (
    <Router>
      <section>
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/blog" component={Blog} />
      </section>
      <Route exact path="/register" component={Register} />
      <Route exact path="/browse" component={Browse} />
    </Router>
  );
}

export default App;
