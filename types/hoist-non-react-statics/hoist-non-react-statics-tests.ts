import * as  React from 'react';

import hoistNonReactStatics = require('hoist-non-react-statics');

class A extends React.Component {
    static a = 'a';

    getA() {
        return A.a;
    }
}

class B extends React.Component {
    static b = 'b';

    getB() {
        return B.b;
    }
}

const C = hoistNonReactStatics(A, B);

C.a !== C.b;

C.prototype.getA(); // should work
// C.prototype.getB(); // should emit an error

const D = hoistNonReactStatics(A, B, { b: true });

D.a;
// D.b; // should emit an error
