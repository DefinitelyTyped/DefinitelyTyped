import watch, * as RW from 'redux-watch';

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

const fieldBChangeHandler: RW.ChangeHandler<string> = (
    newValue: string,
    oldValue: string,
    pathToField: RW.FieldPath
) => {};

const fieldBWatchWrapper: RW.ChangeHandlerWrapper<string> = watch(
    dummyGetState,
    ['fieldA', 'fieldB']
);

const fieldBWatch: RW.FieldWatch = fieldBWatchWrapper(fieldBChangeHandler);
