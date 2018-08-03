import * as  React from 'react';
import * as PropTypes from 'prop-types';

import hoistNonReactStatics = require('hoist-non-react-statics');

class A extends React.Component<{x: number, y?: number}> {
    static a = 'a';

    static propTypes = {
        m: PropTypes.number.isRequired
    };

    getA() {
        return A.a;
    }
}

class B extends React.Component {
    static b = 'b';

    static propTypes = {
        n: PropTypes.number.isRequired
    };

    getB() {
        return B.b;
    }
}

const C = hoistNonReactStatics(A, B);

C.a !== C.b;

C.propTypes.m;
C.prototype.getA();

C.propTypes.n; // $ExpectError
C.prototype.getB(); // $ExpectError

<C x={1}/>;

const D = hoistNonReactStatics(A, B, { a: true, b: true });

D.a;
D.b; // $ExpectError
