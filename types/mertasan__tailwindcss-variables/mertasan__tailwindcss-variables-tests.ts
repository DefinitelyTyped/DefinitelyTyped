import * as variablesPlugin from "@mertasan/tailwindcss-variables";
import * as variablesApi from "@mertasan/tailwindcss-variables/api";
import colorVariable = require("@mertasan/tailwindcss-variables/colorVariable");
import type { Config } from "tailwindcss";
import * as plugin from "tailwindcss/plugin";

const config: Config = {
    content: [],
    theme: {
        colors: {
            primary: colorVariable("--colors-primary"),
        },
    },
    plugins: [
        variablesPlugin,
        variablesPlugin({
            colorVariables: true,
            darkToRoot: true,
            extendColors: {},
            forceRGB: true,
            toBase: true,
            variablePrefix: "admin",
        }),
        plugin(({ addComponents }) => {
            addComponents(variablesApi.variables({}, {}));
            addComponents(variablesApi.darkVariables({}, {}, "class"));
            addComponents(variablesApi.getComponents(".form", {}));
        }),
    ],
};
