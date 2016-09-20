/// <reference path="react-redux.d.ts" />
/// <reference path="../react/react.d.ts"/>
/// <reference path="../react/react-dom.d.ts"/>
/// <reference path="../redux/redux.d.ts" />
/// <reference path="../history/history.d.ts" />
/// <reference path="../react-router/react-router.d.ts" />
/// <reference path="../object-assign/object-assign.d.ts" />

import { Component, ReactElement } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, RouterState } from 'react-router';
import { Store, Dispatch, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
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
connect<ICounterStateProps, ICounterDispatchProps, {}>(
    () => mapStateToProps,
    () => mapDispatchToProps
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
connect<ICounterStateProps, ICounterDispatchProps, {}>(
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
declare var routerState: RouterState;
declare var history: HistoryModule.History;
class MyRootComponent extends Component<any, any> {

}
class TodoApp extends Component<any, any> {

}
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


//TODO: for React Router 1.0
ReactDOM.render(
    <Provider store={store}>
        {() => <Router history={history}>...</Router>}
    </Provider>,
    targetEl
);

// Inject just dispatch and don't listen to store

connect()(TodoApp);

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

connect(mapStateToProps2, actionCreators, mergeProps)(TodoApp);





interface TestProp {
    property1: number;
    someOtherProperty?: string;
}
interface TestState {
    isLoaded: boolean;
    state1: number;
}
class TestComponent extends Component<TestProp, TestState> { }
const WrappedTestComponent = connect()(TestComponent);

// return value of the connect()(TestComponent) is of the type TestComponent
let ATestComponent: typeof TestComponent = null;
ATestComponent = TestComponent;
ATestComponent = WrappedTestComponent;

let anElement: ReactElement<TestProp>;
<TestComponent property1={42} />;
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

    class OwnPropsComponent extends React.Component<OwnProps & StateProps, {}> {
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
    const ConnectedWithTypeHint = connect<StateProps, {}, OwnProps>(mapStateToPropsWithoutOwnProps)(OwnPropsComponent);

    // This compiles, which is bad.
    React.createElement(ConnectedWithoutOwnProps, { anything: 'goes!' });

    // This compiles, as expected.
    React.createElement(ConnectedWithOwnProps, { own: 'string' });

    // This should not compile, which is good.
    // React.createElement(ConnectedWithOwnProps, { missingOwn: true });

    // This compiles, as expected.
    React.createElement(ConnectedWithTypeHint, { own: 'string' });

    // This should not compile, which is good.
    // React.createElement(ConnectedWithTypeHint, { missingOwn: true });
}
