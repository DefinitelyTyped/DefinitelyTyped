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

const routine_anyargs = createRoutine('ANYARGS');
routine_anyargs();
routine_anyargs('string');
routine_anyargs(42);
routine_anyargs.trigger();
routine_anyargs.trigger('string');
routine_anyargs.trigger(42);
routine_anyargs.request(0, '1');

const routine_noargs = createRoutine('NOARGS', () => {});
routine_noargs();
routine_noargs.trigger();
routine_noargs.trigger('string'); // $ExpectError
routine_noargs.trigger(42); // $ExpectError
routine_noargs.request(0, '1');

const routine_strarg = createRoutine('STRARG', (x: string) => {});
routine_strarg(); // $ExpectError
routine_strarg.trigger(); // $ExpectError
routine_strarg.trigger('string');
routine_strarg.trigger(42); // $ExpectError
routine_strarg.request(0, '1');
