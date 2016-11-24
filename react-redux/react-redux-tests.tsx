/// <reference types="react"/>
/// <reference types="react-dom"/>
/// <reference types="redux" />
/// <reference types="history" />
/// <reference types="react-router" />

import { Component, ReactElement } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, RouterState } from 'react-router';
import { ActionCreator, Store, Dispatch, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import objectAssign = require('object-assign');
import * as History from 'history';

//
// Quick Start
// https://github.com/rackt/react-redux/blob/master/docs/quick-start.md#quick-start
//
namespace TestQuickStartExample {
    interface CounterStateProps {
        value: number;
    }
    interface CounterDispatchProps {
        onIncrement: ActionCreator<CounterState>;
    }
    interface CounterState {
        counter: number;
    }
    declare var increment: Function;

    class Counter extends Component<CounterStateProps & CounterDispatchProps, CounterState> {
        render() {
            return (
                <button onClick={this.props.onIncrement}>
                    {this.props.value}
                </button>
            );
        }
    }

    const mapStateToProps = (state: CounterState) => ({
        value: state.counter
    });

    // Which action creators does it want to receive by props?
    const mapDispatchToProps = (dispatch: Dispatch<CounterState>) => ({
        onIncrement: () => dispatch(increment())
    });

    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Counter);

    // https://github.com/Microsoft/TypeScript/issues/4881
    //@connect(mapStateToProps)
    //class WrappedCounter extends Component<CounterStateProps & CounterDispatchProps, CounterState> {
    //}
    //React.createElement(WrappedCounter, {});
    // As a workaround, declare state and dispatch props as optional
    interface OptionalCounterStateProps {
        value?: number;
    }
    interface OptionalCounterDispatchProps {
        onIncrement?: ActionCreator<CounterState>;
    }
    interface Props {
        requiredOwnProp: string
    }
    @connect(mapStateToProps)
    class WrappedCounter extends Component<Props & OptionalCounterStateProps & OptionalCounterDispatchProps, CounterState> {
    }
    React.createElement(WrappedCounter, { requiredOwnProp: 'here I am' });

    // Ensure connect's first two arguments can be replaced by wrapper functions
    connect<CounterStateProps, CounterDispatchProps, {}>(
        () => mapStateToProps,
        () => mapDispatchToProps
    )(Counter);
    // only first argument
    connect<CounterStateProps, {}, {}>(
        () => mapStateToProps
    )(Counter);
    // wrap only one argument
    connect<CounterStateProps, CounterDispatchProps, {}>(
        mapStateToProps,
        () => mapDispatchToProps
    )(Counter);
    // with extra arguments
    connect<CounterStateProps, CounterDispatchProps, {}, CounterStateProps & CounterDispatchProps>(
        () => mapStateToProps,
        () => mapDispatchToProps,
        (stateProps: CounterStateProps, dispatchProps: CounterDispatchProps) =>
            objectAssign({}, stateProps, dispatchProps),
        { pure: true }
    )(Counter);
}

namespace TestTodosApp {

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
    declare var history: History.History;
    class MyRootComponent extends Component<{}, RouterState> {
    }
    class TodoApp extends Component<any, TodoState> {
    }
    interface TodoState {
        todos: string[] | string;
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

    function mapStateToProps(state: TodoState) {
        return { todos: state.todos };
    }

    connect(mapStateToProps)(TodoApp);

    // Inject todos and all action creators (addTodo, completeTodo, ...)

    //function mapStateToProps(state) {
    //    return { todos: state.todos };
    //}

    connect(mapStateToProps, actionCreators)(TodoApp);

    // Inject todos and all action creators (addTodo, completeTodo, ...) as actions

    //function mapStateToProps(state) {
    //    return { todos: state.todos };
    //}

    function mapDispatchToProps(dispatch: Dispatch<TodoState>) {
        return { actions: bindActionCreators(actionCreators, dispatch) };
    }

    connect(mapStateToProps, mapDispatchToProps)(TodoApp);

    // Inject todos and a specific action creator (addTodo)

    //function mapStateToProps(state) {
    //    return { todos: state.todos };
    //}

    function mapDispatchToProps2(dispatch: Dispatch<TodoState>) {
        return bindActionCreators({ addTodo }, dispatch);
    }

    connect(mapStateToProps, mapDispatchToProps2)(TodoApp);

    // Inject todos, todoActionCreators as todoActions, and counterActionCreators as counterActions

    //function mapStateToProps(state) {
    //    return { todos: state.todos };
    //}

    function mapDispatchToProps3(dispatch: Dispatch<TodoState>) {
        return {
            todoActions: bindActionCreators(todoActionCreators, dispatch),
            counterActions: bindActionCreators(counterActionCreators, dispatch)
        };
    }

    connect(mapStateToProps, mapDispatchToProps3)(TodoApp);

    // Inject todos, and todoActionCreators and counterActionCreators together as actions

    //function mapStateToProps(state) {
    //    return { todos: state.todos };
    //}

    function mapDispatchToProps4(dispatch: Dispatch<TodoState>) {
        return {
            actions: bindActionCreators(objectAssign({}, todoActionCreators, counterActionCreators), dispatch)
        };
    }

    connect(mapStateToProps, mapDispatchToProps4)(TodoApp);

    // Inject todos, and all todoActionCreators and counterActionCreators directly as props

    //function mapStateToProps(state) {
    //    return { todos: state.todos };
    //}

    function mapDispatchToProps5(dispatch: Dispatch<TodoState>) {
        return bindActionCreators(objectAssign({}, todoActionCreators, counterActionCreators), dispatch);
    }

    connect(mapStateToProps, mapDispatchToProps5)(TodoApp);

    // Inject todos of a specific user depending on props

    function mapStateToProps2(state: TodoState, ownProps: TodoProps): TodoState {
        return { todos: state.todos[ownProps.userId] };
    }

    connect(mapStateToProps2)(TodoApp);

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

    connect(mapStateToProps, actionCreators, mergeProps)(TodoApp);
}

namespace TestComponent {
    declare var store: Store<TestState>;
    interface TestProps {
        property1: number;
        someOtherProperty?: string;
    }
    interface TestState {
        isLoaded: boolean;
        state1: number;
    }
    class TestComponent extends Component<TestProps, TestState> {
        static staticMethod(): number {
            return 0;
        }
    }
    // Own properties can't be always be inferred, so a single type parameter will do
    const WrappedTestComponent = connect<TestProps>()(TestComponent);

    // return value of the connect()(TestComponent) is of the type TestComponent
    let ATestComponent: typeof TestComponent = null;
    ATestComponent = TestComponent;
    ATestComponent = WrappedTestComponent;
    // Wrapped component is accessible
    WrappedTestComponent.WrappedComponent === TestComponent
    // Static properties are accessible
    WrappedTestComponent.staticMethod();

    <TestComponent property1={42}/>;
    <WrappedTestComponent property1={42}/>;
    <ATestComponent property1={42}/>;

    class NonComponent {
    }
    // this doesn't compile
    //connect()(NonComponent);

    // stateless functions
    interface HelloMessageProps {
        name: string;
    }
    function HelloMessage(props: HelloMessageProps) {
        return <div>Hello {props.name}</div>;
    }

    const ConnectedHelloMessage = connect<HelloMessageProps>()(HelloMessage);
    ReactDOM.render(<HelloMessage name="Sebastian"/>, document.getElementById('content'));
    ReactDOM.render(<ConnectedHelloMessage name="Sebastian"/>, document.getElementById('content'));
}

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

    React.createElement(ConnectedGreeting, { name: 'hello', onClick: () => undefined });
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
    // React.createElement(ConnectedWithoutOwnProps, { anything: 'goes!' });

    // This compiles, as expected.
    React.createElement(ConnectedWithOwnProps, { own: 'string' });

    // This should not compile, which is good.
    // React.createElement(ConnectedWithOwnProps, { missingOwn: true });

    // This compiles, as expected.
    React.createElement(ConnectedWithTypeHint, { own: 'string' });

    // This should not compile, which is good.
    // React.createElement(ConnectedWithTypeHint, { missingOwn: true });
}
