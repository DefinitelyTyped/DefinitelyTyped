import watch = require('redux-watch');

interface DummyState {
    fieldA: {
        fieldB: string;
    };
}

function dummyGetState(): DummyState {
    return {
        fieldA: {
            fieldB: 'some value',
        },
    };
}

const fieldBChangeHandler = (
    newValue: string,
    oldValue: string,
    pathToField: any
) => {};

const fieldBWatchWrapper = watch(
    dummyGetState,
    ['fieldA', 'fieldB']
);

const fieldBWatch = fieldBWatchWrapper(fieldBChangeHandler);
