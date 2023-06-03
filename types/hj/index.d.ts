// Type definitions for non-npm package Hotjar Tracking Code 0.0
// Project: https://help.hotjar.com/hc/en-us/articles/115009336727
//          https://help.hotjar.com/hc/en-us/articles/6164366461719
//          https://help.hotjar.com/hc/en-us/articles/360038394053
// Definitions by: Glenn Gijsberts <https://github.com/glenngijsberts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type UserAttributes = Record<string | number, string | number | Date | boolean>;

type UserId = string | undefined;

declare function hj(type: 'identify', userId: UserId, userAttributes: UserAttributes): void;
declare function hj(type: 'event', eventName: string): void;
