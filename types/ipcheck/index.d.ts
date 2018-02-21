// Type definitions for ipcheck
// Project: https://github.com/gosquared/ipcheck
// Definitions by: Ben Grynhaus <https://github.com/bengry/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface IPCheck {
    address: number[];
    input: string;
    ipv: 4 | 6 | 0;
    mask: number;
    valid: boolean;

    match(cidr: IPCheck | string): boolean;
}

interface IPCheckConstructor {
    new (input: string): IPCheck;
}

interface IPCheckStatic extends IPCheckConstructor {
    match(ip: IPCheck | string, cidr: IPCheck | string): boolean;
}

declare module "ipcheck" {
    var ipcheck: IPCheckStatic;

    export = ipcheck;
}

declare var ipcheck: IPCheckStatic;
