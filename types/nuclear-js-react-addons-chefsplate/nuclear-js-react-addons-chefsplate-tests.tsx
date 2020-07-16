import * as React from 'react';

// Make sure all exports are defined, even though "connect" is the only one with
// actual types.
import { connect, Provider, nuclearMixin, provideReactor, nuclearComponent } from 'nuclear-js-react-addons-chefsplate';

/******************** FUNCTION COMPONENT TESTS ********************************/

// Make sure that connect passes through basic props requirement.
const FC = (props: {}) => <p />;
const ConnectedFC = connect(() => ({}))(FC);
// $ExpectError
<ConnectedFC extra="" />;

const FCWithProp = (props: { extra: string }) => <p />;
const ConnectedFCWithProps = connect(() => ({}))(FCWithProp);
<ConnectedFCWithProps extra="" />;
// $ExpectError
<ConnectedFCWithProps extra={5} />;

// Make sure it works with untyped function components.
const UntypedFC: any = (props: { extra: string }) => <p />;
const ConnectedUntypedFC = connect(() => ({ extra: null, superExtra: null }))(UntypedFC);
<ConnectedUntypedFC />;

// Make sure that injected props are NOT available in connected component.
const ConnectedFCWithoutProps = connect(() => ({ extra: null }))(FCWithProp);
// $ExpectError
<ConnectedFCWithoutProps extra="" />;

// Check optional props.
const FCWithOptionalProp = (props: { optional?: string }) => <p />;
const ConnectedFCWithOptionalProp = connect(() => ({}))(FCWithOptionalProp);
<ConnectedFCWithOptionalProp />;
<ConnectedFCWithOptionalProp optional="" />;
// $ExpectError
<ConnectedFCWithOptionalProp optional={5} />;

// Any props injeted in mapStateToProps should NOT be available on the connected
// component.
const ConnectedFCWithoutOptionalProp = connect(() => ({ optional: null }))(FCWithOptionalProp);
<ConnectedFCWithoutOptionalProp />;
// $ExpectError
<ConnectedFCWithoutOptionalProp optional="" />;
// $ExpectError
<ConnectedFCWithoutOptionalProp optional={5} />;

// Check that it's an error to even call connect() with mismatched mapStateToProps
// and component.
const FCWithAProp = (props: { a: string }) => <p />;
const badMapStateToProps = () => ({ b: null });
const okayMapStateToProps = () => ({ a: 15 });
// $ExpectError
connect(badMapStateToProps)(FCWithAProp);
// Doesn't actually check types, just prop names.
connect(okayMapStateToProps)(FCWithAProp);

/*********************** CLASS COMPONENT TESTS ********************************/

// Make sure that connect passes through basic props requirement.
class CC extends React.Component {}
const ConnectedCC = connect(() => ({}))(CC);
// $ExpectError
<ConnectedCC extra="" />;

class CCWithProp extends React.Component<{ extra: string }> {}
const ConnectedCCWithProps = connect(() => ({}))(CCWithProp);
<ConnectedCCWithProps extra="" />;
// $ExpectError
<ConnectedCCWithProps extra={5} />;

// Make sure it works with untyped class components.
const UntypedCC: any = CCWithProp;
const ConnectedUntypedCC = connect(() => ({ extra: null, superExtra: null }))(UntypedCC);
<ConnectedUntypedCC />;

// Make sure that injected props are NOT available in connected component.
const ConnectedCCWithoutProps = connect(() => ({ extra: null }))(CCWithProp);
// $ExpectError
<ConnectedCCWithoutProps extra="" />;

// Check optional props.
class CCWithOptionalProp extends React.Component<{ optional?: string }> {}
const ConnectedCCWithOptionalProp = connect(() => ({}))(CCWithOptionalProp);
<ConnectedCCWithOptionalProp />;
<ConnectedCCWithOptionalProp optional="" />;
// $ExpectError
<ConnectedCCWithOptionalProp optional={5} />;

// Any props injeted in mapStateToProps should NOT be available on the connected
// component.
const ConnectedCCWithoutOptionalProp = connect(() => ({ optional: null }))(CCWithOptionalProp);
<ConnectedCCWithoutOptionalProp />;
// $ExpectError
<ConnectedCCWithoutOptionalProp optional="" />;
// $ExpectError
<ConnectedCCWithoutOptionalProp optional={5} />;

// Check that it's an error to even call connect() with mismatched mapStateToProps
// and component.
class CCWithAProp extends React.Component<{ a: string }> {}
// $ExpectError
connect(badMapStateToProps)(CCWithAProp);
// Doesn't actually check types, just prop names.
connect(okayMapStateToProps)(CCWithAProp);
