import React, { Component } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import WebHeader from './components/webHeader';
import Home from './components/home';
import PostSeries from './components/postSeries';
import RegisterForm from './components/registerForm';
import WebtoonDetail from './components/webtoonDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">        
          <WebHeader />
          <main style={{ margin: '1rem 0 1rem 16rem' }}>
            <Container>
              <Switch>
                <Route
                  exact={true} path='/'
                  component={Home}
                />
                <Route
                  exact={true} path='/postseries'
                  component={PostSeries}
                />
                <Route
                  exact={true} path='/register'
                  component={RegisterForm}
                />
                <Route
                  exact={true} path='/details/:title'
                  render={(props) => <WebtoonDetail {...props} />}
                />
              </Switch>
            </Container>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
