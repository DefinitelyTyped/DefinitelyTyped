/// <reference types="chai" />

import { Context } from "mocha";

declare global {
    namespace Chai {
        interface Assertion {
            matchSnapshot(that: Context, hint?: string): void;
            matchSpecificSnapshot(that: Context, options?: {
                hint?: string | undefined;
                name?: string | undefined;
                folder?: string | undefined;
                snapshotPath?: string | undefined;
            }): void;
        }
    }
}

export {};
