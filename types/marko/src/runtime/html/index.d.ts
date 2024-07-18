import MarkoAsyncStream from "./AsyncStream";
import MarkoRenderResult from "./RenderResult";
import MarkoTemplate from "./Template";

export function createWriter(writer: any): AsyncStream;

export function enableAsyncStackTrace(): void;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Template extends MarkoTemplate {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AsyncStream extends MarkoAsyncStream {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RenderResult extends MarkoRenderResult {}
