// tslint:disable-next-line:no-bad-reference
/// <reference path="../ts3.1/globals.d.ts" />

declare namespace NodeJS {
    interface HRTime {
        bigint(): bigint;
    }
}
