import * as React from 'react';
import * as PropTypes from 'prop-types';

import hoistNonReactStatics = require('hoist-non-react-statics');

function TestClassComponents() {
    class A extends React.Component<{ x: number; y?: number | null | undefined }> {
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

    // @ts-expect-error
    C.propTypes.n;
    // @ts-expect-error
    C.defaultProps;
    // @ts-expect-error
    C.prototype.getB();

    <C x={1} />;

    const CWithType: hoistNonReactStatics.NonReactStatics<typeof B> = C;

    // @ts-expect-error
    CWithType.propTypes;
    // @ts-expect-error
    CWithType.defaultProps;
    // @ts-expect-error
    CWithType.prototype.getB();

    const D = hoistNonReactStatics(A, B, { a: true, b: true });

    D.a;
    // @ts-expect-error
    D.b;

    const DWithType: hoistNonReactStatics.NonReactStatics<typeof B, { a: true; b: true }> = D;
    // @ts-expect-error
    const DWithTypeError: hoistNonReactStatics.NonReactStatics<typeof B> = D;

    // @ts-expect-error
    DWithType.b;
}

// NOTE: We use Object.assign() to assign statics to functional components as a
// convenience to avoid having to model the component's type with static fields.

function TestFunctionalComponents() {
    const A = ({x, y}: {x: number; y?: number | undefined}) => <div>{x + (y || 0)}</div>;

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
    // @ts-expect-error
    C.propTypes.n;
    // @ts-expect-error
    C.defaultProps;

    <C x={1} />;

    const CWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = C;

    // @ts-expect-error
    CWithType.propTypes;
    // @ts-expect-error
    CWithType.defaultProps;

    const D = hoistNonReactStatics(AWithStatics, BWithStatics, { a: true, b: true });

    D.a;
    // @ts-expect-error
    D.b;

    const DWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics, { a: true; b: true }> = D;
    // @ts-expect-error
    const DWithTypeError: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = D;

    // @ts-expect-error
    DWithType.b;
}

function TestMemoComponents() {
    const A = ({x, y}: {x: number; y?: number | undefined}) => <div>{x + (y || 0)}</div>;

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
    // @ts-expect-error
    C.propTypes.n;
    // @ts-expect-error
    C.defaultProps;

    <C x={1} />;

    const CWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = C;

    // @ts-expect-error
    CWithType.propTypes;
    // @ts-expect-error
    CWithType.defaultProps;

    const D = hoistNonReactStatics(AWithStatics, BWithStatics, { a: true, b: true });

    D.a;
    // @ts-expect-error
    D.b;

    const DWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics, { a: true; b: true }> = D;
    // @ts-expect-error
    const DWithTypeError: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = D;

    // @ts-expect-error
    DWithType.b;
}

function TestForwardRefComponents() {
    const A = ({x, y}: {x: number; y?: number | undefined}) => <div>{x + (y || 0)}</div>;

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
    // @ts-expect-error
    C.propTypes.n;
    // @ts-expect-error
    C.defaultProps;

    <C x={1} />;

    const CWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = C;

    // @ts-expect-error
    CWithType.propTypes;
    // @ts-expect-error
    CWithType.defaultProps;

    const D = hoistNonReactStatics(AWithStatics, BWithStatics, { a: true, b: true });

    D.a;
    // @ts-expect-error
    D.b;

    const DWithType: hoistNonReactStatics.NonReactStatics<typeof BWithStatics, { a: true; b: true }> = D;
    // @ts-expect-error
    const DWithTypeError: hoistNonReactStatics.NonReactStatics<typeof BWithStatics> = D;

    // @ts-expect-error
    DWithType.b;
}
