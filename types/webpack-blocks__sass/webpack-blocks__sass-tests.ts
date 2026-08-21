import { css } from "@webpack-blocks/assets";
import extractText from "@webpack-blocks/extract-text";
import postcss from "@webpack-blocks/postcss";
import sass from "@webpack-blocks/sass";
import { createConfig, env, match } from "@webpack-blocks/webpack";

createConfig([match("*.scss", [css(), sass(), postcss({ plugins: [] })])]);

createConfig([match("*.scss", [css.modules(), sass()])]);

createConfig([match("*.scss", [css(), sass(), env("production", [extractText()])])]);

createConfig([match(["*.scss", "!*node_modules*"], [css(), sass()])]);
