import { css } from "@webpack-blocks/assets";
import postcss from "@webpack-blocks/postcss";
import { createConfig, match } from "@webpack-blocks/webpack";

createConfig([match(["*.css", "!*node_modules*"], [css(), postcss()])]);

createConfig([
    css(),
    postcss({
        plugins: [],
    }),
]);
