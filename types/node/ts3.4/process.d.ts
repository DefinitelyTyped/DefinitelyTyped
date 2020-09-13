// tslint:disable-next-line:no-bad-reference
/// <reference path="../ts3.1/process.d.ts" />

declare module 'process' {
    global {
        namespace NodeJS {
            interface HRTime {
                bigint(): bigint;
            }
        }
    }
}
