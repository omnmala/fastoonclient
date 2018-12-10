import React, { Component } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import WebHeader from './components/webHeader';
import Home from './components/home';
import PostSeries from './components/postSeries';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import WebtoonDetail from './components/webtoonDetail';
import CurationWebtoon from './components/curationWebtoon';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">        
          <WebHeader />
          <main style={{ margin: '25px 25px 25px 25px' }}>
            <Container>
              <Switch>
                <Route
                  exact={true} path='/'
                  component={Home}
                />
                <Route
                  exact={true} path='/curating'
                  component={CurationWebtoon}
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
                  exact={true} path='/signin'
                  component={LoginForm}
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
