import { css } from "@webpack-blocks/assets";
import extractText from "@webpack-blocks/extract-text";
import { createConfig, env, match } from "@webpack-blocks/webpack";

createConfig([extractText("path/to/output.file")]);

createConfig([match("*.css", [css(), env("production", [extractText()])])]);
