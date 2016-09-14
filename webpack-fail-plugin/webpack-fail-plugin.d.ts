// Type definitions for webpack-fail-plugin v1.0.5
// Project: https://github.com/TiddoLangerak/webpack-fail-plugin
// Definitions by: Simon Hartcher <https://github.com/deevus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="webpack" />

declare module "webpack-fail-plugin" {
    import {Plugin} from "webpack";

    /**
     * Webpack plugin that will make the process return status code 1 when it finishes with errors in single-run mode.
    */
    function WebpackFailPlugin(): Plugin;

    export = WebpackFailPlugin;
}
