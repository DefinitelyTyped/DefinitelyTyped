import * as React from 'react';
import { Route } from 'react-router';

function RouteWithFunctionElementAttribute() {
    return <Route path="/" element={() => <div>Hello!</div>} />;
}

function RouteWithFunctionJsxElement() {
    return <Route path="/">{() => <div>Hello!</div>}</Route>;
}

function RouteWithElementElementAttribute() {
    return <Route path="/" element={<div>Hello!</div>} />;
}
