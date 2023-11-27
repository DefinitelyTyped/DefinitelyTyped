import {
    createSagaTestEngine,
    collectPuts,
    collectCalls,
    collectCallsAndPuts,
    stub,
    throwError,
} from "redux-saga-test-engine";
import { call, put, type Effect } from "redux-saga/effects";

const errorEffect = throwError("Test Error");
// $ExpectType Effect<"@@redux-saga-test-engine/ERROR", string>
errorEffect;

// Testing stub
function* testGenerator(arg: string) {
    yield put({ type: "TEST", payload: arg });
}
const stubbed = stub(testGenerator, "argument");

// @ts-expect-error
const incorrectStubbed = stub(testGenerator);

const testEngine = createSagaTestEngine(["PUT"] as const);
const putEffects = testEngine(testGenerator, [[put({ type: "TEST", payload: "arg" }), null]], "arg");
// $ExpectType Array<Effect<"PUT", any> | Array<Effect<"PUT", any>>>
putEffects;

const puts = collectPuts(testGenerator, [[put({ type: "TEST", payload: "arg" }), null]], "arg");
// $ExpectType Array<Effect<"PUT", any> | Array<Effect<"PUT", any>>>
puts;

const calls = collectCalls(testGenerator, [[put({ type: "TEST", payload: "arg" }), null]], "arg");
// $ExpectType Array<Effect<"CALL", any> | Array<Effect<"CALL", any>>>
calls;

const callsAndPuts = collectCallsAndPuts(testGenerator, [[put({ type: "TEST", payload: "arg" }), null]], "arg");
// $ExpectType Array<Effect<"PUT" | "CALL", any> | Array<Effect<"PUT" | "CALL", any>>>
callsAndPuts;

const identity = <T>(arg: T): T => arg;
function* incorrectGenerator(arg: number) {
    yield call(identity, arg);
}

// @ts-expect-error
const incorrectEngine = createSagaTestEngine(["UNKNOWN_EFFECT_TYPE"] as const);
const incorrectEffects = incorrectEngine(incorrectGenerator, [[call(identity, 123), null]], 123);
