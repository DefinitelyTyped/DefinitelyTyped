import { Component, ReactElement } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, Dispatch, bindActionCreators } from 'redux';
import { connect, Provider, DispatchProp, MapStateToProps } from 'react-redux';
import objectAssign = require('object-assign');

//
// Quick Start
// https://github.com/rackt/react-redux/blob/master/docs/quick-start.md#quick-start
//

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
function mapDispatchToProps(dispatch: Dispatch<CounterState>) {
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
connect<ICounterStateProps, ICounterDispatchProps, {}>(
    () => mapStateToProps,
    () => mapDispatchToProps
)(Counter);
// with higher order functions using parameters
connect<ICounterStateProps, ICounterDispatchProps, {}>(
    (initialState: CounterState, ownProps: {}) => mapStateToProps,
    (dispatch: Dispatch<CounterState>, ownProps: {}) => mapDispatchToProps
)(Counter);
// only first argument
connect<ICounterStateProps, {}, {}>(
    () => mapStateToProps
)(Counter);
// wrap only one argument
connect<ICounterStateProps, ICounterDispatchProps, {}>(
    mapStateToProps,
    () => mapDispatchToProps
)(Counter);
// with extra arguments
connect<ICounterStateProps, ICounterDispatchProps, {}, ICounterStateProps & ICounterDispatchProps>(
    () => mapStateToProps,
    () => mapDispatchToProps,
    (s: ICounterStateProps, d: ICounterDispatchProps) =>
        objectAssign({}, s, d),
    { pure: true }
)(Counter);


class App extends Component<any, any> {
    render(): JSX.Element {
        // ...
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

const AppWrap = (props: DispatchProp<any> & { children?: React.ReactNode }) => <div />
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

function mapDispatchToProps2(dispatch: Dispatch<TodoState>) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
}

connect(mapStateToProps2, mapDispatchToProps2)(TodoApp);

// Inject todos and a specific action creator (addTodo)

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

function mapDispatchToProps3(dispatch: Dispatch<TodoState>) {
    return bindActionCreators({ addTodo }, dispatch);
}

connect(mapStateToProps2, mapDispatchToProps3)(TodoApp);

// Inject todos, todoActionCreators as todoActions, and counterActionCreators as counterActions

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

function mapDispatchToProps4(dispatch: Dispatch<TodoState>) {
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

function mapDispatchToProps5(dispatch: Dispatch<TodoState>) {
    return {
        actions: bindActionCreators(objectAssign({}, todoActionCreators, counterActionCreators), dispatch)
    };
}

connect(mapStateToProps2, mapDispatchToProps5)(TodoApp);

// Inject todos, and all todoActionCreators and counterActionCreators directly as props

//function mapStateToProps(state) {
//    return { todos: state.todos };
//}

function mapDispatchToProps6(dispatch: Dispatch<TodoState>) {
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

connect(mapStateToProps2, actionCreators, mergeProps)(MyRootComponent);


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
class TestComponent extends Component<TestProp & DispatchProp<any>, TestState> { }
const WrappedTestComponent = connect()(TestComponent);

// return value of the connect()(TestComponent) is of the type TestComponent
let ATestComponent: React.ComponentClass<TestProp> = null;
ATestComponent = TestComponent;
ATestComponent = WrappedTestComponent;

let anElement: ReactElement<TestProp>;
<WrappedTestComponent property1={42} />;
<ATestComponent property1={42} />;

class NonComponent {}
// this doesn't compile
//connect()(NonComponent);

// stateless functions
interface HelloMessageProps { name: string; }
function HelloMessage(props: HelloMessageProps) {
    return <div>Hello {props.name}</div>;
}
let ConnectedHelloMessage = connect()(HelloMessage);
ReactDOM.render(<HelloMessage name="Sebastian" />, document.getElementById('content'));
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

    const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: GreetingProps) => {
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

    class OwnPropsComponent extends React.Component<StateProps & OwnProps & DispatchProp<any>> {
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

    class AllPropsComponent extends React.Component<AllProps & DispatchProp<any>> {
        render() {
            return <div/>;
        }
    }

    type PickedOwnProps = Pick<AllProps, "own">
    type PickedStateProps = Pick<AllProps, "state">

    const mapStateToPropsForPicked: MapStateToProps<PickedStateProps, PickedOwnProps> = (state: any): PickedStateProps => {
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

    function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
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

    class CommentList extends React.Component<PassedProps & GeneratedStateProps & DispatchProp<any>> {}

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
    class SpinnerClass extends React.Component<ISpinnerProps & DispatchProp<any>, undefined> {
        render() {
            return (<div />);
        }
    }

    export const Spinner = connect((state: any) => {
        return { showGlobalSpinner: true };
    })(SpinnerClass);

    <Spinner />
}
