// Type definitions for max-api 1.1
// Project: https://docs.cycling74.com/nodeformax/api/index.html
// Definitions by: Geof Holbrook <https://github.com/geofholbrook>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const MESSAGE_TYPES: Record<string, string>;
export const POST_LEVELS: Record<string, string>;

export function addHandler(msg: MessageIdentifier, handler: MessageHandler): void;
export function addHandlers(handlers: Record<string, MessageHandler>): void;
export function getDict(id: string): Promise<Dict>;
export function outlet(...args: any[]): Promise<void>;
export function outletBang(): Promise<void>;
export function post(str: any): Promise<void>;
export function removeHandler(msg: string, handler: MessageHandler): void;
export function removeHandlers(msg?: string): void;
export function setDict(id: string, content: Record<string, unknown>): Promise<Dict>;
export function updateDict(id: string, path: string, value: unknown): Promise<Dict>;

export type Anything = any;
export type Dict = Record<string, unknown>;
export type DictIdentifier = string;
export type DictPath = string;
export type MessageHandler = (...args: any[]) => void;
export type MessageIdentifier = string;
