import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';

class A extends React.Component {
    render() {
        return null;
    }
}

const Comp = polyfill(A);
