import * as React from 'react';
import * as PropTypes from 'prop-types';

import hoistNonReactStatics = require('hoist-non-react-statics');

class A extends React.Component<{ x: number; y?: number | null }> {
    static a = 'a';

    static propTypes = {
        x: PropTypes.number.isRequired,
        y: PropTypes.number,
    };

    getA() {
        return A.a;
    }
}

class B extends React.Component {
    static b = 'b';

    static propTypes = {
        n: PropTypes.number.isRequired,
    };

    getB() {
        return B.b;
    }
}

const C = hoistNonReactStatics(A, B);

C.a !== C.b;

C.propTypes.x;
C.prototype.getA();

C.propTypes.n; // $ExpectError
C.prototype.getB(); // $ExpectError

<C x={1} />;

const D = hoistNonReactStatics(A, B, { a: true, b: true });

D.a;
D.b; // $ExpectError
