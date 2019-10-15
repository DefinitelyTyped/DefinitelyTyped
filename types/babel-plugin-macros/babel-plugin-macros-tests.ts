import { createMacro, MacroError, MacroParams } from 'babel-plugin-macros';

const macro = createMacro<() => 'Hello world!', { abc: number }>(
    ({ references, state, babel }: MacroParams<{ abc: number }>) => {
        references.forEach(() => {});
        references.default.forEach(() => {});
        state.abc = 123;
        babel.parse("console.log('Hello world!')");
        throw new MacroError('testing');
    },
    { configName: 'test' },
);

macro() === 'Hello world!';
