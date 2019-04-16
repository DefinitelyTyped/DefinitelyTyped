import {
    routinePromiseWatcherSaga,
    Routine,
    ReduxFormPayload,
    bindRoutineToReduxForm,
    promisifyRoutine,
    bindPromiseCreators,
    ROUTINE_PROMISE_ACTION,
    createRoutine,
} from 'redux-saga-routines';

import {
    ActionFunction0,
    ActionFunction1,
    ActionFunctionAny,
    Action
} from 'redux-actions';

const routine_anyargs = createRoutine('ANYARGS');
routine_anyargs();
routine_anyargs('string');
routine_anyargs(42);
routine_anyargs.trigger();
routine_anyargs.trigger('string');
routine_anyargs.trigger(42);
routine_anyargs.request();

const routine_noargs = createRoutine('NOARGS', () => {});
routine_noargs();
routine_noargs.trigger();
routine_noargs.trigger('string'); // $ExpectError
routine_noargs.trigger(42); // $ExpectError
routine_noargs.request();

const routine_strarg = createRoutine('STRARG', (x: string) => {});
routine_strarg(); // $ExpectError
routine_strarg.trigger(); // $ExpectError
routine_strarg.trigger('string');
routine_strarg.trigger(42); // $ExpectError
routine_strarg.request(); // $ExpectError
routine_strarg.request('string');

const routine_multiple_creators = createRoutine('MULTIPLE_CREATORS', {
    trigger: () => {},
    REQUEST: (arg: number) => arg,
    success: (a: object, b: object, c: object, d: object, e: number) => e,
    fulfill: (result: string, content: any) => {},
});
routine_multiple_creators();
routine_multiple_creators.trigger('string'); // $ExpectError
routine_multiple_creators.request(); // $ExpectError
routine_multiple_creators.request('string'); // $ExpectError
routine_multiple_creators.request(42);
routine_multiple_creators.success();
routine_multiple_creators.success('string');
routine_multiple_creators.success(42);
routine_multiple_creators.fulfill(); // $ExpectError
routine_multiple_creators.fulfill(1, 'string'); // $ExpectError
routine_multiple_creators.fulfill('string', {});
