import { createMacro, MacroError, MacroHandler, MacroParams, Options, References } from "babel-plugin-macros";

const macro = createMacro(
    ({ references, state, babel, config, isBabelMacrosCall, source }: MacroParams) => {
        Object.keys(references).forEach(() => {});
        references.default.forEach(reference => {
            reference; // $ExpectType NodePath<Node>
        });

        const stateType = state; // $ExpectType PluginPass
        stateType.key = "macros";

        const CODE = "example code";
        babel.parse(CODE, err => {
            err; // $ExpectType Error | null
        });

        if (config) {
            config.xyz = 7;
        }

        let isBabelMacrosCallType = isBabelMacrosCall; // $ExpectType boolean
        isBabelMacrosCallType = true;

        let sourceType = source; // $ExpectType string
        sourceType = "sourceType";

        throw new MacroError("testing");
    },
    { configName: "test" },
);
