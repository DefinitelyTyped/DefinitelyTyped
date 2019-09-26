import * as React from 'react';
import * as PropTypes from 'prop-types';

import hoistNonReactStatics = require('hoist-non-react-statics');

function TestClassComponents() {
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

        static defaultProps = {
            n: 42,
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
    C.defaultProps; // $ExpectError
    C.prototype.getB(); // $ExpectError

    <C x={1} />;

    const CWithType: hoistNonReactStatics.NonReactStatics<typeof B> = C;

    CWithType.propTypes; // $ExpectError
    CWithType.defaultProps; // $ExpectError
    CWithType.prototype.getB(); // $ExpectError

    const D = hoistNonReactStatics(A, B, { a: true, b: true });

    D.a;
    D.b; // $ExpectError

    const DWithType: hoistNonReactStatics.NonReactStatics<typeof B, { a: true; b: true }> = D;
    const DWithTypeError: hoistNonReactStatics.NonReactStatics<typeof B> = D; // $ExpectError

    DWithType.b; // $ExpectError
}

// NOTE: We use Object.assign() to assign statics to functional components as a
// convenience to avoid having to model the component's type with static fields.

function TestFunctionalComponents() {
    const A = ({x, y}: {x: number; y?: number}) => <div>{x + (y || 0)}</div>;

    // tslint:disable-next-line:prefer-object-spread
    const AWithStatics = Object.assign(A, {
        a: 'a',
        propTypes: {
            x: PropTypes.number.isRequired,
            y: PropTypes.number,
        },
    });

    const B = ({n}: {n: number}) => <div>{n}</div>;

    // tslint:disable-next-line:prefer-object-spread
    const BWithStatics = Object.assign(B, {
        b: 'b',
        propTypes: {
            n: PropTypes.number.isRequired,
        },
        defaultProps: {
            n: 42,
        },
    });

    const C = hoistNonReactStatics(AWithStatics, BWithStatics);

    C.a !== C.b;

    C.propTypes.x;
    C.propTypes.n; // $ExpectError
    C.defaultProps; // $ExpectError

    <C x={1} />;

    const CWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = C;

    CWithType.propTypes; // $ExpectError
    CWithType.defaultProps; // $ExpectError

    const D = hoistNonReactStatics(AWithStatics, BWithStatics, { a: true, b: true });

    D.a;
    D.b; // $ExpectError

    const DWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics, { a: true; b: true }> = D;
    const DWithTypeError: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = D; // $ExpectError

    DWithType.b; // $ExpectError
}

function TestMemoComponents() {
    const A = ({x, y}: {x: number; y?: number}) => <div>{x + (y || 0)}</div>;

    // tslint:disable-next-line:prefer-object-spread
    const AWithStatics = Object.assign(A, {
        a: 'a',
        propTypes: {
            x: PropTypes.number.isRequired,
            y: PropTypes.number,
        },
    });

    const B = React.memo(({n}: {n: number}) => <div>{n}</div>);

    // tslint:disable-next-line:prefer-object-spread
    const BWithStatics = Object.assign(B, {
        b: 'b',
        propTypes: {
            n: PropTypes.number.isRequired,
        },
        defaultProps: {
            n: 42,
        },
    });

    const C = hoistNonReactStatics(AWithStatics, BWithStatics);

    C.a !== C.b;

    C.propTypes.x;
    C.propTypes.n; // $ExpectError
    C.defaultProps; // $ExpectError

    <C x={1} />;

    const CWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = C;

    CWithType.propTypes; // $ExpectError
    CWithType.defaultProps; // $ExpectError

    const D = hoistNonReactStatics(AWithStatics, BWithStatics, { a: true, b: true });

    D.a;
    D.b; // $ExpectError

    const DWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics, { a: true; b: true }> = D;
    const DWithTypeError: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = D; // $ExpectError

    DWithType.b; // $ExpectError
}

function TestForwardRefComponents() {
    const A = ({x, y}: {x: number; y?: number}) => <div>{x + (y || 0)}</div>;

    // tslint:disable-next-line:prefer-object-spread
    const AWithStatics = Object.assign(A, {
        a: 'a',
        propTypes: {
            x: PropTypes.number.isRequired,
            y: PropTypes.number,
        },
    });

    const B = React.forwardRef(
        ({n}: {n: number}, ref: React.Ref<HTMLDivElement>) => <div ref={ref}>{n}</div>
    );

    // tslint:disable-next-line:prefer-object-spread
    const BWithStatics = Object.assign(B, {
        b: 'b',
        propTypes: {
            n: PropTypes.number.isRequired,
        },
        defaultProps: {
            n: 42,
        },
    });

    const C = hoistNonReactStatics(AWithStatics, BWithStatics);

    C.a !== C.b;

    C.propTypes.x;
    C.propTypes.n; // $ExpectError
    C.defaultProps; // $ExpectError

    <C x={1} />;

    const CWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = C;

    CWithType.propTypes; // $ExpectError
    CWithType.defaultProps; // $ExpectError

    const D = hoistNonReactStatics(AWithStatics, BWithStatics, { a: true, b: true });

    D.a;
    D.b; // $ExpectError

    const DWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics, { a: true; b: true }> = D;
    const DWithTypeError: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = D; // $ExpectError

    DWithType.b; // $ExpectError
}
