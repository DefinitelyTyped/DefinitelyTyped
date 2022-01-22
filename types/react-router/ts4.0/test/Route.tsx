import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

const CONST_ROUTE_ARRAY = ['/const-route-1', '/const-route-2'] as const;

const exhausted = (_: never): never => {
    throw new Error('unreachable');
};

const RouteExample = () => (
    <Routes>
        <Route
            path={'test-for-non-static-string' as string}
            element={route => {
                const { params } = route.match;
                const __shrug__: string | undefined = params.__shrug__;
                return <>{__shrug__}</>;
            }}
        />
        <Route
            path="/single/:id"
            element={route => {
                const { params } = route.match;
                const notDefined = params.notDefined; // $ExpectError
                const id: string = params.id;
                return <>{id}</>;
            }}
        />
        <Route
            path="/optional/:id?"
            element={route => {
                const { params } = route.match;
                const notDefined = params.notDefined; // $ExpectError
                const id: string | undefined = params.id;
                return <>{id}</>;
            }}
        />
        <Route
            path={['/abc/:id', '/xyz/:name']}
            element={route => {
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
            element={route => {
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
    </Routes>
);

// $ExpectType { batman: string; }
type signature = Parameters<NonNullable<Route<{}, '/:batman'>['props']['render']>>[0]['match']['params'];

export default RouteExample;
