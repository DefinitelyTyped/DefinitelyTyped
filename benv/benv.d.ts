// Type definitions for benv v3.0.0
// Project: https://github.com/artsy/benv
// Definitions by: drillbits <https://github.com/drillbits>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Benv {
    setup(callback: Function): void;
    expose(_globals: any): void;
    teardown(clearDOM?: boolean): void;
    require(filename: string, globalVarName: string): any;
    render(filename: string, data: any, callback: Function): void;
    requireWithJadeify(filename: string, varNames: string[]): any;
}

declare var benv: Benv
