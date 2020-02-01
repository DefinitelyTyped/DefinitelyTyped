import * as React from 'react';
import { render } from 'react-dom';

import { Link, Location, LocationProvider, RouteComponentProps, Router, Redirect } from '@reach/router';

interface DashParams {
    id: string;
}

const Home = (props: RouteComponentProps) => <div>Home</div>;

const Dash = (props: RouteComponentProps<DashParams>) => <div>Dash for item ${props.id}</div>;

const WithLocationState = (props: RouteComponentProps<{}, { from: string }>) => (
    <div>I've got state.from = ${props.location!.state.from}</div>
);

const NotFound = (props: RouteComponentProps) => <div>Route not found</div>;

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
        <WithLocationState path="/with/state" />
        <NotFound default />

        <Link to="/somepath" rel="noopener noreferrer" target="_blank" />
        <Link to="/with/state" state={{ from: '/' }} />
        <Redirect to="/somepath" replace={false} state={{ from: '/' }} />

        <Location>
            {context => (
                <>
                    <div>hostname is {context.location.hostname}</div>
                    <button onClick={(): Promise<void> => context.navigate('/')}>Go Home</button>
                </>
            )}
        </Location>
        <LocationProvider>
            {context => (
                <>
                    <div>hostname is {context.location.hostname}</div>
                    <button onClick={(): Promise<void> => context.navigate('/')}>Go Home</button>
                </>
            )}
        </LocationProvider>
    </Router>,
    document.getElementById('app-root'),
);
