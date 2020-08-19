// tslint:disable-next-line:no-bad-reference
/// <reference path="../process.d.ts" />

declare module 'process' {
    global {
        namespace NodeJS {
            interface HRTime {
                bigint(): bigint;
            }
        }
    }
}
