import { css } from "@webpack-blocks/assets";
import { addPlugins, createConfig, entryPoint, env, setMode, setOutput, sourceMaps } from "@webpack-blocks/webpack";

module.exports = createConfig([
    setMode(process.env.NODE_ENV || "development"),
    entryPoint("./src/main.js"),
    setOutput("./build/bundle.js"),
    css(),
    addPlugins([]),
    env("development", [sourceMaps()]),
]);
