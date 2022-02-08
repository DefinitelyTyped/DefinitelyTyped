import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

const CONST_ROUTE_ARRAY = ['/const-route-1', '/const-route-2'] as const;

const exhausted = (_: never): never => {
    throw new Error('unreachable');
};

const RouteExample = () => (
    <Switch>
        <Route
            path={'test-for-non-static-string' as string}
            render={route => {
                const { params } = route.match;
                const __shrug__: string | undefined = params.__shrug__;
                return <>{__shrug__}</>;
            }}
        />
        <Route
            path="/single/:id"
            render={route => {
                const { params } = route.match;
                const notDefined = params.notDefined; // $ExpectError
                const id: string = params.id;
                return <>{id}</>;
            }}
        />
        <Route
            path="/optional/:id?"
            render={route => {
                const { params } = route.match;
                const notDefined = params.notDefined; // $ExpectError
                const id: string | undefined = params.id;
                return <>{id}</>;
            }}
        />
        <Route
            path={['/abc/:id', '/xyz/:name']}
            render={route => {
                const { params } = route.match;

                const notDefined = params.notDefined; // $ExpectError
                const unionParams = params.id; // $ExpectError

                if ('id' in params) {
                    const id: string = params.id;
                    return <>{id}</>;
                }

                if ('name' in params) {
                    const name: string = params.name;
                    return <>{name}</>;
                }

                return exhausted(params);
            }}
        />
        <Route
            path={CONST_ROUTE_ARRAY}
        >
            Matches const array
        </Route>
        <Route
            path="/single/:id"
            children={route => {
                if (!route.match) return null;
                const { params } = route.match;
                const notDefined = params.notDefined; // $ExpectError
                const id: string = params.id;
                return <>{id}</>;
            }}
        />
        <Route
            path={['/abc/:id', '/xyz/:name']}
            children={route => {
                if (!route.match) return null;
                const { params } = route.match;

                const notDefined = params.notDefined; // $ExpectError
                const unionParams = params.id; // $ExpectError

                if ('id' in params) {
                    const id: string = params.id;
                    return <>{id}</>;
                }

                if ('name' in params) {
                    const name: string = params.name;
                    return <>{name}</>;
                }

                return exhausted(params);
            }}
        />
    </Switch>
);

// $ExpectType { batman: string; }
type signature = Parameters<NonNullable<Route<{}, '/:batman'>['props']['render']>>[0]['match']['params'];

export default RouteExample;
