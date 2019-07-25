// Type definitions for minapp-env 1.0
// Project: https://github.com/chobits4/minapp-env (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: chobits4 <https://github.com/chobits4>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.8

/// <reference path="./lib.wx.app.d.ts" />
/// <reference path="./lib.wx.page.d.ts" />
/// <reference path="./lib.wx.api.d.ts" />
/// <reference path="./lib.wx.cloud.d.ts" />

declare type IAnyObject = Record<string, any>
declare type Exclude<T, U> = T extends U ? never : T;

declare type KVInfer<T> = {
  [K in keyof T]: T[K]
}

declare type Void<T> = T | undefined | null

type PartialOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>

type Optional<T> = {
  [K in keyof T]+?: T[K]
}
