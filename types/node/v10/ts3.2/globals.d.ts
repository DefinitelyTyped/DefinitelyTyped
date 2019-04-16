// tslint:disable-next-line:no-bad-reference
/// <reference path="../globals.d.ts" />

declare namespace NodeJS {
    interface HRTime {
        bigint(): bigint;
    }
}
