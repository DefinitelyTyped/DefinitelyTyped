import * as React from 'react';
import {
    Router,
    Route,
    Link,
    Switch,
    useRouter,
    useRoute,
    useLocation,
    Redirect,
} from 'wouter';

const Inbox = () => <h1>Inbox</h1>;
const BaseTest = () => (
    <div className="app">
        <Link href="/users/alex">
            <a className="link">Profile</a>
        </Link>
        <Link to="/about">
            <a className="link">About Us</a>
        </Link>
        <Link href="/inbox" onClick={() => console.log('navigated to /inbox')}>
            <a className="link">Inbox</a>
        </Link>

        <Router>
            <Route path="/about">About Us</Route>
            <Route path="/users/:name">
                {(params) => <div>Hello, {params && params.name}!</div>}
            </Route>
            <Route path="/inbox" component={Inbox} />
        </Router>
    </div>
);

const SwitchTest = () => (
    <Switch>
        <Route path="/a">A</Route>
        <Route path="/b">B</Route>
        <Route path="/c">C</Route>
    </Switch>
);

const UseRouteTest = () => {
    const [match, params] = useRoute('/users/:name');

    if (!match) return null;

    return <div>Welcome, {params && params.name}!</div>;
};

const UseRouterTest = () => {
    const {history, matcher} = useRouter();
    const [path] = useLocation();
    const [match, params] = matcher("/users/:name", path);

    if (!match) return null;

    return (
        <div>
            <div>Your name is {params && params.name}</div>
            <div onClick={() => history.push('/orders')}>Orders</div>
        </div>
    );
};

const useLocationTest = () => {
    const [location, navigate] = useLocation();

    return (
        <div>
            <div>Current location: {location}</div>
            <div onClick={() => navigate('/home')}>Home</div>
        </div>
    );
};

<Redirect to="/users" />;
