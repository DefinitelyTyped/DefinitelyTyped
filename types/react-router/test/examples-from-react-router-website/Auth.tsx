import * as React from 'react';
import {
  BrowserRouter as Router,
  RouteComponentProps,
  RouteProps,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/protected" component={Protected}/>
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(this: any, cb: () => void) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(this: any, cb: () => void) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'));
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

const PrivateRoute: React.SFC<RouteProps> = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? React.createElement(component! as React.SFC<any>, props) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

const Public: React.SFC<RouteComponentProps> = () => <h3>Public</h3>;
const Protected: React.SFC<RouteComponentProps> = () => <h3>Protected</h3>;

class Login extends React.Component<RouteComponentProps, {redirectToReferrer: boolean}> {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      );
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;
