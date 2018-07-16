// tslint-disable no-useless-files
// Uncomment when TS 3.0 is ready

// import * as React from "react";
// import * as PropTypes from "prop-types";

// interface ComponentProps {
//     foo?: number;
//     bar?: React.ReactNode;
//     baz: string
// }

// const propTypes: PropTypes.ValidationMap<ComponentProps> = {
//     foo: PropTypes.number,
//     bar: PropTypes.node,
//     baz: PropTypes.string.isRequired,
// }

// class Component extends React.Component {
//     static propTypes: PropTypes.ValidationMap<ComponentProps> = {
//         foo: PropTypes.number,
//         bar: PropTypes.node,
//         baz: PropTypes.string.isRequired,
//     };
//     static defaultProps = {
//         foo: 42,
//     }
// }

// const a = <Component foo={12} bar="yes" baz="yeah" />;
// // $ExpectError
// const b = <Component foo={12} />; // Error, missing required prop bar
// const c = <Component bar="yes" baz="yeah" />;
// // $ExpectError
// const d = <Component bar="yes" baz="yo" bat="ohno" />; // Error, bat not a valid prop
// const e = <Component foo={12} bar={null} baz="cool" />; // bar is nullable/undefinable since it's not marked `isRequired`
// // $ExpectError
// const f = <Component foo={12} bar="yeah" baz={null} />; // Error, bat is _not_ nullable/undefinable since it's marked `isRequired`

// class JustPropTypes extends React.Component {
//     static propTypes = {
//         foo: PropTypes.number,
//         bar: PropTypes.node,
//     };
// }

// const g = <JustPropTypes foo={12} bar="ok" />;
// // $ExpectError
// const h = <JustPropTypes foo="no" />; // error, wrong type
// const i = <JustPropTypes foo={null} bar="ok" />;
// const j = <JustPropTypes foo={12} bar={null} />;

// class JustDefaultProps extends React.Component {
//     static defaultProps = {
//         foo: 42,
//     };
// }

// const k = <JustDefaultProps foo={12} />;
// // $ExpectError
// const l = <JustDefaultProps foo={12} bar="ok" />; // error, no prop named bar
// // $ExpectError
// const m = <JustDefaultProps foo="no" />; // error, wrong type

// interface FooProps {
//     foo: string;
// }

// class BothWithSpecifiedGeneric extends React.Component<FooProps> {
//     static propTypes = {
//         foo: PropTypes.string,
//         bar: PropTypes.node,
//         baz: PropTypes.number.isRequired,
//     };
//     static defaultProps = {
//         foo: "yo",
//     };
// }
// const n = <BothWithSpecifiedGeneric foo="fine" bar="yes" baz={12} />;
// // $ExpectError
// const o = <BothWithSpecifiedGeneric foo="no" />; // Error, missing required prop baz
// const p = <BothWithSpecifiedGeneric bar="yes" baz={12} />;
// // $ExpectError
// const q = <BothWithSpecifiedGeneric bar="yes" baz={12} bat="ohno" />; // Error, bat not a valid prop
// const r = <BothWithSpecifiedGeneric foo="no" bar={null} baz={0} />; // bar is nullable/undefinable since it's not marked `isRequired`
// // $ExpectError
// const s = <BothWithSpecifiedGeneric foo="eh" bar="yeah" baz={null} />; // Error, baz is _not_ nullable/undefinable since it's marked `isRequired`

// class JustPropTypesWithSpecifiedGeneric extends React.Component<FooProps> {
//     static propTypes = {
//         foo: PropTypes.string,
//         bar: PropTypes.node.isRequired,
//     };
// }
// const t = <JustPropTypesWithSpecifiedGeneric foo="nice" bar="ok" />;
// // $ExpectError
// const u = <JustPropTypesWithSpecifiedGeneric foo={12} />; // error, wrong type
// // $ExpectError
// const v = <JustPropTypesWithSpecifiedGeneric foo={null} bar="ok" />; // generic overrides propTypes required-ness, null isn't valid
// const w = <JustPropTypesWithSpecifiedGeneric foo="cool" bar={null} />; // error, bar is required

// class JustDefaultPropsWithSpecifiedGeneric extends React.Component<FooProps> {
//     static defaultProps = {
//         foo: "no",
//     };
// }

// const x = <JustDefaultPropsWithSpecifiedGeneric foo="eh" />;
// // $ExpectError
// const y = <JustDefaultPropsWithSpecifiedGeneric foo="no" bar="ok" />; // error, no prop named bar
// // $ExpectError
// const z = <JustDefaultPropsWithSpecifiedGeneric foo={12} />; // error, wrong type
// const aa = <JustDefaultPropsWithSpecifiedGeneric />;
