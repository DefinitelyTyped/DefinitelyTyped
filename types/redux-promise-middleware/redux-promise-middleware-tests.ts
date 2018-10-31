import { createStore, applyMiddleware, Store, Dispatch } from "redux";
import promiseMiddleware from "redux-promise-middleware";

declare var rootReducer: (state: any, action: any) => any;
declare var doSomethingAsyncAndReturnPromise: any;
declare var someActionCreator: any;

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware()
)(createStore);

const store: Store<any> = createStoreWithMiddleware(rootReducer);

export function myAsyncActionCreator(data: any) {
  return {
    type: "ACTION",
    payload: {
      promise: doSomethingAsyncAndReturnPromise(data),
      data: data
    }
  };
}

const actionCreator1 = () => ({
  type: "FIRST_ACTION_TYPE",
  payload: {
    promise: Promise.resolve({
      type: "SECOND_ACTION_TYPE",
      payload: "...",
    })
   }
});

const actionCreator2 = () => ({
  type: "FIRST_ACTION_TYPE",
  payload: {
    promise: Promise.resolve((action: string, dispatch: Dispatch<any>, getState: Function) => {
      dispatch({ type: "SECEOND_ACTION_TYPE", payload: "..." });
      dispatch(someActionCreator());
      dispatch({ type: "CHAINED_ACTION", payload: Promise.resolve("...") })
        .then(({ type, value }) => {})
    })
   }
});
