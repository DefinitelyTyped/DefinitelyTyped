import * as React from 'react';
import * as PropTypes from 'prop-types';

class Component extends React.Component {
    static propTypes = {
        foo: PropTypes.number,
        bar: PropTypes.node,
        baz: PropTypes.string.isRequired,
    };
    static defaultProps = {
        foo: 42,
    };
}

const a = <Component foo={12} bar="yes" baz="yeah" />;
const b = <Component foo={12} />; // Error, missing required prop bar
const c = <Component bar="yes" baz="yeah" />;
const d = <Component bar="yes" baz="yo" bat="ohno" />; // Error, baz not a valid prop
const e = <Component foo={12} bar={null} baz="cool" />; // bar is nullable/undefinable since it's not marked `isRequired`
const f = <Component foo={12} bar="yeah" baz={null} />; // Error, baz is _not_ nullable/undefinable since it's marked `isRequired`

class JustPropTypes extends React.Component {
    static propTypes = {
        foo: PropTypes.number,
        bar: PropTypes.node.isRequired,
    };
}

const g = <JustPropTypes foo={12} bar="ok" />;
const h = <JustPropTypes foo="no" />; // error, wrong type
const i = <JustPropTypes foo={null} bar="ok" />;
const j = <JustPropTypes foo={12} bar={null} />; // error, bar is required

class JustDefaultProps extends React.Component {
    static defaultProps = {
        foo: 42,
    };
}

const k = <JustDefaultProps foo={12} />;
const l = <JustDefaultProps foo={12} bar="ok" />; // error, no prop named bar
const m = <JustDefaultProps foo="no" />; // error, wrong type

interface FooProps {
    foo: string;
}

class BothWithSpecifiedGeneric extends React.Component<FooProps> {
    static propTypes = {
        foo: PropTypes.string,
        bar: PropTypes.node,
        baz: PropTypes.number.isRequired,
    };
    static defaultProps = {
        foo: "yo",
    };
}
const n = <BothWithSpecifiedGeneric foo="fine" bar="yes" baz={12} />;
const o = <BothWithSpecifiedGeneric foo="no" />; // Error, missing required prop bar
const p = <BothWithSpecifiedGeneric bar="yes" baz={12} />;
const q = <BothWithSpecifiedGeneric bar="yes" baz={12} bat="ohno" />; // Error, baz not a valid prop
const r = <BothWithSpecifiedGeneric foo="no" bar={null} baz={0} />; // bar is nullable/undefinable since it's not marked `isRequired`
const s = <BothWithSpecifiedGeneric foo="eh" bar="yeah" baz={null} />; // Error, baz is _not_ nullable/undefinable since it's marked `isRequired`

class JustPropTypesWithSpecifiedGeneric extends React.Component<FooProps> {
    static propTypes = {
        foo: PropTypes.string,
        bar: PropTypes.node.isRequired,
    };
}
const t = <JustPropTypesWithSpecifiedGeneric foo="nice" bar="ok" />;
const u = <JustPropTypesWithSpecifiedGeneric foo={12} />; // error, wrong type
const v = <JustPropTypesWithSpecifiedGeneric foo={null} bar="ok" />; // generic overrides propTypes required-ness, null isn't valid
const w = <JustPropTypesWithSpecifiedGeneric foo="cool" bar={null} />; // error, bar is required

class JustDefaultPropsWithSpecifiedGeneric extends React.Component<FooProps> {
    static defaultProps = {
        foo: "no",
    };
}

const x = <JustDefaultPropsWithSpecifiedGeneric foo="eh" />;
const y = <JustDefaultPropsWithSpecifiedGeneric foo="no" bar="ok" />; // error, no prop named bar
const z = <JustDefaultPropsWithSpecifiedGeneric foo={12} />; // error, wrong type
const aa = <JustDefaultPropsWithSpecifiedGeneric />;
