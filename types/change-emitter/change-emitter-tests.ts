import { createChangeEmitter, ChangeEmitterOf0 } from "change-emitter";

function usage() {
    // https://github.com/acdlite/change-emitter#usage

    const emitter = createChangeEmitter()

    // Called `listen` instead of `subscribe` to avoid confusion with observable spec
    const unlisten = emitter.listen((...args) => {
        console.log(args)
    })

    emitter.emit(1, 2, 3) // logs `[1, 2, 3]`
    unlisten()
    emitter.emit(4, 5, 6) // doesn't log
}

function largerExample() {
    // https://github.com/acdlite/change-emitter#larger-example

    const createStore = (reducer: Function, initialState: any) => {
        let state = initialState
        const emitter = createChangeEmitter()

        function dispatch(action: any) {
            state = reducer(state, action)
            emitter.emit()
            return action
        }

        function getState() {
            return state
        }

        return {
            dispatch,
            getState,
            subscribe: emitter.listen
        }
    }
}

function untypedEmitter() {
    const { emit, listen } = createChangeEmitter();

    const unlisten0 = listen(() => {/* do something */});
    const unlisten1 = listen(value => {/* do something with value */});
    const unlisten2 = listen((value1, value2) => {/* do something with values */});
    const unlistenArgs = listen((...args: any[]) => {/* do something with values */});

    emit();
    emit("hello");
    emit("hello", "world");
    emit(1, 2, 3, 4, 5);

    unlisten0();
    unlisten1();
    unlisten2();
    unlistenArgs();
}

function emitterOf0Args() {
    const { emit, listen }: ChangeEmitterOf0 = createChangeEmitter();

    const unlisten = listen(() => { });
    // const unlisten = listen(value => {}); // SYNTAX ERROR

    emit();
    // emit("hello"); // SYNTAX ERROR

    unlisten();
}

function emitterOf1Args() {
    const { emit, listen } = createChangeEmitter<string>();

    const unlisten = listen(value => { value.length });

    emit("hello");

    unlisten();
}

function emitterOf2Args() {
    const { emit, listen } = createChangeEmitter<string, boolean>();

    const unlisten = listen((value, success) => { value.length > 0 === success });

    emit("hello", true);

    unlisten();
}

function emitterOf3Args() {
    const { emit, listen } = createChangeEmitter<string, boolean, number>();

    const unlisten = listen((value, success, count) => { value.length > count === success });

    emit("hello", true, 3);

    unlisten();
}

function emitterOf4Args() {
    const { emit, listen } = createChangeEmitter<string, boolean, number, Date>();

    const unlisten = listen((v1, v2, v3, v4) => { });

    emit("hello", true, 3, new Date());

    unlisten();
}

function emitterOf5Args() {
    const { emit, listen } = createChangeEmitter<string, boolean, number, Date, string>();

    const unlisten = listen((v1, v2, v3, v4, v5) => { });

    emit("hello", true, 3, new Date(), "world");

    unlisten();
}
