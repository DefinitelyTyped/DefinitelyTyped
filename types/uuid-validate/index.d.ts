// Type definitions for uuid-validate 0.0
// Project: https://github.com/mixer/uuid-validate
// Definitions by: Hiromi Shikata <https://github.com/HiromiShikata>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function validate(uuid: string, version?: number): boolean;
declare namespace validate {
    function version(uuid: string): number;
}
export = validate;
