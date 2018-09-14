import { Component, ReactElement } from 'react';
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

namespace Empty {
    interface OwnProps { foo: string, dispatch: Dispatch }

    class TestComponent extends Component<OwnProps> {}

    const Test = connect()(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapState {
    interface OwnProps { foo: string }
    interface StateProps { bar: number }

    class TestComponent extends Component<OwnProps & StateProps> {}

    const mapStateToProps = (_: any) => ({
        bar: 1
    })

    const Test = connect(
        mapStateToProps
    )(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapStateWithDispatchProp {
    interface OwnProps { foo: string }
    interface StateProps { bar: number, dispatch: Dispatch }

    class TestComponent extends Component<OwnProps & StateProps> {}

    const mapStateToProps = (_: any) => ({
        bar: 1
    })

    const Test = connect(
        mapStateToProps
    )(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapStateFactory {
    interface OwnProps { foo: string }
    interface StateProps { bar: number }

    class TestComponent extends Component<OwnProps & StateProps> {}

    const mapStateToProps = () => () => ({
        bar: 1
    })

    const Test = connect(
        mapStateToProps
    )(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapDispatch {
    interface OwnProps { foo: string }
    interface DispatchProps { onClick: () => void }

    class TestComponent extends Component<OwnProps & DispatchProps> {}

    const mapDispatchToProps = () => ({
        onClick: () => {}
    })

    const TestNull = connect(
        null,
        mapDispatchToProps,
    )(TestComponent)

    const verifyNull = <TestNull foo='bar' />

    const TestUndefined = connect(
        undefined,
        mapDispatchToProps,
    )(TestComponent)

    const verifyUndefined = <TestUndefined foo='bar' />
}

namespace MapStateAndDispatchObject {
    interface ClickPayload { count: number }
    const onClick: ActionCreator<ClickPayload> = () => ({ count: 1 });
    const dispatchToProps = {
        onClick,
    };

    interface OwnProps { foo: string }
    interface StateProps { bar: number }
    interface DispatchProps { onClick: ActionCreator<ClickPayload> }

    const mapStateToProps = (_: any, __: OwnProps): StateProps => ({
        bar: 1
    })

    class TestComponent extends Component<OwnProps & StateProps & DispatchProps> {}

    const Test = connect(
        mapStateToProps,
        dispatchToProps,
    )(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapDispatchFactory {
    interface OwnProps { foo: string }
    interface DispatchProps { onClick: () => void }

    class TestComponent extends Component<OwnProps & DispatchProps> {}

    const mapDispatchToPropsFactory = () => () => ({
        onClick: () => {}
    })

    const TestNull = connect(
        null,
        mapDispatchToPropsFactory,
    )(TestComponent)

    const verifyNull = <TestNull foo='bar' />

    const TestUndefined = connect(
        undefined,
        mapDispatchToPropsFactory,
    )(TestComponent)

    const verifyUndefined = <TestUndefined foo='bar' />
}

namespace MapStateAndDispatch {
    interface OwnProps { foo: string }
    interface StateProps { bar: number }
    interface DispatchProps { onClick: () => void }

    class TestComponent extends Component<OwnProps & StateProps & DispatchProps> {}

    const mapStateToProps = () => ({
        bar: 1
    })

    const mapDispatchToProps = () => ({
        onClick: () => {}
    })

    const Test = connect(
        mapStateToProps,
        mapDispatchToProps,
    )(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapStateFactoryAndDispatch {
    interface OwnProps { foo: string }
    interface StateProps { bar: number }
    interface DispatchProps { onClick: () => void }

    const mapStateToPropsFactory = () => () =>({
        bar: 1
    })

    const mapDispatchToProps = () => ({
        onClick: () => {}
    })

    class TestComponent extends Component<OwnProps & StateProps & DispatchProps> {}

    const Test = connect(
        mapStateToPropsFactory,
        mapDispatchToProps,
    )(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapStateFactoryAndDispatchFactory {
    interface OwnProps { foo: string }
    interface StateProps { bar: number }
    interface DispatchProps { onClick: () => void }

    const mapStateToPropsFactory = () => () =>({
        bar: 1
    })

    const mapDispatchToPropsFactory = () => () => ({
        onClick: () => {}
    })

    class TestComponent extends Component<OwnProps & StateProps & DispatchProps> {}

    const Test = connect(
        mapStateToPropsFactory,
        mapDispatchToPropsFactory,
    )(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapStateAndDispatchAndMerge {
    interface OwnProps { foo: string }
    interface StateProps { bar: number }
    interface DispatchProps { onClick: () => void }

    class TestComponent extends Component<OwnProps & StateProps & DispatchProps> {}

    const mapStateToProps = () => ({
        bar: 1
    })

    const mapDispatchToProps = () => ({
        onClick: () => {}
    })

    const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => (
        Object.assign({}, stateProps, dispatchProps)
    )

    const Test = connect(
        mapStateToProps,
        mapDispatchToProps,
        mergeProps,
    )(TestComponent)

    const verify = <Test foo='bar' />
}

namespace MapStateAndOptions {
    interface State { state: string; }
    interface OwnProps { foo: string }
    interface StateProps { bar: number }
    interface DispatchProps { dispatch: Dispatch }

    class TestComponent extends Component<OwnProps & StateProps & DispatchProps> {}

    const mapStateToProps = (state: State) => ({
        bar: 1
    })

    const areStatePropsEqual = (next: StateProps, current: StateProps) => true;

    const Test = connect<StateProps, DispatchProps, OwnProps, State>(
        mapStateToProps,
        null,
        null,
        {
            pure: true,
            areStatePropsEqual,
        }
    )(TestComponent)

    const verify = <Test foo='bar' />
}

interface CounterState {
    counter: number;
}
declare var increment: Function;

class Counter extends Component<any, any> {
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
class CounterContainer extends Component<any, any> {

}

// Ensure connect's first two arguments can be replaced by wrapper functions
interface ICounterStateProps {
    value: number
}
interface ICounterDispatchProps {
    onIncrement: () => void
}
// with higher order functions
connect<ICounterStateProps, ICounterDispatchProps, {}, CounterState>(
    () => mapStateToProps,
    () => mapDispatchToProps
)(Counter);
// with higher order functions using parameters
connect<ICounterStateProps, ICounterDispatchProps, {}, CounterState>(
    (initialState: CounterState, ownProps) => mapStateToProps,
    (dispatch: Dispatch, ownProps) => mapDispatchToProps
)(Counter);
// only first argument
connect<ICounterStateProps, {}, {}, CounterState>(
    () => mapStateToProps
)(Counter);
// wrap only one argument
connect<ICounterStateProps, ICounterDispatchProps, {}, CounterState>(
    mapStateToProps,
    () => mapDispatchToProps
)(Counter);
// with extra arguments
connect<ICounterStateProps, ICounterDispatchProps, {}, ICounterStateProps & ICounterDispatchProps, CounterState>(
    () => mapStateToProps,
    () => mapDispatchToProps,
    (s: ICounterStateProps, d: ICounterDispatchProps) =>
        objectAssign({}, s, d),
    { pure: true }
)(Counter);


class App extends Component<any, any> {
    render() {
        return null;
    }
}

const targetEl = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
        {() => <App />}
    </Provider>
), targetEl);

//
// API
// https://github.com/rackt/react-redux/blob/master/docs/api.md
//
declare var store: Store<TodoState>;
class MyRootComponent extends Component<any, any> {

}
class TodoApp extends Component<any, any> {}
interface TodoState {
    todos: string[]|string;
}
interface TodoProps {
    userId: number;
}
interface DispatchProps {
    addTodo(userId: number, text: string): void;
    action: Function;
}
declare var actionCreators: () => {
    action: Function;
}
declare var dispatchActionCreators: () => DispatchProps;
declare var addTodo: () => { type: string; };
declare var todoActionCreators: { [type: string]: (...args: any[]) => any; };
declare var counterActionCreators: { [type: string]: (...args: any[]) => any; };

ReactDOM.render(
    <Provider store={store}>
        {() => <MyRootComponent />}
    </Provider>,
    document.body
);

//TODO: for React Router 0.13
////TODO: error TS2339: Property 'run' does not exist on type 'typeof "react-router"'.
////TODO: error TS2339: Property 'HistoryLocation' does not exist on type 'typeof "react-router"'.
//declare var routes: any;
//Router.run(routes, Router.HistoryLocation, (Handler, routerState) => { // note "routerState" here
//    ReactDOM.render(
//        <Provider store={store}>
//            {/*
//             //TODO: error TS2339: Property 'routerState' does not exist on type 'RouteProp'.
//             {() => <Handler routerState={routerState} />} // note "routerState" here: important to pass it down
//            */}
//        </Provider>,
//        document.getElementById('root')
//    );
//});

// Inject just dispatch and don't listen to store

const AppWrap = (props: DispatchProp & { children?: React.ReactNode }) => <div />
const WrappedApp = connect()(AppWrap);

<WrappedApp />

// Inject dispatch and every field in the global state

connect((state: TodoState) => state)(TodoApp);

// Inject dispatch and todos

function mapStateToProps2(state: TodoState) {
    return { todos: state.todos };
}

export default connect(mapStateToProps2)(TodoApp);

// Inject todos and all action creators (addTodo, completeTodo, ...)

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

connect(mapStateToProps2, actionCreators)(TodoApp);

// Inject todos and all action creators (addTodo, completeTodo, ...) as actions

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

function mapDispatchToProps2(dispatch: Dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
}

connect(mapStateToProps2, mapDispatchToProps2)(TodoApp);

// Inject todos and a specific action creator (addTodo)

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

function mapDispatchToProps3(dispatch: Dispatch) {
    return bindActionCreators({ addTodo }, dispatch);
}

connect(mapStateToProps2, mapDispatchToProps3)(TodoApp);

// Inject todos, todoActionCreators as todoActions, and counterActionCreators as counterActions

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

function mapDispatchToProps4(dispatch: Dispatch) {
    return {
        todoActions: bindActionCreators(todoActionCreators, dispatch),
        counterActions: bindActionCreators(counterActionCreators, dispatch)
    };
}

connect(mapStateToProps2, mapDispatchToProps4)(TodoApp);

// Inject todos, and todoActionCreators and counterActionCreators together as actions

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

function mapDispatchToProps5(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(objectAssign({}, todoActionCreators, counterActionCreators), dispatch)
    };
}

connect(mapStateToProps2, mapDispatchToProps5)(TodoApp);

// Inject todos, and all todoActionCreators and counterActionCreators directly as props

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

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

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

function mergeProps(stateProps: TodoState, dispatchProps: DispatchProps, ownProps: TodoProps): DispatchProps & TodoState & TodoProps {
    return objectAssign({}, ownProps, dispatchProps, {
        todos: stateProps.todos[ownProps.userId],
        addTodo: (text: string) => dispatchProps.addTodo(ownProps.userId, text)
    });
}

connect(mapStateToProps2, dispatchActionCreators, mergeProps)(MyRootComponent);


//https://github.com/DefinitelyTyped/DefinitelyTyped/issues/14622#issuecomment-279820358
//Allow for undefined mapStateToProps
connect(undefined, mapDispatchToProps6)(TodoApp);

interface TestProp {
    property1: number;
    someOtherProperty?: string;
}
interface TestState {
    isLoaded: boolean;
    state1: number;
}
class TestComponent extends Component<TestProp & DispatchProp, TestState> { }
const WrappedTestComponent = connect()(TestComponent);

// return value of the connect()(TestComponent) is assignable to a ComponentClass<TestProp>
// ie: DispatchProp has been removed through decoration
const ADecoratedTestComponent: React.ComponentClass<TestProp> = WrappedTestComponent;
<WrappedTestComponent property1={42} />;

const ATestComponent: React.ComponentClass<TestProp> = TestComponent;  // $ExpectError

class NonComponent {}
// this doesn't compile
//connect()(NonComponent);

// stateless functions
interface HelloMessageProps {
    dispatch: Dispatch
    name: string;
 }
const HelloMessage: React.StatelessComponent<HelloMessageProps> = (props) => {
    return <div>Hello {props.name}</div>;
}
let ConnectedHelloMessage = connect()(HelloMessage);
ReactDOM.render(<ConnectedHelloMessage name="Sebastian" />, document.getElementById('content'));

// stateless functions that uses mapStateToProps and mapDispatchToProps
namespace TestStatelessFunctionWithMapArguments {
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
namespace TestTOwnPropsInference {
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
        own: string
        state: string
    }

    class AllPropsComponent extends React.Component<AllProps & DispatchProp> {
        render() {
            return <div/>;
        }
    }

    type PickedOwnProps = Pick<AllProps, "own">
    type PickedStateProps = Pick<AllProps, "state">

    const mapStateToPropsForPicked: MapStateToProps<PickedStateProps, PickedOwnProps, {}> = (state: any): PickedStateProps => {
        return { state: "string" }
    }
    const ConnectedWithPickedOwnProps = connect(mapStateToPropsForPicked)(AllPropsComponent);
    <ConnectedWithPickedOwnProps own="blah" />
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16021
namespace TestMergedPropsInference {
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

namespace Issue16652 {
    interface PassedProps {
        commentIds: string[];
    }

    interface GeneratedStateProps {
        comments: ({ id: string } | undefined)[];
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

    <ConnectedCommentList commentIds={['a', 'b', 'c']} />
}

namespace Issue15463 {
    interface ISpinnerProps{
        showGlobalSpinner: boolean;
    }

    class SpinnerClass extends React.Component<ISpinnerProps & DispatchProp> {
        render() {
            return (<div />);
        }
    }

    export const Spinner = connect((state: any) => {
        return { showGlobalSpinner: true };
    })(SpinnerClass);

    <Spinner />
}

namespace RemoveInjectedAndPassOnRest {
    interface TProps {
        showGlobalSpinner: boolean;
        foo: string;
    }
    class SpinnerClass extends React.Component<TProps & DispatchProp, {}> {
        render() {
            return (<div />);
        }
    }

    export const Spinner = connect((state: any) => {
        return { showGlobalSpinner: true };
    })(SpinnerClass);

    <Spinner foo='bar' />
}

namespace TestControlledComponentWithoutDispatchProp {

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
        }
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

namespace TestDispatchToPropsAsObject {
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
	const HeaderComponent: React.StatelessComponent<Props> = (props) => {
		return <h1>{props.title}</h1>;
	}

	const Header = connect(mapStateToProps, dispatchToProps)(HeaderComponent);
	<Header />
}

namespace TestInferredFunctionalComponentWithExplicitOwnProps {
  type Props = {
    title: string,
    extraText: string,
    onClick: () => void,
  };

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
	<Header extraText='text'/>
}

namespace TestInferredFunctionalComponentWithImplicitOwnProps {

  type Props = {
    title: string,
    extraText: string,
    onClick: () => void,
  };

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
	<Header extraText='text'/>
}

namespace TestWrappedComponent {
    type InnerProps = {
        name: string,
    };
    const Inner: React.StatelessComponent<InnerProps> = (props) => {
        return <h1>{props.name}</h1>;
    }

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

namespace TestCreateProvider {
    const STORE_KEY = 'myStore';

    const MyStoreProvider = createProvider(STORE_KEY);

    const myStoreConnect: Connect = function(
        mapStateToProps?: any,
        mapDispatchToProps?: any,
        mergeProps?: any,
        options: Options = {},
    ) {
        options.storeKey = STORE_KEY;
        return connect(
            mapStateToProps,
            mapDispatchToProps,
            mergeProps,
            options,
        );
    };

    interface State { a: number };
    const store = createStore<State, AnyAction, {}, {}>(() => ({ a: 1 }));
    const myStore = createStore<State, AnyAction, {}, {}>(() => ({ a: 2 }));

    interface AProps { a: number };
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

namespace TestWithoutTOwnPropsDecoratedInference {

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

    const WithoutOwnPropsComponentStateless: React.StatelessComponent<ForwardedProps & StateProps & DispatchProp<any>> = () => (<div />);

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
    React.createElement(ConnectedWithOwnPropsClass, { own: 'string' }); // $ExpectError
    React.createElement(ConnectedWithOwnPropsStateless, { own: 'string' }); // $ExpectError

    // This should compile
    React.createElement(ConnectedWithOwnPropsClass, { own: 'string', forwarded: 'string' });
    React.createElement(ConnectedWithOwnPropsStateless, { own: 'string', forwarded: 'string' });

    // This should not compile, it is missing ForwardedProps
    React.createElement(ConnectedWithTypeHintClass, { own: 'string' });  // $ExpectError
    React.createElement(ConnectedWithTypeHintStateless, { own: 'string' });  // $ExpectError

    interface AllProps {
        own: string
        state: string
    }

    class AllPropsComponent extends React.Component<AllProps & DispatchProp<any>> {
        render() {
            return <div />;
        }
    }

    type PickedOwnProps = Pick<AllProps, "own">
    type PickedStateProps = Pick<AllProps, "state">

    const mapStateToPropsForPicked: MapStateToProps<PickedStateProps, PickedOwnProps, {}> = (state: any): PickedStateProps => {
        return { state: "string" }
    }
    const ConnectedWithPickedOwnProps = connect(mapStateToPropsForPicked)(AllPropsComponent);
    <ConnectedWithPickedOwnProps own="blah" />
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25321#issuecomment-387659500
namespace ProviderAcceptsStoreWithCustomAction {
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

namespace TestOptionalPropsMergedCorrectly {
  interface OptionalDecorationProps {
    foo: string,
    bar: number,
    optionalProp?: boolean,
    dependsOnDispatch?: () => void,
  }

  class Component extends React.Component<OptionalDecorationProps> {
      render () {
          return <div />;
      }
  }

  type MapStateProps = {
      foo: string,
      bar: number,
      optionalProp: boolean,
  }

  type MapDispatchProps = {
    dependsOnDispatch: () => void
  }

  function mapStateToProps (state: any): MapStateProps {
    return {
        foo: 'foo',
        bar: 42,
        optionalProp: true,
    };
  }

  function mapDispatchToProps (dispatch: any): MapDispatchProps {
    return {
      dependsOnDispatch: () => {}
    };
  }

  connect(mapStateToProps, mapDispatchToProps)(Component)
}

namespace TestMoreGeneralDecorationProps {
  // connect() should support decoration props that are more permissive
  // than the injected props, as long as the injected props can satisfy
  // the decoration props.
  interface MoreGeneralDecorationProps {
    foo: string | number,
    bar: number | 'foo',
    optionalProp?: boolean | Object,
    dependsOnDispatch?: () => void,
  }

  class Component extends React.Component<MoreGeneralDecorationProps> {
      render () {
          return <div />;
      }
  }

  type MapStateProps = {
      foo: string,
      bar: number,
      optionalProp: boolean,
  }

  type MapDispatchProps = {
    dependsOnDispatch: () => void
  }

  function mapStateToProps (state: any): MapStateProps {
    return {
        foo: 'foo',
        bar: 42,
        optionalProp: true,
    };
  }

  function mapDispatchToProps (dispatch: any): MapDispatchProps {
    return {
      dependsOnDispatch: () => {}
    };
  }

  connect(mapStateToProps, mapDispatchToProps)(Component)
}

namespace TestFailsMoreSpecificInjectedProps {
  interface MoreSpecificDecorationProps {
    foo: string,
    bar: number,
    dependsOnDispatch: () => void,
  }

  class Component extends React.Component<MoreSpecificDecorationProps> {
      render () {
          return <div />;
      }
  }

  type MapStateProps = {
    foo: string | number,
    bar: number | 'foo',
    dependsOnDispatch?: () => void,
  }

  type MapDispatchProps = {
    dependsOnDispatch?: () => void
  }

  function mapStateToProps (state: any): MapStateProps {
    return {
        foo: 'foo',
        bar: 42,
    };
  }

  function mapDispatchToProps (dispatch: any): MapDispatchProps {
    return {
      dependsOnDispatch: () => {}
    };
  }

  // Since it is possible the injected props could fail to satisfy the decoration props,
  // the following line should fail to compile.
  connect(mapStateToProps, mapDispatchToProps)(Component) // $ExpectError

  // Confirm that this also fails with functional components
  const FunctionalComponent = (props: MoreSpecificDecorationProps) => null
  connect(mapStateToProps, mapDispatchToProps)(Component) // $ExpectError

}

namespace TestLibraryManagedAttributes {
	interface OwnProps {
		bar: number,
		fn: () => void,
	}

	type MapStateProps = {
		foo: string,
	}

	class Component extends React.Component<OwnProps & MapStateProps> {
		static defaultProps = {
			bar: 0,
		}

		render () {
			return <div />;
		}
	}

	function mapStateToProps (state: any): MapStateProps {
		return {
			foo: 'foo',
		};
	}

	const ConnectedComponent = connect(mapStateToProps)(Component);
	<ConnectedComponent fn={() => {}} />

	const ConnectedComponent2 = connect<MapStateProps, void, OwnProps>(mapStateToProps)(Component);
	<ConnectedComponent2 fn={() => {}} />
}
