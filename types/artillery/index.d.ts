/// <reference types="node" />

import { OptionsOfJSONResponseBody, OptionsOfTextResponseBody, OptionsOfUnknownResponseBody, Response } from "got";
import * as events from "node:events";
import { CookieJar } from "tough-cookie";

export type ActionFn<
    TContextVars extends Record<string, unknown> = Record<string, unknown>,
    TContextFuncs extends Record<string, (...args: any[]) => any> = Record<string, (...args: any[]) => any>,
> = (context: ScenarioContext<TContextVars, TContextFuncs>, ee: EventEmitter, next: Next) => void;

export type BeforeScenarioFn<
    TContextVars extends Record<string, unknown> = Record<string, unknown>,
    TContextFuncs extends Record<string, (...args: any[]) => any> = Record<string, (...args: any[]) => any>,
> = ActionFn<TContextVars, TContextFuncs>;

export type AfterScenarioFn<
    TContextVars extends Record<string, unknown> = Record<string, unknown>,
    TContextFuncs extends Record<string, (...args: any[]) => any> = Record<string, (...args: any[]) => any>,
> = ActionFn<TContextVars, TContextFuncs>;

export type BeforeRequestFn<
    TContextVars extends Record<string, unknown> = Record<string, unknown>,
    TContextFuncs extends Record<string, (...args: any[]) => any> = Record<string, (...args: any[]) => any>,
> = (
    requestParams: RequestParams,
    context: ScenarioContext<TContextVars, TContextFuncs>,
    ee: EventEmitter,
    next: Next,
) => void;

export type AfterResponseFn<
    TContextVars extends Record<string, unknown> = Record<string, unknown>,
    TContextFuncs extends Record<string, (...args: any[]) => any> = Record<string, (...args: any[]) => any>,
> = (
    requestConfig:
        & OptionsOfTextResponseBody
        & OptionsOfJSONResponseBody
        & OptionsOfUnknownResponseBody
        & Record<string, unknown>,
    response: Response,
    context: ScenarioContext<TContextVars, TContextFuncs>,
    ee: EventEmitter,
    next: Next,
) => void;

export interface ScenarioContext<
    TContextVars extends Record<string, unknown> = Record<string, unknown>,
    TContextFuncs extends Record<string, (...args: any[]) => any> = Record<string, (...args: any[]) => any>,
> {
    vars: TContextVars & ContextVars;
    funcs: TContextFuncs & ContextFuncs;
}

export interface ContextVars {
    target: string | undefined;
    $environment: string | undefined;
    $processEnvironment: Record<string, string>;
    $uuid: string;
}

export interface ContextFuncs {
    $randomNumber(max?: number): number;
    // tslint:disable-next-line:unified-signatures
    $randomNumber(min: number, max: number): number;
    $randomString(length?: number): string;
    $template<T>(input: T): T;
}
export type Next = (err?: Error) => void;
export interface EventEmitter extends events.EventEmitter {
    addListener(
        eventName: "counter" | "histogram" | "customStat",
        listener: (name: string, value: number) => void,
    ): this;
    addListener(eventName: "started" | "request", listener: () => void): this;
    addListener(eventName: "error", listener: (error: unknown) => void): this;
    addListener(eventName: "match", listener: (success: boolean, match: Match) => void): this;
    addListener(eventName: "response", listener: (delta: number, code: number, uid: string) => void): this;
    addListener(eventName: string | symbol, listener: (...args: unknown[]) => void): this;
    on(eventName: "counter" | "histogram" | "customStat", listener: (name: string, value: number) => void): this;
    on(eventName: "started" | "request", listener: () => void): this;
    on(eventName: "error", listener: (error: unknown) => void): this;
    on(eventName: "match", listener: (success: boolean, match: Match) => void): this;
    on(eventName: "response", listener: (delta: number, code: number, uid: string) => void): this;
    on(eventName: string | symbol, listener: (...args: unknown[]) => void): this;
    once(eventName: "counter" | "histogram" | "customStat", listener: (name: string, value: number) => void): this;
    once(eventName: "started" | "request", listener: () => void): this;
    once(eventName: "error", listener: (error: unknown) => void): this;
    once(eventName: "match", listener: (success: boolean, match: Match) => void): this;
    once(eventName: "response", listener: (delta: number, code: number, uid: string) => void): this;
    once(eventName: string | symbol, listener: (...args: unknown[]) => void): this;
    removeListener(
        eventName: "counter" | "histogram" | "customStat",
        listener: (name: string, value: number) => void,
    ): this;
    removeListener(eventName: "started" | "request", listener: () => void): this;
    removeListener(eventName: "error", listener: (error: unknown) => void): this;
    removeListener(eventName: "match", listener: (success: boolean, match: Match) => void): this;
    removeListener(eventName: "response", listener: (delta: number, code: number, uid: string) => void): this;
    removeListener(eventName: string | symbol, listener: (...args: unknown[]) => void): this;
    off(eventName: "counter" | "histogram" | "customStat", listener: (name: string, value: number) => void): this;
    off(eventName: "started" | "request", listener: () => void): this;
    off(eventName: "error", listener: (error: unknown) => void): this;
    off(eventName: "match", listener: (success: boolean, match: Match) => void): this;
    off(eventName: "response", listener: (delta: number, code: number, uid: string) => void): this;
    off(eventName: string | symbol, listener: (...args: unknown[]) => void): this;
    emit(eventName: "counter" | "histogram" | "customStat", name: string, value: number): boolean;
    emit(eventName: "started" | "request"): boolean;
    emit(eventName: "error", error: unknown): boolean;
    emit(eventName: "match", success: boolean, match: Match): boolean;
    emit(eventName: "response", delta: number, code: number, uid: string): boolean;
    emit(eventName: string | symbol, ...args: unknown[]): boolean;
    prependListener(
        eventName: "counter" | "histogram" | "customStat",
        listener: (name: string, value: number) => void,
    ): this;
    prependListener(eventName: "started" | "request", listener: () => void): this;
    prependListener(eventName: "error", listener: (error: unknown) => void): this;
    prependListener(eventName: "match", listener: (success: boolean, match: Match) => void): this;
    prependListener(eventName: "response", listener: (delta: number, code: number, uid: string) => void): this;
    prependListener(eventName: string | symbol, listener: (...args: unknown[]) => void): this;
    prependOnceListener(
        eventName: "counter" | "histogram" | "customStat",
        listener: (name: string, value: number) => void,
    ): this;
    prependOnceListener(eventName: "started" | "request", listener: () => void): this;
    prependOnceListener(eventName: "error", listener: (error: unknown) => void): this;
    prependOnceListener(eventName: "match", listener: (success: boolean, match: Match) => void): this;
    prependOnceListener(eventName: "response", listener: (delta: number, code: number, uid: string) => void): this;
    prependOnceListener(eventName: string | symbol, listener: (...args: unknown[]) => void): this;
}

export interface Match {
    expected: string;
    got?: string;
    expression: string;
    strict?: boolean;
}

export interface RequestParams {
    [key: string]: unknown;

    url?: string;
    uri?: string;
    method: string;
    headers: Record<string, string>;
    timeout: number;
    json?: Record<string | number, unknown>;
    form?: Record<string | number, unknown>;
    formData?: Record<string | number, unknown>;
    cookieJar?: CookieJar;
    https?: Record<string, unknown>;
    body?: unknown;
    name?: string;
    followRedirect?: boolean;
    followAllRedirects?: boolean;
    auth?: {
        user: string;
        pass: string;
    };
}
