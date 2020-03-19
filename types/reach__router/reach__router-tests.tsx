import * as React from 'react';
import { render } from 'react-dom';

import {
    Link,
    Location,
    LocationProvider,
    RouteComponentProps,
    Router,
    Redirect,
    useMatch
} from '@reach/router';

interface DashParams {
    id: string;
}

const Home = (props: RouteComponentProps) => <div>Home</div>;

const Dash = (props: RouteComponentProps<DashParams>) => (
    <div>Dash for item ${props.id}</div>
);

const NotFound = (props: RouteComponentProps) => <div>Route not found</div>;

const UseMatchCheck = (props: RouteComponentProps) => {
    const match = useMatch('/params/:one');
    return (
        <div>{match ? match.one : 'NO PATH PARAM' }</div>
    );
};

render(
    <Router className="my-class">
        <Router component="div">
            <Home path="/" />
        </Router>
        <Router component={Home}>
            <Home path="/" />
        </Router>
        <Home path="/" />
        <Dash path="/default/:id" />
        <UseMatchCheck path="/params/*" />
        <NotFound default />

        <Link to="/somepath" rel="noopener noreferrer" target="_blank" />
        <Redirect to="/somepath" replace={false} state={{ from: '/' }} />

        <Location>
            {context => (
                <>
                    <div>hostname is {context.location.hostname}</div>
                    <button onClick={(): Promise<void> => context.navigate('/')}>
                        Go Home
                    </button>
                </>
            )}
        </Location>
        <LocationProvider>
            {context => (
                <>
                    <div>hostname is {context.location.hostname}</div>
                    <button onClick={(): Promise<void> => context.navigate('/')}>
                        Go Home
                    </button>
                </>
            )}
        </LocationProvider>
    </Router>,
    document.getElementById('app-root')
);
