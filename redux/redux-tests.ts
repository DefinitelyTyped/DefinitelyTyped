/// <reference path="./redux.d.ts" />

// Simple counter test using the global Redux var

(function() {
    type State = number;

    function counter(state: State, action: R.Action) {
        if (!state) {
            state = 0;
        }
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }

    function loggingMiddleware() {
        return (next: Redux.Dispatch<State>) => (action: any) => {
            console.log(action.type);
            next(action);
        };
    }

    let createStoreWithMiddleware = Redux.applyMiddleware(loggingMiddleware)(Redux.createStore);
    let store = createStoreWithMiddleware(counter);


    store.subscribe(() =>
        console.log(store.getState())
    );

    store.dispatch({ type: 'INCREMENT' });
}());

// Tests based on the TypeScript tests found in https://github.com/reactjs/redux/tree/master/test/typescript

import * as R from "redux";

// actionCreators.ts

declare const dispatch: R.Dispatch<any>;

(function() {
    interface AddTodoAction extends R.Action {
      text: string;
    }

    const addTodo: R.ActionCreator<AddTodoAction> = (text: string) => ({
      type: 'ADD_TODO',
      text
    })

    const addTodoAction: AddTodoAction = addTodo('test');

    type AddTodoThunk = (dispatch: R.Dispatch<any>) => AddTodoAction;

    const addTodoViaThunk: R.ActionCreator<AddTodoThunk> = (text: string) =>
      (dispatch: R.Dispatch<any>) => ({
        type: 'ADD_TODO',
        text
      })

    const boundAddTodo = R.bindActionCreators(addTodo, dispatch);

    const dispatchedAddTodoAction: AddTodoAction = boundAddTodo('test');


    const boundAddTodoViaThunk = R.bindActionCreators<
      R.ActionCreator<AddTodoThunk>,
      R.ActionCreator<AddTodoAction>
    >(addTodoViaThunk, dispatch)

    const dispatchedAddTodoViaThunkAction: AddTodoAction =
      boundAddTodoViaThunk('test');


    const boundActionCreators = R.bindActionCreators({addTodo}, dispatch);

    const otherDispatchedAddTodoAction: AddTodoAction =
      boundActionCreators.addTodo('test');


    interface M extends R.ActionCreatorsMapObject {
      addTodoViaThunk: R.ActionCreator<AddTodoThunk>
    }

    interface N extends R.ActionCreatorsMapObject {
      addTodoViaThunk: R.ActionCreator<AddTodoAction>
    }

    const boundActionCreators2 = R.bindActionCreators<M, N>({
      addTodoViaThunk
    }, dispatch)

    const otherDispatchedAddTodoAction2: AddTodoAction =
      boundActionCreators2.addTodoViaThunk('test');
}());

// actions.ts

namespace FSA {
  interface Action<P> extends R.Action {
    payload: P;
  }

  const action: Action<string> = {
    type: 'ACTION_TYPE',
    payload: 'test',
  }

  const payload: string = action.payload;
}


namespace FreeShapeAction {
  interface Action extends R.Action {
    [key: string]: any;
  }

  const action: Action = {
    type: 'ACTION_TYPE',
    text: 'test',
  }

  const text: string = action['text'];
}


namespace StringLiteralTypeAction {
  type ActionType = 'A' | 'B' | 'C';

  interface Action extends R.Action {
    type: ActionType;
  }

  const action: Action = {
    type: 'A'
  }

  const type: ActionType = action.type;
}


namespace EnumTypeAction {
  enum ActionType {
    A, B, C
  }

  interface Action extends R.Action {
    type: ActionType;
  }

  const action: Action = {
    type: ActionType.A
  }

  const type: ActionType = action.type;
}

// compose.ts

(function() {
    const numberToNumber = (a: number): number => a + 2;
    const numberToString = (a: number): string => "foo";
    const stringToNumber = (a: string): number => 5;

    const t1: number = R.compose(numberToNumber, numberToNumber)(5);
    const t2: string = R.compose(numberToString, numberToNumber)(5);
    const t3: string = R.compose(numberToString, stringToNumber)("f");
    const t4: (a: string) => number = R.compose(
      (f: (a: string) => number) => ((p: string) => 5),
      (f: (a: number) => string) => ((p: string) => 4)
    )(numberToString);


    const t5: number = R.compose(stringToNumber, numberToString, numberToNumber)(5);
    const t6: string = R.compose(numberToString, stringToNumber, numberToString, numberToNumber)(5);

    const t7: string = R.compose<string>(
      numberToString, numberToNumber, stringToNumber, numberToString, stringToNumber)("fo");
}());

// dispatch.ts

// thunk
declare module "redux" {
    export interface Dispatch<S> {
        <R>(asyncAction: (dispatch: Dispatch<S>, getState: () => S) => R): R;
    }
}

(function() {
    const dispatchResult: R.Action = dispatch({type: 'TYPE'});

    const dispatchThunkResult: number = dispatch(() => 42);
    const dispatchedTimerId: number = dispatch(d => setTimeout(() => d({type: 'TYPE'}), 1000));
}());

// middleware.ts

declare module "redux" {
    export interface Dispatch<S> {
        <R>(asyncAction: (dispatch: Dispatch<S>, getState: () => S) => R): R;
    }
}

(function() {
    type Thunk<S, O> = (dispatch: R.Dispatch<S>, getState: () => S) => O;

    const thunkMiddleware: R.Middleware =
      <S>({dispatch, getState}: R.MiddlewareAPI<S>) =>
        (next: R.Dispatch<S>) =>
          <A extends R.Action, B>(action: A | Thunk<S, B>): B|R.Action =>
            typeof action === 'function' ?
              (<Thunk<S, B>>action)(dispatch, getState) :
              next(<A>action)


    const loggerMiddleware: R.Middleware =
      <S>({getState}: R.MiddlewareAPI<S>) =>
        (next: R.Dispatch<S>) =>
          (action: any): any => {
            console.log('will dispatch', action)

            // Call the next dispatch method in the middleware chain.
            const returnValue = next(action)

            console.log('state after dispatch', getState())

            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue
          }



    type State = {
      todos: string[];
    }

    const reducer: R.Reducer<State> = (state: State, action: R.Action): State => {
      return state;
    }

    const storeWithThunkMiddleware = R.createStore(
      reducer,
      R.applyMiddleware(thunkMiddleware)
    );

    storeWithThunkMiddleware.dispatch(
      (dispatch, getState) => {
        const todos: string[] = getState().todos;
        dispatch({type: 'ADD_TODO'})
      }
    )


    const storeWithMultipleMiddleware = R.createStore(
      reducer,
      R.applyMiddleware(loggerMiddleware, thunkMiddleware)
    )
}());

// reducers.ts

(function() {
    type TodosState = string[];

    interface AddTodoAction extends R.Action {
      text: string;
    }

    const todosReducer: R.Reducer<TodosState> = (state: TodosState,
                                               action: R.Action): TodosState => {
      switch (action.type) {
        case 'ADD_TODO':
          return [...state, (<AddTodoAction>action).text]
        default:
          return state
      }
    }

    const todosState: TodosState = todosReducer([], {
      type: 'ADD_TODO',
      text: 'test',
    });


    type CounterState = number;


    const counterReducer: R.Reducer<CounterState> = (
      state: CounterState, action: R.Action
    ): CounterState => {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1
        default:
          return state
      }
    }


    type RootState = {
      todos: TodosState;
      counter: CounterState;
    }


    const rootReducer: R.Reducer<RootState> = R.combineReducers<RootState>({
      todos: todosReducer,
      counter: counterReducer,
    })

    const rootState: RootState = rootReducer(undefined, {
      type: 'ADD_TODO',
      text: 'test',
    })
}());

// store.ts

(function() {
    type State = {
      todos: string[];
    }

    const reducer: R.Reducer<State> = (state: State, action: R.Action): State => {
      return state;
    }


    /* createStore */

    const store: R.Store<State> = R.createStore<State>(reducer);

    const storeWithPreloadedState: R.Store<State> = R.createStore(reducer, {
      todos: []
    });

    const genericEnhancer: R.GenericStoreEnhancer = <S>(next: R.StoreEnhancerStoreCreator<S>) => next;
    const specificEnhencer: R.StoreEnhancer<State> = next => next;

    const storeWithGenericEnhancer: R.Store<State> = R.createStore(reducer, genericEnhancer);
    const storeWithSpecificEnhancer: R.Store<State> = R.createStore(reducer, specificEnhencer);

    const storeWithPreloadedStateAndEnhancer: R.Store<State> = R.createStore(reducer, {
      todos: []
    }, genericEnhancer);


    /* dispatch */

    store.dispatch({
      type: 'ADD_TODO',
      text: 'test'
    })


    /* getState */

    const state: State = store.getState();


    /* subscribe / unsubscribe */

    const unsubscribe: R.Unsubscribe = store.subscribe(() => {
      console.log('Current state:', store.getState())
    })

    unsubscribe();


    /* replaceReducer */

    const newReducer: R.Reducer<State> = (state: State, action: R.Action): State => {
      return state;
    }

    store.replaceReducer(newReducer);
}());