interface LeaveMeAloneDtslint { foo: string; }
// // Re-enable when we move @types/react to TS 3.0

// import * as React from 'react';
// import * as PropTypes from 'prop-types';

// interface Props {
//     bool?: boolean;
//     fnc: () => any;
//     node?: React.ReactNode;
//     num?: number;
//     reqNode: NonNullable<React.ReactNode>;
//     str: string;
// }

// const propTypes = {
//     bool: PropTypes.bool,
//     fnc: PropTypes.func.isRequired,
//     node: PropTypes.node,
//     num: PropTypes.number,
//     str: PropTypes.string.isRequired,
//     extraStr: PropTypes.string.isRequired,
//     extraNum: PropTypes.number
// };

// const defaultProps = {
//     fnc: (() => 'abc') as () => any,
//     extraBool: false,
//     reqNode: 'text_node' as NonNullable<React.ReactNode>
// };

// class AnnotatedPropTypesAndDefaultProps extends React.Component<Props> {
//     static propTypes = propTypes;
//     static defaultProps = defaultProps;
// }

// const annotatedPropTypesAndDefaultPropsTests = [
//     // $ExpectError
//     <AnnotatedPropTypesAndDefaultProps />, // str and extraStr are required
//     <AnnotatedPropTypesAndDefaultProps extraStr='abc' str='abc' />,
//     // $ExpectError
//     <AnnotatedPropTypesAndDefaultProps num='abc' />, // num type mismatch
//     <AnnotatedPropTypesAndDefaultProps
//         bool={true}
//         extraBool={true}
//         extraNum={0}
//         extraStr='abc'
//         fnc={console.log}
//         node={<span />}
//         num={0}
//         reqNode={<span />}
//         str='abc'
//     />
// ];

// class UnannotatedPropTypesAndDefaultProps extends React.Component {
//     static propTypes = propTypes;
//     static defaultProps = defaultProps;
// }

// const unannotatedPropTypesAndDefaultPropsTests = [
//     // $ExpectError
//     <UnannotatedPropTypesAndDefaultProps />, // stra and extraStr are required
//     <UnannotatedPropTypesAndDefaultProps extraStr='abc' str='abc' />,
//     // $ExpectError
//     <UnannotatedPropTypesAndDefaultProps extraBool={0} />, // extraBool type mismatch
//     <UnannotatedPropTypesAndDefaultProps
//         bool={true}
//         extraBool={true}
//         extraNum={0}
//         extraStr='abc'
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
//     <AnnotatedPropTypes />, // str, extraStr, reqNode and fnc are required
//     <AnnotatedPropTypes fnc={console.log} extraStr='abc' str='abc' reqNode={<span />} />,
//     // $ExpectError
//     <AnnotatedPropTypes fnc={console.log} extraStr='abc' str='abc' reqNode={<span />} extraBool={false} />, // extraBool doesn't exist
//     // $ExpectError
//     <AnnotatedPropTypes fnc={console.log} extraStr='abc' str='abc' reqNode={<span />} num='abc' />, // num type mismatch
//     <AnnotatedPropTypes
//         bool={false}
//         extraNum={0}
//         extraStr='abc'
//         fnc={console.log}
//         node={<React.Fragment />}
//         num={0}
//         reqNode={<React.Fragment />}
//         str='abc'
//     />
// ];

// class UnannotatedPropTypes extends React.Component {
//     static propTypes = propTypes;
// }

// const unannotatedPropTypesTests = [
//     // $ExpectError
//     <UnannotatedPropTypes />, // str, extraStr and fnc are required
//     <UnannotatedPropTypes fnc={console.log} extraStr='abc' str='abc' />,
//     // $ExpectError
//     <UnannotatedPropTypes fnc={console.log} extraStr='abc' str='abc' reqNode={<span />} />, // reqNode doesn't exist
//     // $ExpectError
//     <UnannotatedPropTypes fnc={console.log} extraStr='abc' str='abc' reqNode={<span />} num='abc' />, // num type mismatch
//     <UnannotatedPropTypes
//         bool={false}
//         extraNum={0}
//         extraStr='abc'
//         fnc={console.log}
//         node={<React.Fragment />}
//         num={0}
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
//         extraBool={false}
//         fnc={console.log}
//         node={null}
//         num={0}
//         reqNode={undefined}
//         str='abc'
//     />
// ];

// class UnannotatedDefaultProps extends React.Component {
//     static defaultProps = defaultProps;
// }

// const unannotatedDefaultPropsTests = [
//     <UnannotatedDefaultProps />,
//     <UnannotatedDefaultProps
//         extraBool={true}
//         fnc={console.log}
//         reqNode={<span />}
//     />
// ];

// class ComponentWithNoDefaultProps extends React.Component<Props> {}

// function FunctionalComponent(props: Props) { return <>{props.reqNode}</> }
// FunctionalComponent.defaultProps = defaultProps;

// const functionalComponentTests = [
//     // $ExpectError
//     <FunctionalComponent />,
//     // This is possibly a bug/limitation of TS
//     // Even if JSX.LibraryManagedAttributes returns the correct type, it doesn't seem to work with non-classes
//     // This also doesn't work with things typed React.SFC<P> because defaultProps will always be Partial<P>
//     // $ExpectError
//     <FunctionalComponent str='' />
// ];

// const MemoFunctionalComponent = React.memo(FunctionalComponent);
// const MemoAnnotatedDefaultProps = React.memo(AnnotatedDefaultProps);
// const LazyMemoFunctionalComponent = React.lazy(async () => ({ default: MemoFunctionalComponent }));
// const LazyMemoAnnotatedDefaultProps = React.lazy(async () => ({ default: MemoAnnotatedDefaultProps }));

// const memoTests = [
//     // $ExpectError
//     <MemoFunctionalComponent />,
//     // $ExpectError won't work as long as FunctionalComponent doesn't work either
//     <MemoFunctionalComponent str='abc' />,
//     // $ExpectError
//     <MemoAnnotatedDefaultProps />,
//     <AnnotatedDefaultProps str='abc' />,
//     // $ExpectError this doesn't work despite JSX.LibraryManagedAttributes returning the correct type
//     <MemoAnnotatedDefaultProps str='abc' />,
//     // $ExpectError won't work as long as FunctionalComponent doesn't work either
//     <LazyMemoFunctionalComponent str='abc' />,
//     // $ExpectError
//     <LazyMemoAnnotatedDefaultProps />,
//     // $ExpectError this doesn't work despite JSX.LibraryManagedAttributes returning the correct type
//     <LazyMemoAnnotatedDefaultProps str='abc' />
// ];

// type AnnotatedDefaultPropsLibraryManagedAttributes = JSX.LibraryManagedAttributes<typeof AnnotatedDefaultProps, Props>;
// // $ExpectType AnnotatedDefaultPropsLibraryManagedAttributes
// type FunctionalComponentLibraryManagedAttributes = JSX.LibraryManagedAttributes<typeof FunctionalComponent, Props>;
// // $ExpectType FunctionalComponentLibraryManagedAttributes
// type MemoFunctionalComponentLibraryManagedAttributes = JSX.LibraryManagedAttributes<typeof MemoFunctionalComponent, Props>;
// // $ExpectType FunctionalComponentLibraryManagedAttributes
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
//     // same bug as MemoFunctionalComponent and React.SFC-typed things
//     // $ExpectError the type of ForwardRef.defaultProps stays Partial<P> anyway even if assigned
//     <ForwardRef str='abc' />
// ];

// const weakComponentPropTypes = {
//     foo: PropTypes.string,
//     bar: PropTypes.bool.isRequired
// };
// interface WeakComponentProps1 {
//     foo: any;
//     bar: number;
// }
// interface WeakComponentProps2 {
//     foo: string;
//     bar: any;
// }
// interface WeakComponentProps3 {
//     foo: any;
//     bar: any;
// }

// // $ExpectType true
// type weakComponentTest1 = JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, any> extends {
//     foo?: string | null
//     bar: boolean
// } ? true : false;
// // $ExpectType true
// type weakComponentTest2 = JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, WeakComponentProps1> extends {
//     foo?: string | null
//     bar: number
// } ? true : false;
// // $ExpectType true
// type weakComponentTest3 = JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, WeakComponentProps2> extends {
//     foo: string
//     bar: boolean
// } ? true : false;

// // $ExpectError
// const weakComponentOptionalityTest1: JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, WeakComponentProps3> = { foo: '' };
// const weakComponentOptionalityTest2: JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, WeakComponentProps3> = { bar: true };

// interface IndexedComponentProps {
//     [K: string]: boolean;
// }
// interface WeakIndexedComponentProps {
//     [K: string]: any;
// }

// const weakComponentIndexedTest1: JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, IndexedComponentProps> = { };
// // $ExpectError
// const weakComponentIndexedTest2: JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, IndexedComponentProps> = { foo: '' };
// const weakComponentIndexedTest3: JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, WeakIndexedComponentProps> = { foo: '' };
// const weakComponentIndexedTest4: JSX.LibraryManagedAttributes<{ propTypes: typeof weakComponentPropTypes }, WeakIndexedComponentProps> = { foo: 4 };

// const optionalUnionPropTest: JSX.LibraryManagedAttributes<{ propTypes: {} }, { optional?: string } | { optional?: number }> = {};
