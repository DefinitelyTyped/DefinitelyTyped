// Type definitions for ipcheck 0.1
// Project: https://github.com/gosquared/ipcheck
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare const ipcheck: ipcheck.IPCheckStatic;
export = ipcheck;
export as namespace ipcheck;

declare namespace ipcheck {
    // tslint:disable-next-line:interface-name
    interface IPCheck {
        address: number[];
        input: string;
        ipv: 4 | 6 | 0;
        mask: number;
        valid: boolean;

        match(cidr: IPCheck | string): boolean;
    }

    // tslint:disable-next-line:interface-name
    interface IPCheckConstructor {
        new (input: string): IPCheck;
    }

    // tslint:disable-next-line:interface-name
    interface IPCheckStatic extends IPCheckConstructor {
        match(ip: IPCheck | string, cidr: IPCheck | string): boolean;
    }
}
