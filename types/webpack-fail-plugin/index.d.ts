declare module "webpack-fail-plugin" {
    import { Plugin } from "webpack";

    /**
     * Webpack plugin that will make the process return status code 1 when it finishes with errors in single-run mode.
     */
    function WebpackFailPlugin(): Plugin;

    export = WebpackFailPlugin;
}
