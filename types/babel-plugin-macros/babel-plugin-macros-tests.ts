import { createMacro, MacroError, References, Options, MacroParams, MacroHandler } from 'babel-plugin-macros';

const macro = createMacro(
    ({ references, state, babel }) => {
        Object.keys(references).forEach(() => {});
        references.default.forEach(() => {});
        state.abc = 123;
        babel.parse("console.log('Hello world!')");
        throw new MacroError('testing');
    },
    { configName: 'test' },
);

macro() === 'Hello world!';
