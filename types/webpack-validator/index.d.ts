// Type definitions for webpack-validator v2.2.6
// Project: https://github.com/js-dxtools/webpack-validator
// Definitions by: Simon Hartcher <https://github.com/deevus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

declare module "webpack-validator" {
    import { Configuration } from "webpack";

    interface ValidationOptions {
        "no-root-files-node-modules-nameclash"?: boolean;
        "loader-enforce-include-or-exclude"?: boolean;
        "loader-prefer-include"?: boolean;
    }

    /**
     * Validate your webpack configs with joi
     */
    function Validate(config: Configuration): Configuration;
    /**
     * Validate your webpack configs with joi
     */
    function Validate(config: Configuration, options: ValidationOptions): Configuration;

    export = Validate;
}
