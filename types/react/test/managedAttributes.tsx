interface LeaveMeAloneDtslint { foo: string; }
// Re-enable when we move @types/react to TS 3.0 (except for the tests marked as
// requiring TS >= 3.2)
//
// In the meantime, these tests can be run manually by uncommenting the code
// below and running `dtslint --onlyTestTsNext`.

// import * as React from 'react';
// import * as PropTypes from 'prop-types';

// interface Props {
//     bool?: boolean | null;
//     fnc: () => any;
//     node?: React.ReactNode;
//     num?: number | null;
//     reqNode: NonNullable<React.ReactNode>;
//     str: string;
// }

// const propTypes = {
//     bool: PropTypes.bool,
//     fnc: PropTypes.func.isRequired,
//     node: PropTypes.node,
//     num: PropTypes.number,
//     reqNode: PropTypes.node.isRequired,
//     str: PropTypes.string.isRequired,
// };

// const defaultProps = {
//     fnc: (() => 'abc') as () => any,
//     reqNode: 'text_node' as NonNullable<React.ReactNode>
// };

// class AnnotatedPropTypesAndDefaultProps extends React.Component<Props> {
//     static propTypes = propTypes;
//     static defaultProps = defaultProps;
// }

// const annotatedPropTypesAndDefaultPropsTests = [
//     // $ExpectError
//     <AnnotatedPropTypesAndDefaultProps />, // str is required
//     <AnnotatedPropTypesAndDefaultProps str='abc' />,
//     // $ExpectError
//     <AnnotatedPropTypesAndDefaultProps num='abc' />, // num type mismatch
//     <AnnotatedPropTypesAndDefaultProps
//         bool={true}
//         fnc={console.log}
//         node={<span />}
//         num={0}
//         reqNode={<span />}
//         str='abc'
//     />
// ];

// class AnnotatedPropTypes extends React.Component<Props> {
//     static propTypes = propTypes;
// }

// const annotatedPropTypesTests = [
//     // $ExpectError
//     <AnnotatedPropTypes />, // str, reqNode and fnc are required
//     <AnnotatedPropTypes fnc={console.log} str='abc' reqNode={<span />} />,
//     // $ExpectError
//     <AnnotatedPropTypes fnc={console.log} str='abc' reqNode={<span />} extraBool={false} />, // extraBool doesn't exist
//     // $ExpectError
//     <AnnotatedPropTypes fnc={console.log} str='abc' reqNode={<span />} num='abc' />, // num type mismatch
//     <AnnotatedPropTypes
//         bool={false}
//         fnc={console.log}
//         node={<React.Fragment />}
//         num={0}
//         reqNode={<React.Fragment />}
//         str='abc'
//     />
// ];

// class AnnotatedDefaultProps extends React.Component<Props> {
//     static defaultProps = defaultProps;
// }

// const annotatedDefaultPropsTests = [
//     // $ExpectError
//     <AnnotatedDefaultProps />, // str is required
//     <AnnotatedDefaultProps str='abc' />,
//     <AnnotatedDefaultProps str='abc' reqNode={<span />} />,
//     // $ExpectError
//     <AnnotatedDefaultProps str={() => { }} />, // str type mismatch
//     <AnnotatedDefaultProps
//         bool={true}
//         fnc={console.log}
//         node={null}
//         num={0}
//         reqNode={undefined}
//         str='abc'
//     />
// ];

// class ComponentWithNoDefaultProps extends React.Component<Props> {}

// function FunctionalComponent(props: Props) { return <>{props.reqNode}</>; }
// FunctionalComponent.defaultProps = defaultProps;

// const functionalComponentTests = [
//     // $ExpectError
//     <FunctionalComponent />,
//     // NOTE: This test requires TypeScript >= 3.2, which honors JSX.LibraryManagedAttributes for function components.
//     <FunctionalComponent str='' />
// ];

// const MemoFunctionalComponent = React.memo(FunctionalComponent);
// const MemoAnnotatedDefaultProps = React.memo(AnnotatedDefaultProps);
// const LazyMemoFunctionalComponent = React.lazy(async () => ({ default: MemoFunctionalComponent }));
// const LazyMemoAnnotatedDefaultProps = React.lazy(async () => ({ default: MemoAnnotatedDefaultProps }));

// const memoTests = [
//     // $ExpectError
//     <MemoFunctionalComponent />,
//     // Requires TypeScript >= 3.2; see comment re FunctionalComponent above
//     <MemoFunctionalComponent str='abc' />,
//     // $ExpectError
//     <MemoAnnotatedDefaultProps />,
//     <AnnotatedDefaultProps str='abc' />,
//     // Requires TypeScript >= 3.2; see comment re FunctionalComponent above
//     <MemoAnnotatedDefaultProps str='abc' />,
//     // Requires TypeScript >= 3.2; see comment re FunctionalComponent above
//     <LazyMemoFunctionalComponent str='abc' />,
//     // $ExpectError
//     <LazyMemoAnnotatedDefaultProps />,
//     // Requires TypeScript >= 3.2; see comment re FunctionalComponent above
//     <LazyMemoAnnotatedDefaultProps str='abc' />
// ];

// // $ExpectType Pick<Props, "bool" | "node" | "num" | "str"> & Partial<Pick<Props, "fnc" | "reqNode">>
// type AnnotatedDefaultPropsLibraryManagedAttributes = JSX.LibraryManagedAttributes<typeof AnnotatedDefaultProps, Props>;
// // $ExpectType Pick<Props, "bool" | "node" | "num" | "str"> & Partial<Pick<Props, "fnc" | "reqNode">>
// type FunctionalComponentLibraryManagedAttributes = JSX.LibraryManagedAttributes<typeof FunctionalComponent, Props>;
// // $ExpectType Pick<Props, "bool" | "node" | "num" | "str"> & Partial<Pick<Props, "fnc" | "reqNode">>
// type MemoFunctionalComponentLibraryManagedAttributes = JSX.LibraryManagedAttributes<typeof MemoFunctionalComponent, Props>;
// // $ExpectType Pick<Props, "bool" | "node" | "num" | "str"> & Partial<Pick<Props, "fnc" | "reqNode">>
// type LazyMemoFunctionalComponentLibraryManagedAttributes = JSX.LibraryManagedAttributes<typeof LazyMemoFunctionalComponent, Props>;

// const ForwardRef = React.forwardRef((props: Props, ref: React.Ref<ComponentWithNoDefaultProps>) => (
//     <ComponentWithNoDefaultProps ref={ref} {...props}/>
// ));
// ForwardRef.defaultProps = defaultProps;

// const forwardRefTests = [
//     // $ExpectError
//     <ForwardRef />,
//     <ForwardRef
//         fnc={console.log}
//         reqNode={<span />}
//         str=''
//     />,
//     // the type of ForwardRef.defaultProps stays Partial<P> anyway even if assigned
//     // $ExpectError
//     <ForwardRef str='abc' />
// ];

// const wrongDefaultProps = {
//     fnc: 42
// };
// class WrongDefaultPropsComponent extends React.Component<Props> {
//     static defaultProps = wrongDefaultProps;
// }
// const wrongDefaultPropsComponentTests = [
//     // $ExpectError
//     <WrongDefaultPropsComponent fnc={() => undefined} reqNode="text" str="str" />
// ];
// // $ExpectError
// const investigateWrongDefaultPropsComponent: React.ComponentType<Props> = WrongDefaultPropsComponent;

// const excessDefaultProps = {
//     another: 43
// };
// class ExcessDefaultPropsComponent extends React.Component<Props> {
//     static defaultProps = excessDefaultProps;
// }
// const excessDefaultPropsComponentTests = [
//     // $ExpectError
//     <ExcessDefaultPropsComponent fnc={() => undefined} reqNode="text" str="str" />
// ];
// // $ExpectError
// const investigateExcessDefaultPropsComponent: React.ComponentType<Props> = ExcessDefaultPropsComponent;

// const wrongPropTypes = {
//     bool: PropTypes.bool,
//     fnc: PropTypes.number.isRequired,
//     node: PropTypes.node,
//     num: PropTypes.number,
//     reqNode: PropTypes.node.isRequired,
//     str: PropTypes.string.isRequired,
// };
// class WrongPropTypesComponent extends React.Component<Props> {
//     static propTypes = wrongPropTypes;
// }
// const wrongPropTypesComponentTests = [
//     // $ExpectError
//     <WrongPropTypesComponent fnc={() => undefined} reqNode="text" str="str" />
// ];

// const incompletePropTypes = {
//     bool: PropTypes.bool,
//     node: PropTypes.node,
//     num: PropTypes.number,
//     reqNode: PropTypes.node.isRequired,
//     str: PropTypes.string.isRequired,
// };
// class IncompletePropTypesComponent extends React.Component<Props> {
//     static propTypes = incompletePropTypes;
// }
// const incompletePropTypesComponentTests = [
//     // $ExpectError
//     <IncompletePropTypesComponent fnc={() => undefined} reqNode="text" str="str" />
// ];

// const excessPropTypes = {
//     another: PropTypes.number.isRequired,
//     bool: PropTypes.bool,
//     fnc: PropTypes.func.isRequired,
//     node: PropTypes.node,
//     num: PropTypes.number,
//     reqNode: PropTypes.node.isRequired,
//     str: PropTypes.string.isRequired,
// };
// class ExcessPropTypesComponent extends React.Component<Props> {
//     static propTypes = excessPropTypes;
// }
// const ExcessPropTypesComponentTests = [
//     // $ExpectError
//     <ExcessPropTypesComponent fnc={() => undefined} reqNode="text" str="str" />
// ];

// class WrongDefaultPropsSuppressedComponent extends React.Component<Props> {
//     static defaultProps = wrongDefaultProps;
//     static bypassDefaultPropsTypecheck = true;
// }
// const wrongDefaultPropsSuppressedComponentTests = [
//     <WrongDefaultPropsSuppressedComponent fnc={() => undefined} reqNode="text" str="str" />
// ];

// class WrongPropTypesSuppressedComponent extends React.Component<Props> {
//     static propTypes = wrongPropTypes;
//     static bypassPropTypesTypecheck = true;
// }
// const wrongPropTypesSuppressedComponentTests = [
//     <WrongPropTypesSuppressedComponent fnc={() => undefined} reqNode="text" str="str" />
// ];
