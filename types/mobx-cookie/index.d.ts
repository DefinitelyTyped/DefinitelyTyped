// Type definitions for mobx-cookie 1.1
// Project: https://github.com/will-stone/mobx-cookie#readme
// Definitions by: Duong Tran <https://github.com/t49tran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { CookieAttributes } from 'js-cookie';

declare class MobxCookie {
    constructor(name: string, options?: CookieAttributes);

    get(): any;
    set(value: any, options?: CookieAttributes): void;
    remove(): void;
}

export default MobxCookie;
