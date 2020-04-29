import * as React from 'react';

import { StaticContext } from 'react-router';
import {
    BrowserRouter as Router,
    Link,
    Route,
    RouteComponentProps,
    RouteProps,
    useNavigate,
    withRouter,
} from 'react-router-dom';
const { useState } = React;
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" element={<Protected />} />
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
    },
};

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{' '}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push('/'));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    ),
);

const PrivateRoute: React.FunctionComponent<RouteProps> = ({ element, ...rest }) => {
    const navigate = useNavigate();

    if (!fakeAuth.isAuthenticated) {
        navigate('/login', { state: { from: rest.location } });
    }
    return <Route {...rest} render={props => React.createElement(element as React.FunctionComponent<any>, props)} />;
};

const Public: React.FunctionComponent<RouteComponentProps> = () => <h3>Public</h3>;
const Protected: React.FunctionComponent = () => <h3>Protected</h3>;

type Props = RouteComponentProps<{}, StaticContext, { from: { pathname: string } }>;

const Login: React.FunctionComponent<Props> = ({ location }) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const { from } = location.state || { from: { pathname: '/' } };
    const login = () => {
        fakeAuth.authenticate(() => {
            setRedirectToReferrer(true);
        });
    };

    const navigate = useNavigate();
    if (redirectToReferrer) {
        navigate(from);
    }

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
};

export default AuthExample;
