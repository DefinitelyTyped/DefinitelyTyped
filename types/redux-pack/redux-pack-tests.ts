import { handle, Action, MetaPayload, LIFECYCLE } from 'redux-pack';

interface Foo {
  id: string;
}
interface FooState {
  foo: Foo | null;
  bar: string;
  error: boolean;
  errorMsg: string;
  isLoading: boolean;
  metaPropOne: string;
  metaPropTwo: string;
  currentUser: {
    id: string;
  };
}

// https://github.com/lelandrichardson/redux-pack/tree/v0.1.5#logging-beforeafter
declare const Api: {
  getFoo(id: string): Promise<Foo>;
};

declare function logSuccess(foo: Foo): void;

interface MetaOne { propOne: string; }
function loadFoo(id: string): Action<FooState, Foo, {}, {}, MetaOne> {
  return {
    type: LOAD_FOO,
    promise: Api.getFoo(id),
    meta: {
      onSuccess: logSuccess,
      // pass custom metadata through to reducer
      // allowed by library, and a common redux pattern
      // https://github.com/lelandrichardson/redux-pack/blob/7818ffd4304d5f0e2c94056f3626a399fc9a5a10/src/middleware.js#L44
      propOne: 'some meta'
    },
  };
}

interface MetaTwo { propTwo: string; }
function barError(): Action<FooState, Foo, {}, {}, MetaTwo> {
  return {
    type: BAR_ERROR,
    error: true,
    payload: new Error('this is an error action'),
    meta: {
      propTwo: 'other meta'
    }
  };
}

// bad (non-FSA action):
function baz(baz: string): Action<FooState, Foo> {
  return {
    type: 'BAZ',
    // boo: baz // <-- will not compile, shape of action is not FSA
    // see line 62 & 63 of index.d.ts
  };
}

// https://github.com/lelandrichardson/redux-pack/tree/v0.1.5#using-the-handle-helper
const LOAD_FOO = 'LOAD_FOO';
const BAR_ERROR = 'BAR_ERROR';
declare const initialState: FooState;
function fooReducer(state = initialState, action: Action<FooState, Foo, string | null, {}, MetaOne & MetaTwo>) {
  const { type, payload } = action;
  switch (type) {
    // example of non-redux-pack action
    // works as long as action is FSA compliant
    case BAR_ERROR:
      return {
        ...state,
        error: action.error,
        errorMsg: action.payload,
        metaPropTwo: action.meta && action.meta.propTwo
      };
    case LOAD_FOO:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true, error: false, foo: null }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: true, errorMsg: payload as string }),
        // must define both state and action params to correctly scope action (to access custom meta)
        success: (prevState, action) => ({ ...prevState, foo: payload as Foo, metaPropOne: action.meta.propOne }),
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

// It should work fine with the success lifecycle
const payloadMeta: MetaPayload<{}> = {
  'redux-pack/LIFECYCLE': LIFECYCLE.SUCCESS
};
