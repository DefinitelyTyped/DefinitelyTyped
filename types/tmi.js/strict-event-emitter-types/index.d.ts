/**
 * Copyright 2018 bterlson <https://github.com/bterlson/strict-event-emitter-types>
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose
 * with or without fee is hereby granted, provided that the above copyright notice
 * and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
 * OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
 * TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
 * THIS SOFTWARE.
 */

declare const assignmentCompatibilityHack: unique symbol;
export type MatchingKeys<TRecord, TMatch, K extends keyof TRecord = keyof TRecord> = K extends (TRecord[K] extends TMatch ? K : never) ? K : never;
export type VoidKeys<Record> = MatchingKeys<Record, void>;
export interface TypeRecord<T, U, V> {
    ' _emitterType'?: T;
    ' _eventsType'?: U;
    ' _emitType'?: V;
}
export type ReturnTypeOfMethod<T> = T extends (...args: any[]) => any ? ReturnType<T> : never;
export type ReturnTypeOfMethodIfExists<T, S extends string> = S extends keyof T ? ReturnTypeOfMethod<T[S]> : never;
export type InnerEEMethodReturnType<T, TValue, FValue> = T extends (...args: any[]) => any ? ReturnType<T> extends never | undefined ? FValue : TValue : FValue;
export type EEMethodReturnType<T, S extends string, TValue, FValue = void> = S extends keyof T ? InnerEEMethodReturnType<T[S], TValue, FValue> : FValue;
type ListenerType<T> = [T] extends [(...args: infer U) => any] ? U : [T] extends [never] ? [] : [T];
export interface OverriddenMethods<TEmitter, TEventRecord, TEmitRecord = TEventRecord> {
    on<P extends keyof TEventRecord, T>(this: T, event: P, listener: (...args: ListenerType<TEventRecord[P]>) => void): EEMethodReturnType<TEmitter, 'on', T>;
    on(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
    addListener<P extends keyof TEventRecord, T>(this: T, event: P, listener: (...args: ListenerType<TEventRecord[P]>) => void): EEMethodReturnType<TEmitter, 'addListener', T>;
    addListener(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
    addEventListener<P extends keyof TEventRecord, T>(this: T, event: P, listener: (...args: ListenerType<TEventRecord[P]>) => void): EEMethodReturnType<TEmitter, 'addEventListener', T>;
    addEventListener(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
    removeListener<T>(this: T, event: keyof TEventRecord, listener: (...args: any[]) => any): EEMethodReturnType<TEmitter, 'removeListener', T>;
    removeListener(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
    removeEventListener<T>(this: T, event: keyof TEventRecord, listener: (...args: any[]) => any): EEMethodReturnType<TEmitter, 'removeEventListener', T>;
    removeEventListener(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
    once<P extends keyof TEventRecord, T>(this: T, event: P, listener: (...args: ListenerType<TEventRecord[P]>) => void): EEMethodReturnType<TEmitter, 'once', T>;
    once(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
    emit<P extends keyof TEmitRecord, T>(this: T, event: P, ...args: ListenerType<TEmitRecord[P]>): EEMethodReturnType<TEmitter, 'emit', T>;
    emit(event: typeof assignmentCompatibilityHack, ...args: any[]): void;
}
export type OverriddenKeys = keyof OverriddenMethods<any, any, any>;
export type StrictEventEmitter<TEmitterType, TEventRecord, TEmitRecord = TEventRecord, UnneededMethods extends Exclude<OverriddenKeys, keyof TEmitterType> =
    Exclude<OverriddenKeys, keyof TEmitterType>, NeededMethods extends Exclude<OverriddenKeys, UnneededMethods> = Exclude<OverriddenKeys, UnneededMethods>> =
    TypeRecord<TEmitterType, TEventRecord, TEmitRecord> & Pick<TEmitterType, Exclude<keyof TEmitterType, OverriddenKeys>> &
    Pick<OverriddenMethods<TEmitterType, TEventRecord, TEmitRecord>, NeededMethods>;
export default StrictEventEmitter;
export type NoUndefined<T> = T extends undefined ? never : T;
export interface StrictBroadcast<TEmitter extends TypeRecord<any, any, any>,
    TEmitRecord extends NoUndefined<TEmitter[' _emitType']> = NoUndefined<TEmitter[' _emitType']>,
    VK extends VoidKeys<TEmitRecord> = VoidKeys<TEmitRecord>, NVK extends Exclude<keyof TEmitRecord, VK> = Exclude<keyof TEmitRecord, VK>> {
    <E extends NVK>(event: E, request: TEmitRecord[E]): any;
    (event: VK): any;
}
export type EventNames<TEmitter extends TypeRecord<any, any, any>,
    TEventRecord extends NoUndefined<TEmitter[' _eventsType']> = NoUndefined<TEmitter[' _eventsType']>,
    TEmitRecord extends NoUndefined<TEmitter[' _emitType']> = NoUndefined<TEmitter[' _emitType']>> = keyof TEmitRecord | keyof TEventRecord;
export type OnEventNames<TEmitter extends TypeRecord<any, any, any>,
    TEventRecord extends NoUndefined<TEmitter[' _eventsType']> = NoUndefined<TEmitter[' _eventsType']>,
    TEmitRecord extends NoUndefined<TEmitter[' _emitType']> = NoUndefined<TEmitter[' _emitType']>> = keyof TEventRecord;
export type EmitEventNames<TEmitter extends TypeRecord<any, any, any>,
    TEventRecord extends NoUndefined<TEmitter[' _eventsType']> = NoUndefined<TEmitter[' _eventsType']>,
    TEmitRecord extends NoUndefined<TEmitter[' _emitType']> = NoUndefined<TEmitter[' _emitType']>> = keyof TEmitRecord;
