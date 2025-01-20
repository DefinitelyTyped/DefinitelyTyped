import progress, { PluginProgressOptions } from "rollup-plugin-progress";

progress(); // $ExpectType Plugin

progress({ clearLine: true }); // $ExpectType Plugin
