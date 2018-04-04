import { handle, Action } from 'redux-pack';

interface Foo {
    id: string;
}
interface FooState {
    foo: Foo | null;
    error: string | null;
    isLoading: boolean;
    currentUser: {
        id: string;
    };
}

// https://github.com/lelandrichardson/redux-pack/tree/v0.1.5#logging-beforeafter
declare const Api: {
    getFoo(id: string): Promise<Foo>;
};
declare function logSuccess(foo: Foo): void;
function loadFoo(id: string): Action<FooState, Foo> {
  return {
    type: LOAD_FOO,
    promise: Api.getFoo(id),
    meta: {
      onSuccess: logSuccess
    },
  };
}

// https://github.com/lelandrichardson/redux-pack/tree/v0.1.5#using-the-handle-helper
const LOAD_FOO = 'LOAD_FOO';
declare const initialState: FooState;
function fooReducer(state = initialState, action: Action<FooState, Foo, string | null>) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_FOO:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true, error: null, foo: null }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: payload as string }),
        success: prevState => ({ ...prevState, foo: payload as Foo }),
        always: prevState => prevState, // unnecessary, for the sake of example
      });
    default:
      return state;
  }
}

// https://github.com/lelandrichardson/redux-pack/tree/v0.1.5#adding-side-effects-with-event-hooks
const DO_FOO = 'DO_FOO';
declare function doFoo(): Promise<Foo>;
declare function sendAnalytics(action: string, data: {
    userId: string,
    fooId: string,
}): void;
function userDoesFoo(): Action<FooState, Foo> {
  return {
    type: DO_FOO,
    promise: doFoo(),
    meta: {
      onSuccess: (result, getState) => {
        const userId = getState().currentUser.id;
        const fooId = result.id;
        sendAnalytics('USER_DID_FOO', {
          userId,
          fooId,
        });
      }
    }
  };
}
