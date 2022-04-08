// Type definitions for cancan 3.1
// Project: https://github.com/vadimdemedes/cancan
// Definitions by: Vincent Pang <https://github.com/Vincent-Pang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace CanCan {
    interface Option {
        instanceOf?: (instance: any, model: any) => boolean;
        createError?: () => any;
    }
}

declare class CanCan {
    constructor(options?: CanCan.Option);

    allow<T>(model: any,
             actions: string | ReadonlyArray<string>,
             targets: T | ReadonlyArray<T> | string | ReadonlyArray<string>,
             condition?: object | ((performer: any, target: any, options?: any) => boolean)): void;

    can(performer: any, action: string, target: any, options?: any): boolean;

    cannot(performer: any, action: string, target: any, options?: any): boolean;

    authorize(performer: any, action: string, target: any, options?: any): void;
}

export = CanCan;
