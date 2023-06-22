import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, Dispatch, AnyAction, ActionCreator, createStore, bindActionCreators, ActionCreatorsMapObject, Reducer } from 'redux';
import { Connect, connect, createProvider, Provider, DispatchProp, MapStateToProps, Options } from 'react-redux';
import objectAssign = require('object-assign');

//
// Quick Start
// https://github.com/rackt/react-redux/blob/master/docs/quick-start.md#quick-start
//

// Test cases written in a way to isolate types and variables and verify the
// output of `connect` to make sure the signature is what is expected

function Empty() {
    interface OwnProps {
        dispatch: Dispatch;
        foo: string;
    }

    class TestComponent extends React.Component<OwnProps> {}

    const Test = connect()(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapState() {
    interface OwnProps { foo: string; }
    interface StateProps { bar: number; }

    class TestComponent extends React.Component<OwnProps & StateProps> {}

    const mapStateToProps = (_: any) => ({
        bar: 1
    });

    const Test = connect(
        mapStateToProps
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapStateWithDispatchProp() {
    interface OwnProps { foo: string; }
    interface StateProps { bar: number; dispatch: Dispatch; }

    class TestComponent extends React.Component<OwnProps & StateProps> {}

    const mapStateToProps = (_: any) => ({
        bar: 1
    });

    const Test = connect(
        mapStateToProps
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapStateFactory() {
    interface OwnProps { foo: string; }
    interface StateProps { bar: number; }

    class TestComponent extends React.Component<OwnProps & StateProps> {}

    const mapStateToProps = () => () => ({
        bar: 1
    });

    const Test = connect(
        mapStateToProps
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapDispatch() {
    interface OwnProps { foo: string; }
    interface DispatchProps { onClick: () => void; }

    class TestComponent extends React.Component<OwnProps & DispatchProps> {}

    const mapDispatchToProps = () => ({
        onClick: () => {}
    });

    const TestNull = connect(
        null,
        mapDispatchToProps,
    )(TestComponent);

    const verifyNull = <TestNull foo='bar' />;

    const TestUndefined = connect(
        undefined,
        mapDispatchToProps,
    )(TestComponent);

    const verifyUndefined = <TestUndefined foo='bar' />;
}

function MapDispatchWithThunkActionCreators() {
    const simpleAction = (payload: boolean) => ({
        type: 'SIMPLE_ACTION',
        payload,
    });
    const thunkAction = (param1: number, param2: string) => (
        async (dispatch: Dispatch, { foo }: OwnProps) => {
            return foo;
        }
    );
    interface OwnProps {
        foo: string;
    }
    interface TestComponentProps extends OwnProps {
        simpleAction: typeof simpleAction;
        thunkAction(param1: number, param2: string): Promise<string>;
   }
    class TestComponent extends React.Component<TestComponentProps> {}

    const mapStateToProps = ({ foo }: { foo: string }) => ({ foo });
    const mapDispatchToProps = { simpleAction, thunkAction };

    const Test1 = connect(null, mapDispatchToProps)(TestComponent);
    const Test2 = connect(mapStateToProps, mapDispatchToProps)(TestComponent);
    const Test3 = connect(
        null, mapDispatchToProps, null, { storeKey: 'somekey' }
    )(TestComponent);
    const Test4 = connect(
        mapStateToProps, mapDispatchToProps, null, { storeKey: 'somekey' }
    )(TestComponent);
    const verify = <div>
        <Test1 foo='bar' />;
        <Test2 />
        <Test3 foo='bar' />;
        <Test4 />
    </div>;
}

function MapManualDispatchThatLooksLikeThunk() {
    interface OwnProps {
        foo: string;
    }
    interface TestComponentProps extends OwnProps {
        remove: (item: string) => () => object;
   }
    class TestComponent extends React.Component<TestComponentProps> {
        render() {
            return <div onClick={this.props.remove('someid')} />;
        }
    }

    const mapStateToProps = ({ foo }: { foo: string }) => ({ foo });
    function mapDispatchToProps(dispatch: Dispatch) {
        return {
            remove(item: string) {
                return () => dispatch({ type: 'REMOVE_ITEM', item });
            }
        };
    }

    const Test1 = connect(null, mapDispatchToProps)(TestComponent);
    const Test2 = connect(mapStateToProps, mapDispatchToProps)(TestComponent);
    const Test3 = connect(
        null, mapDispatchToProps, null, { storeKey: 'somekey' }
    )(TestComponent);
    const Test4 = connect(
        mapStateToProps, mapDispatchToProps, null, { storeKey: 'somekey' }
    )(TestComponent);
    const verify = <div>
        <Test1 foo='bar' />;
        <Test2 />
        <Test3 foo='bar' />;
        <Test4 />
    </div>;
}

function MapStateAndDispatchObject() {
    interface ClickPayload { count: number; }
    const onClick: ActionCreator<ClickPayload> = () => ({ count: 1 });
    const dispatchToProps = {
        onClick,
    };

    interface OwnProps { foo: string; }
    interface StateProps { bar: number; }
    interface DispatchProps { onClick: ActionCreator<ClickPayload>; }

    const mapStateToProps = (_: any, __: OwnProps): StateProps => ({
        bar: 1
    });

    class TestComponent extends React.Component<OwnProps & StateProps & DispatchProps> {}

    const Test = connect(
        mapStateToProps,
        dispatchToProps,
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapDispatchFactory() {
    interface OwnProps { foo: string; }
    interface DispatchProps { onClick: () => void; }

    class TestComponent extends React.Component<OwnProps & DispatchProps> {}

    const mapDispatchToPropsFactory = () => () => ({
        onClick: () => {}
    });

    const TestNull = connect(
        null,
        mapDispatchToPropsFactory,
    )(TestComponent);

    const verifyNull = <TestNull foo='bar' />;

    const TestUndefined = connect(
        undefined,
        mapDispatchToPropsFactory,
    )(TestComponent);

    const verifyUndefined = <TestUndefined foo='bar' />;
}

function MapStateAndDispatch() {
    interface OwnProps { foo: string; }
    interface StateProps { bar: number; }
    interface DispatchProps { onClick: () => void; }

    class TestComponent extends React.Component<OwnProps & StateProps & DispatchProps> {}

    const mapStateToProps = () => ({
        bar: 1
    });

    const mapDispatchToProps = () => ({
        onClick: () => {}
    });

    const Test = connect(
        mapStateToProps,
        mapDispatchToProps,
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapStateFactoryAndDispatch() {
    interface OwnProps { foo: string; }
    interface StateProps { bar: number; }
    interface DispatchProps { onClick: () => void; }

    const mapStateToPropsFactory = () => () => ({
        bar: 1
    });

    const mapDispatchToProps = () => ({
        onClick: () => {}
    });

    class TestComponent extends React.Component<OwnProps & StateProps & DispatchProps> {}

    const Test = connect(
        mapStateToPropsFactory,
        mapDispatchToProps,
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapStateFactoryAndDispatchFactory() {
    interface OwnProps { foo: string; }
    interface StateProps { bar: number; }
    interface DispatchProps { onClick: () => void; }

    const mapStateToPropsFactory = () => () => ({
        bar: 1
    });

    const mapDispatchToPropsFactory = () => () => ({
        onClick: () => {}
    });

    class TestComponent extends React.Component<OwnProps & StateProps & DispatchProps> {}

    const Test = connect(
        mapStateToPropsFactory,
        mapDispatchToPropsFactory,
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapStateAndDispatchAndMerge() {
    interface OwnProps { foo: string; }
    interface StateProps { bar: number; }
    interface DispatchProps { onClick: () => void; }

    class TestComponent extends React.Component<OwnProps & StateProps & DispatchProps> {}

    const mapStateToProps = () => ({
        bar: 1
    });

    const mapDispatchToProps = () => ({
        onClick: () => {}
    });

    const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => (
        { ...stateProps, ...dispatchProps }
    );

    const Test = connect(
        mapStateToProps,
        mapDispatchToProps,
        mergeProps,
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

function MapStateAndOptions() {
    interface State { state: string; }
    interface OwnProps { foo: string; }
    interface StateProps { bar: number; }
    interface DispatchProps { dispatch: Dispatch; }

    class TestComponent extends React.Component<OwnProps & StateProps & DispatchProps> {}

    const mapStateToProps = (state: State) => ({
        bar: 1
    });

    const areStatePropsEqual = (next: StateProps, current: StateProps) => true;

    const Test = connect<StateProps, DispatchProps, OwnProps, State>(
        mapStateToProps,
        null,
        null,
        {
            pure: true,
            areStatePropsEqual,
        }
    )(TestComponent);

    const verify = <Test foo='bar' />;
}

interface CounterState {
    counter: number;
}
declare var increment: () => { type: string };

class Counter extends React.Component<any, any> {
    render() {
        return (
            <button onClick={this.props.onIncrement}>
                {this.props.value}
            </button>
        );
    }
}

function mapStateToProps(state: CounterState) {
    return {
        value: state.counter
    };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onIncrement: () => dispatch(increment())
    };
}

connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

@connect(mapStateToProps)
class CounterContainer extends React.Component<any, any> {
}

// Ensure connect's first two arguments can be replaced by wrapper functions
interface CounterStateProps {
    value: number;
}
interface CounterDispatchProps {
    onIncrement: () => void;
}
// with higher order functions
connect<CounterStateProps, CounterDispatchProps, {}, CounterState>(
    () => mapStateToProps,
    () => mapDispatchToProps
)(Counter);
// with higher order functions using parameters
connect<CounterStateProps, CounterDispatchProps, {}, CounterState>(
    (initialState: CounterState, ownProps) => mapStateToProps,
    (dispatch: Dispatch, ownProps) => mapDispatchToProps
)(Counter);
// only first argument
connect<CounterStateProps, {}, {}, CounterState>(
    () => mapStateToProps
)(Counter);
// wrap only one argument
connect<CounterStateProps, CounterDispatchProps, {}, CounterState>(
    mapStateToProps,
    () => mapDispatchToProps
)(Counter);
// with extra arguments
connect<CounterStateProps, CounterDispatchProps, {}, CounterStateProps & CounterDispatchProps, CounterState>(
    () => mapStateToProps,
    () => mapDispatchToProps,
    (s: CounterStateProps, d: CounterDispatchProps) =>
        objectAssign({}, s, d),
    { pure: true }
)(Counter);

class App extends React.Component<any, any> {
    render() {
        return null;
    }
}

const targetEl = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), targetEl);

//
// API
// https://github.com/rackt/react-redux/blob/master/docs/api.md
//
declare var store: Store<TodoState>;
class MyRootComponent extends React.Component<any, any> {
}
class TodoApp extends React.Component<any, any> {}
interface TodoState {
    todos: string[]|string;
}
interface TodoProps {
    userId: number;
}
interface DispatchProps {
    addTodo(userId: number, text: string): void;
    action: () => any;
}
declare var actionCreators: () => {
    action: () => any;
};
declare var dispatchActionCreators: () => DispatchProps;
declare var addTodo: () => { type: string; };
declare var todoActionCreators: { [type: string]: (...args: any[]) => any; };
declare var counterActionCreators: { [type: string]: (...args: any[]) => any; };

ReactDOM.render(
    <Provider store={store}>
        <MyRootComponent />
    </Provider>,
    document.body
);

// Inject just dispatch and don't listen to store

const AppWrap = (props: DispatchProp & { children?: React.ReactNode | undefined }) => <div />;
const WrappedApp = connect()(AppWrap);

<WrappedApp />;

// Inject dispatch and every field in the global state

connect((state: TodoState) => state)(TodoApp);

// Inject dispatch and todos

function mapStateToProps2(state: TodoState) {
    return { todos: state.todos };
}

export default connect(mapStateToProps2)(TodoApp);

connect(mapStateToProps2, actionCreators)(TodoApp);

function mapDispatchToProps2(dispatch: Dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
}

connect(mapStateToProps2, mapDispatchToProps2)(TodoApp);

// Inject todos and a specific action creator (addTodo)

function mapDispatchToProps3(dispatch: Dispatch) {
    return bindActionCreators({ addTodo }, dispatch);
}

connect(mapStateToProps2, mapDispatchToProps3)(TodoApp);

// Inject todos, todoActionCreators as todoActions, and counterActionCreators as counterActions

function mapDispatchToProps4(dispatch: Dispatch) {
    return {
        todoActions: bindActionCreators(todoActionCreators, dispatch),
        counterActions: bindActionCreators(counterActionCreators, dispatch)
    };
}

connect(mapStateToProps2, mapDispatchToProps4)(TodoApp);

// Inject todos, and todoActionCreators and counterActionCreators together as actions

function mapDispatchToProps5(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(objectAssign({}, todoActionCreators, counterActionCreators), dispatch)
    };
}

connect(mapStateToProps2, mapDispatchToProps5)(TodoApp);

// Inject todos, and all todoActionCreators and counterActionCreators directly as props

function mapDispatchToProps6(dispatch: Dispatch) {
    return bindActionCreators(objectAssign({}, todoActionCreators, counterActionCreators), dispatch);
}

connect(mapStateToProps2, mapDispatchToProps6)(TodoApp);

// Inject todos of a specific user depending on props

function mapStateToProps3(state: TodoState, ownProps: TodoProps): TodoState {
    return { todos: state.todos[ownProps.userId] };
}

connect(mapStateToProps3)(TodoApp);

// Inject todos of a specific user depending on props, and inject props.userId into the action

function mergeProps(stateProps: TodoState, dispatchProps: DispatchProps, ownProps: TodoProps): DispatchProps & TodoState & TodoProps {
    return objectAssign({}, ownProps, dispatchProps, {
        todos: stateProps.todos[ownProps.userId],
        addTodo: (text: string) => dispatchProps.addTodo(ownProps.userId, text)
    });
}

connect(mapStateToProps2, dispatchActionCreators, mergeProps)(MyRootComponent);

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/14622#issuecomment-279820358
// Allow for undefined mapStateToProps
connect(undefined, mapDispatchToProps6)(TodoApp);

interface TestProp {
    property1: number;
    someOtherProperty?: string | undefined;
}
interface TestState {
    isLoaded: boolean;
    state1: number;
}
class TestComponent extends React.Component<TestProp & DispatchProp, TestState> { }
const WrappedTestComponent = connect()(TestComponent);

// return value of the connect()(TestComponent) is assignable to a ComponentClass<TestProp>
// ie: DispatchProp has been removed through decoration
const ADecoratedTestComponent: React.ComponentClass<TestProp> = WrappedTestComponent;
<WrappedTestComponent property1={42} />;

// @ts-expect-error
const ATestComponent: React.ComponentClass<TestProp> = TestComponent;

// stateless functions
interface HelloMessageProps {
    dispatch: Dispatch;
    name: string;
}
const HelloMessage: React.FunctionComponent<HelloMessageProps> = (props) => {
    return <div>Hello {props.name}</div>;
};
const ConnectedHelloMessage = connect()(HelloMessage);
ReactDOM.render(<ConnectedHelloMessage name="Sebastian" />, document.getElementById('content'));

// stateless functions that uses mapStateToProps and mapDispatchToProps
function TestStatelessFunctionWithMapArguments() {
    interface GreetingProps {
        name: string;
        onClick: () => void;
    }

    function Greeting(props: GreetingProps) {
        return <div>Hello {props.name}</div>;
    }

    const mapStateToProps = (state: any, ownProps: GreetingProps) => {
        return {
            name: 'Connected! ' + ownProps.name
        };
    };

    const mapDispatchToProps = (dispatch: Dispatch, ownProps: GreetingProps) => {
        return {
            onClick: () => {
                dispatch({ type: 'GREETING', name: ownProps.name });
            }
        };
    };

    const ConnectedGreeting = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Greeting);
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/8787
function TestTOwnPropsInference() {
    interface OwnProps {
        own: string;
    }

    interface StateProps {
        state: string;
    }

    class OwnPropsComponent extends React.Component<StateProps & OwnProps & DispatchProp> {
        render() {
            return <div/>;
        }
    }

    function mapStateToPropsWithoutOwnProps(state: any): StateProps {
        return { state: 'string' };
    }

    function mapStateToPropsWithOwnProps(state: any, ownProps: OwnProps): StateProps {
        return { state: 'string' };
    }

    const ConnectedWithoutOwnProps = connect(mapStateToPropsWithoutOwnProps)(OwnPropsComponent);
    const ConnectedWithOwnProps = connect(mapStateToPropsWithOwnProps)(OwnPropsComponent);
    const ConnectedWithTypeHint = connect<StateProps, void, OwnProps>(mapStateToPropsWithoutOwnProps)(OwnPropsComponent);

    // This should not compile, which is good.
    // React.createElement(ConnectedWithoutOwnProps, { anything: 'goes!' });

    // This compiles, as expected.
    React.createElement(ConnectedWithOwnProps, { own: 'string' });

    // This should not compile, which is good.
    // React.createElement(ConnectedWithOwnProps, { anything: 'goes!' });

    // This compiles, as expected.
    React.createElement(ConnectedWithTypeHint, { own: 'string' });

    // This should not compile, which is good.
    // React.createElement(ConnectedWithTypeHint, { anything: 'goes!' });

    interface AllProps {
        own: string;
        state: string;
    }

    class AllPropsComponent extends React.Component<AllProps & DispatchProp> {
        render() {
            return <div/>;
        }
    }

    type PickedOwnProps = Pick<AllProps, "own">;
    type PickedStateProps = Pick<AllProps, "state">;

    const mapStateToPropsForPicked: MapStateToProps<PickedStateProps, PickedOwnProps, {}> = (state: any): PickedStateProps => {
        return { state: "string" };
    };
    const ConnectedWithPickedOwnProps = connect(mapStateToPropsForPicked)(AllPropsComponent);
    <ConnectedWithPickedOwnProps own="blah" />;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16021
function TestMergedPropsInference() {
    interface StateProps {
        state: string;
    }

    interface DispatchProps {
        dispatch: string;
    }

    interface OwnProps {
        own: string;
    }

    interface MergedProps {
        merged: string;
    }

    class MergedPropsComponent extends React.Component<MergedProps> {
        render() {
            return <div/>;
        }
    }

    function mapStateToProps(state: any): StateProps {
        return { state: 'string' };
    }

    function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
        return { dispatch: 'string' };
    }

    const ConnectedWithOwnAndState: React.ComponentClass<OwnProps> = connect<StateProps, void, OwnProps, MergedProps>(
        mapStateToProps,
        undefined,
        (stateProps: StateProps) => ({
            merged: "merged",
        }),
    )(MergedPropsComponent);

    const ConnectedWithOwnAndDispatch: React.ComponentClass<OwnProps> = connect<void, DispatchProps, OwnProps, MergedProps>(
        undefined,
        mapDispatchToProps,
        (stateProps: undefined, dispatchProps: DispatchProps) => ({
            merged: "merged",
        }),
    )(MergedPropsComponent);

    const ConnectedWithOwn: React.ComponentClass<OwnProps> = connect<void, void, OwnProps, MergedProps>(
        undefined,
        undefined,
        () => ({
            merged: "merged",
        }),
    )(MergedPropsComponent);
}

function Issue16652() {
    interface PassedProps {
        commentIds: string[];
    }

    interface GeneratedStateProps {
        comments: Array<({ id: string } | undefined)>;
    }

    class CommentList extends React.Component<PassedProps & GeneratedStateProps & DispatchProp> {}

    const mapStateToProps = (state: any, ownProps: PassedProps): GeneratedStateProps => {
        return {
            comments: ownProps.commentIds.map(id => ({ id })),
        };
    };

    const ConnectedCommentList = connect<GeneratedStateProps, {}, PassedProps>(mapStateToProps)(
        CommentList
    );

    <ConnectedCommentList commentIds={['a', 'b', 'c']} />;
}

function Issue15463() {
    interface SpinnerProps {
        showGlobalSpinner: boolean;
    }

    class SpinnerClass extends React.Component<SpinnerProps & DispatchProp> {
        render() {
            return (<div />);
        }
    }

    const Spinner = connect((state: any) => {
        return { showGlobalSpinner: true };
    })(SpinnerClass);

    <Spinner />;
}

function RemoveInjectedAndPassOnRest() {
    interface TProps {
        showGlobalSpinner: boolean;
        foo: string;
    }
    class SpinnerClass extends React.Component<TProps & DispatchProp> {
        render() {
            return (<div />);
        }
    }

    const Spinner = connect((state: any) => {
        return { showGlobalSpinner: true };
    })(SpinnerClass);

    <Spinner foo='bar' />;
}

function TestControlledComponentWithoutDispatchProp() {
    interface MyState {
        count: number;
    }

    interface MyProps {
        label: string;
        // `dispatch` is optional, but setting it to anything
        // other than Dispatch<T> will cause an error
        //
        // dispatch: Dispatch<any>; // OK
        // dispatch: number; // ERROR
    }

    function mapStateToProps(state: MyState) {
        return {
            label: `The count is ${state.count}`,
        };
    }

    class MyComponent extends React.Component<MyProps> {
        render() {
            return <span>{this.props.label}</span>;
        }
    }

    const MyFuncComponent = (props: MyProps) => (
        <span>{props.label}</span>
    );

    const MyControlledComponent = connect(mapStateToProps)(MyComponent);
    const MyControlledFuncComponent = connect(mapStateToProps)(MyFuncComponent);
}

function TestDispatchToPropsAsObject() {
    const onClick: ActionCreator<{}> = () => ({});
    const mapStateToProps = (state: any) => {
        return {
            title: state.app.title as string,
        };
    };
    const dispatchToProps = {
        onClick,
    };

    type Props = { title: string; } & typeof dispatchToProps;
    const HeaderComponent: React.FunctionComponent<Props> = (props) => {
        return <h1>{props.title}</h1>;
    };

    const Header = connect(mapStateToProps, dispatchToProps)(HeaderComponent);
    <Header />;
}

function TestInferredFunctionalComponentWithExplicitOwnProps() {
    interface Props {
        title: string;
        extraText: string;
        onClick: () => void;
    }

    const Header = connect(
        (
            { app: { title }}: { app: { title: string }},
            { extraText }: { extraText: string }
        ) => ({
            title,
            extraText
        }),
        (dispatch) => ({
            onClick: () => dispatch({ type: 'test' })
        })
    )(({ title, extraText, onClick }: Props) => {
        return <h1 onClick={onClick}>{title} {extraText}</h1>;
    });
    <Header extraText='text'/>;
}

function TestInferredFunctionalComponentWithImplicitOwnProps() {
    interface Props {
        title: string;
        extraText: string;
        onClick: () => void;
    }

    const Header = connect(
        (
            { app: { title }}: { app: { title: string }},
        ) => ({
            title,
        }),
        (dispatch) => ({
            onClick: () => dispatch({ type: 'test' })
        })
    )(({ title, extraText, onClick }: Props) => {
        return <h1 onClick={onClick}>{title} {extraText}</h1>;
    });
    <Header extraText='text'/>;
}

function TestWrappedComponent() {
    interface InnerProps {
        name: string;
    }
    const Inner: React.FunctionComponent<InnerProps> = (props) => {
        return <h1>{props.name}</h1>;
    };

    const mapStateToProps = (state: any) => {
        return {
            name: "Connected",
        };
    };
    const Connected = connect(mapStateToProps)(Inner);

    // `Inner` and `Connected.WrappedComponent` require explicit `name` prop
    const TestInner = (props: any) => <Inner name="Inner" />;
    const TestWrapped = (props: any) => <Connected.WrappedComponent name="Wrapped" />;
    // `Connected` does not require explicit `name` prop
    const TestConnected = (props: any) => <Connected />;
}

function TestCreateProvider() {
    const STORE_KEY = 'myStore';

    const MyStoreProvider = createProvider(STORE_KEY);

    const myStoreConnect: Connect = (
        mapStateToProps?: any,
        mapDispatchToProps?: any,
        mergeProps?: any,
        options: Options = {},
    ) => {
        options.storeKey = STORE_KEY;
        return connect(
            mapStateToProps,
            mapDispatchToProps,
            mergeProps,
            options,
        );
    };

    interface State { a: number; }
    const store = createStore<State, AnyAction, {}, {}>(() => ({ a: 1 }));
    const myStore = createStore<State, AnyAction, {}, {}>(() => ({ a: 2 }));

    interface AProps { a: number; }
    const A = (props: AProps) => (<h1>A is {props.a}</h1>);
    const A1 = connect<AProps, {}, {}, State>(state => state)(A);
    const A2 = myStoreConnect<AProps, {}, {}, State>(state => state)(A);

    const Combined = () => (
        <Provider store={store}>
            <MyStoreProvider store={myStore}>
                <A1 />
                <A2 />
            </MyStoreProvider>
        </Provider>
    );

    // This renders:
    // <h1>A is 1</h1>
    // <h1>A is 2</h1>
    ReactDOM.render(<Combined />, document.body);
}

function TestWithoutTOwnPropsDecoratedInference() {
    interface ForwardedProps {
        forwarded: string;
    }

    interface OwnProps {
        own: string;
    }

    interface StateProps {
        state: string;
    }

    class WithoutOwnPropsComponentClass extends React.Component<ForwardedProps & StateProps & DispatchProp<any>> {
        render() {
            return <div />;
        }
    }

    const WithoutOwnPropsComponentStateless: React.FunctionComponent<ForwardedProps & StateProps & DispatchProp<any>> = () => (<div />);

    function mapStateToProps4(state: any, ownProps: OwnProps): StateProps {
        return { state: 'string' };
    }

    // these decorations should compile, it is perfectly acceptable to receive props and ignore them
    const ConnectedWithOwnPropsClass = connect(mapStateToProps4)(WithoutOwnPropsComponentClass);
    const ConnectedWithOwnPropsStateless = connect(mapStateToProps4)(WithoutOwnPropsComponentStateless);
    const ConnectedWithTypeHintClass = connect<StateProps, void, OwnProps>(mapStateToProps4)(WithoutOwnPropsComponentClass);
    const ConnectedWithTypeHintStateless = connect<StateProps, void, OwnProps>(mapStateToProps4)(WithoutOwnPropsComponentStateless);

    // This should compile
    React.createElement(ConnectedWithOwnPropsClass, { own: 'string', forwarded: 'string' });
    React.createElement(ConnectedWithOwnPropsClass, { own: 'string', forwarded: 'string' });

    // This should not compile, it is missing ForwardedProps
    // @ts-expect-error
    React.createElement(ConnectedWithOwnPropsClass, { own: 'string' });
    // @ts-expect-error
    React.createElement(ConnectedWithOwnPropsStateless, { own: 'string' });

    // This should compile
    React.createElement(ConnectedWithOwnPropsClass, { own: 'string', forwarded: 'string' });
    React.createElement(ConnectedWithOwnPropsStateless, { own: 'string', forwarded: 'string' });

    // This should not compile, it is missing ForwardedProps
    // @ts-expect-error
    React.createElement(ConnectedWithTypeHintClass, { own: 'string' });
    // @ts-expect-error
    React.createElement(ConnectedWithTypeHintStateless, { own: 'string' });

    interface AllProps {
        own: string;
        state: string;
    }

    class AllPropsComponent extends React.Component<AllProps & DispatchProp<any>> {
        render() {
            return <div />;
        }
    }

    type PickedOwnProps = Pick<AllProps, "own">;
    type PickedStateProps = Pick<AllProps, "state">;

    const mapStateToPropsForPicked: MapStateToProps<PickedStateProps, PickedOwnProps, {}> = (state: any): PickedStateProps => {
        return { state: "string" };
    };
    const ConnectedWithPickedOwnProps = connect(mapStateToPropsForPicked)(AllPropsComponent);
    <ConnectedWithPickedOwnProps own="blah" />;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25321#issuecomment-387659500
function ProviderAcceptsStoreWithCustomAction() {
    const reducer: Reducer<
        { foo: number } | undefined,
        { type: "foo"; payload: number }
    > = state => state;

    const store = createStore(reducer);

    const Whatever = () => (
        <Provider store={store}>
            <div>Whatever</div>
        </Provider>
    );
}

function TestOptionalPropsMergedCorrectly() {
    interface OptionalDecorationProps {
        foo: string;
        bar: number;
        optionalProp?: boolean | undefined;
        dependsOnDispatch?: (() => void) | undefined;
    }

    class Component extends React.Component<OptionalDecorationProps> {
        render() {
            return <div />;
        }
    }

    interface MapStateProps {
        foo: string;
        bar: number;
        optionalProp: boolean;
    }

    interface MapDispatchProps {
        dependsOnDispatch: () => void;
    }

    function mapStateToProps(state: any): MapStateProps {
        return {
            foo: 'foo',
            bar: 42,
            optionalProp: true,
        };
    }

    function mapDispatchToProps(dispatch: any): MapDispatchProps {
        return {
            dependsOnDispatch: () => {}
        };
    }

    connect(mapStateToProps, mapDispatchToProps)(Component);
}

function TestMoreGeneralDecorationProps() {
    // connect() should support decoration props that are more permissive
    // than the injected props, as long as the injected props can satisfy
    // the decoration props.
    interface MoreGeneralDecorationProps {
        foo: string | number;
        bar: number | 'foo';
        optionalProp?: boolean | object | undefined;
        dependsOnDispatch?: (() => void) | undefined;
    }

    class Component extends React.Component<MoreGeneralDecorationProps> {
        render() {
            return <div />;
        }
    }

    interface MapStateProps {
        foo: string;
        bar: number;
        optionalProp: boolean;
    }

    interface MapDispatchProps {
        dependsOnDispatch: () => void;
    }

    function mapStateToProps(state: any): MapStateProps {
        return {
            foo: 'foo',
            bar: 42,
            optionalProp: true,
        };
    }

    function mapDispatchToProps(dispatch: any): MapDispatchProps {
        return {
            dependsOnDispatch: () => {}
        };
    }

    connect(mapStateToProps, mapDispatchToProps)(Component);
}

function TestFailsMoreSpecificInjectedProps() {
    interface MoreSpecificDecorationProps {
        foo: string;
        bar: number;
        dependsOnDispatch: () => void;
    }

    class Component extends React.Component<MoreSpecificDecorationProps> {
        render() {
            return <div />;
        }
    }

    interface MapStateProps {
        foo: string | number;
        bar: number | 'foo';
        dependsOnDispatch?: (() => void) | undefined;
    }

    interface MapDispatchProps {
        dependsOnDispatch?: (() => void) | undefined;
    }

    function mapStateToProps(state: any): MapStateProps {
        return {
            foo: 'foo',
            bar: 42,
        };
    }

    function mapDispatchToProps(dispatch: any): MapDispatchProps {
        return {
            dependsOnDispatch: () => {}
        };
    }

    // Since it is possible the injected props could fail to satisfy the decoration props,
    // the following line should fail to compile.
    // @ts-expect-error
    connect(mapStateToProps, mapDispatchToProps)(Component);

    // Confirm that this also fails with functional components
    const FunctionalComponent = (props: MoreSpecificDecorationProps) => null;
    // @ts-expect-error
    connect(mapStateToProps, mapDispatchToProps)(Component);
}

function TestLibraryManagedAttributes() {
    interface OwnProps {
        bar: number;
        fn: () => void;
    }

    interface ExternalOwnProps {
        bar?: number | undefined;
        fn: () => void;
    }

    interface MapStateProps {
        foo: string;
    }

    class Component extends React.Component<OwnProps & MapStateProps> {
        static defaultProps = {
            bar: 0,
        };

        render() {
            return <div />;
        }
    }

    function mapStateToProps(state: any): MapStateProps {
        return {
            foo: 'foo',
        };
    }

    const ConnectedComponent = connect(mapStateToProps)(Component);
    <ConnectedComponent fn={() => {}} />;

    const ConnectedComponent2 = connect<MapStateProps, void, ExternalOwnProps>(mapStateToProps)(Component);
    <ConnectedComponent2 fn={() => {}} />;
}

function TestPropTypes() {
    interface OwnProps {
        bar: number;
        fn: () => void;
    }

    interface MapStateProps {
        foo: string;
    }

    class Component extends React.Component<OwnProps & MapStateProps> {
        static propTypes = {
            foo: PropTypes.string.isRequired,
            bar: PropTypes.number.isRequired,
            fn: PropTypes.func.isRequired,
        };

        render() {
            return <div />;
        }
    }

    function mapStateToProps(state: any): MapStateProps {
        return {
            foo: 'foo',
        };
    }

    const ConnectedComponent = connect(mapStateToProps)(Component);
    <ConnectedComponent fn={() => { }} bar={0} />;

    const ConnectedComponent2 = connect<MapStateProps, void, OwnProps>(mapStateToProps)(Component);
    <ConnectedComponent2 fn={() => { }} bar={0} />;
}
