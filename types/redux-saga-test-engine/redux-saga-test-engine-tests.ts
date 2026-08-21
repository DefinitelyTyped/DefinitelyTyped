import { type Effect } from "@redux-saga/types";
import {
    collectCalls,
    collectCallsAndPuts,
    collectPuts,
    createSagaTestEngine,
    stub,
    throwError,
} from "redux-saga-test-engine";

function put<TPayload>(payload: TPayload): Effect<"PUT", TPayload> {
    return {
        "@@redux-saga/IO": true,
        combinator: false,
        type: "PUT",
        payload,
    };
}

function call<TFunc extends (..._args: any[]) => any>(
    fn: TFunc,
    ...args: any[]
): Effect<"CALL", { fn: TFunc; args: any[] }> {
    return {
        "@@redux-saga/IO": true,
        combinator: false,
        type: "CALL",
        payload: {
            fn,
            args,
        },
    };
}

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
// $ExpectType (Effect<"PUT", any> | Effect<"PUT", any>[])[]
putEffects;

const puts = collectPuts(testGenerator, [[put({ type: "TEST", payload: "arg" }), null]], "arg");
// $ExpectType (Effect<"PUT", any> | Effect<"PUT", any>[])[]
puts;

const calls = collectCalls(testGenerator, [[put({ type: "TEST", payload: "arg" }), null]], "arg");
// $ExpectType (Effect<"CALL", any> | Effect<"CALL", any>[])[]
calls;

const callsAndPuts = collectCallsAndPuts(testGenerator, [[put({ type: "TEST", payload: "arg" }), null]], "arg");
// $ExpectType (Effect<"PUT" | "CALL", any> | Effect<"PUT" | "CALL", any>[])[]
callsAndPuts;

const identity = <T>(arg: T): T => arg;
function* incorrectGenerator(arg: number) {
    yield call(identity, arg);
}

// @ts-expect-error
const incorrectEngine = createSagaTestEngine(["UNKNOWN_EFFECT_TYPE"] as const);
const incorrectEffects = incorrectEngine(incorrectGenerator, [[call(identity, 123), null]], 123);
