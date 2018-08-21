interface LeaveMeAloneDtslint { foo: string; }
// // Re-enable when we move @types/react to TS 3.0

// import * as React from 'react';
// import * as PropTypes from 'prop-types';

// interface Props {
//     bool?: boolean
//     fnc: () => any
//     node?: React.ReactNode
//     num?: number
//     reqNode: NonNullable<React.ReactNode>
//     str: string
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
//     fnc: function() { return 'abc' } as () => any,
//     extraBool: false,
//     reqNode: 'text_node' as React.ReactNode
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
