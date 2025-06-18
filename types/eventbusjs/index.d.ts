// Type definitions for eventbusjs 0.2.0
// Project: https://github.com/krasimir/EventBus

export type EventListener = (...args: any) => any;

export function addEventListener(type: string, listener?: EventListener, scope?: object): void;

export function removeEventListener(type: string, listener?: EventListener, scope?: object): void;

export function hasEventListener(type: string, listener?: EventListener, scope?: object): boolean;

export function dispatch(type: string, target?: object, arg?: string, arg2?: string): void;

export function getEvents(): string;

export as namespace EventBus;
