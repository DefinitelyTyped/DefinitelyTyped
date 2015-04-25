// Type definitions for business-rules-engine - v1.0.20
// Project: https://github.com/rsamec/form
// Definitions by: Roman Samec <https://github.com/rsamec>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
declare module Utils {
    class StringFce {
        static format(s: string, args: any): string;
    }
    class NumberFce {
        static GetNegDigits(value: string): number;
    }
}
declare module "node-utils" {export = Utils;}
