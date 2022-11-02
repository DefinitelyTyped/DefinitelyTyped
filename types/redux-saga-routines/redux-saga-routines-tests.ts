import {
    routinePromiseWatcherSaga,
    Routine,
    ReduxFormPayload,
    bindRoutineToReduxForm,
    promisifyRoutine,
    bindPromiseCreators,
    ROUTINE_PROMISE_ACTION,
    createRoutine,
    PayloadTypeOrUndefinable
} from 'redux-saga-routines';

import { ActionFunction0, ActionFunction1, ActionFunctionAny, Action } from 'redux-actions';

type specific_number = PayloadTypeOrUndefinable<number>; // $ExpectType number
type specific_struct = PayloadTypeOrUndefinable<{ value: string; }>; // $ExpectType { value: string; }
type nonspecific_any = PayloadTypeOrUndefinable<any>; // $ExpectType {} | undefined
type nonspecific_struct = PayloadTypeOrUndefinable<{}>; // $ExpectType {} | undefined

const routine_anyargs = createRoutine('ANYARGS');
routine_anyargs();
routine_anyargs('string');
routine_anyargs(42);
routine_anyargs.trigger();
routine_anyargs.trigger('string');
routine_anyargs.trigger(42);
routine_anyargs.request();

const promisified_routine_anyargs = promisifyRoutine(routine_anyargs);
const bound_promisified_routine_anyargs = bindPromiseCreators(promisified_routine_anyargs, (_: any) => _);
bound_promisified_routine_anyargs();
bound_promisified_routine_anyargs('string');
bound_promisified_routine_anyargs(42);

const routine_noargs = createRoutine('NOARGS', () => {});
routine_noargs();
routine_noargs.trigger();
// @ts-expect-error
routine_noargs.trigger('string');
// @ts-expect-error
routine_noargs.trigger(42);
routine_noargs.request();

const promisified_routine_noargs = promisifyRoutine(routine_noargs);
const bound_promisified_routine_noargs = bindPromiseCreators(promisified_routine_noargs, (_: any) => _);
bound_promisified_routine_noargs();
// @ts-expect-error
bound_promisified_routine_noargs('string');
// @ts-expect-error
bound_promisified_routine_noargs(42);

const routine_strarg = createRoutine('STRARG', (x: string) => x);
// @ts-expect-error
routine_strarg();
// @ts-expect-error
routine_strarg.trigger();
routine_strarg.trigger('string');
// @ts-expect-error
routine_strarg.trigger(42);
// @ts-expect-error
routine_strarg.request();
routine_strarg.request('string');

const promisified_routine_strarg = promisifyRoutine(routine_strarg);
const bound_promisified_routine_strarg = bindPromiseCreators(promisified_routine_strarg, (_: any) => _);
// @ts-expect-error
bound_promisified_routine_strarg();
bound_promisified_routine_strarg('string');
// @ts-expect-error
bound_promisified_routine_strarg(42);

const routine_multiple_creators = createRoutine('MULTIPLE_CREATORS', {
    trigger: () => {},
    REQUEST: (arg: number) => arg,
    success: (a: object, b: object, c: object, d: object, e: number) => e,
    fulfill: (result: string, content: any) => {},
});
routine_multiple_creators();
// @ts-expect-error
routine_multiple_creators.trigger('string');
// @ts-expect-error
routine_multiple_creators.request();
// @ts-expect-error
routine_multiple_creators.request('string');
routine_multiple_creators.request(42);
routine_multiple_creators.success();
routine_multiple_creators.success('string');
routine_multiple_creators.success(42);
// @ts-expect-error
routine_multiple_creators.fulfill();
// @ts-expect-error
routine_multiple_creators.fulfill(1, 'string');
routine_multiple_creators.fulfill('string', {});
