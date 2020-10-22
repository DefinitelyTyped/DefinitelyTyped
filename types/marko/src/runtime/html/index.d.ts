import MarkoAsyncStream from './AsyncStream';
import MarkoTemplate from './Template';
import MarkoRenderResult from './RenderResult';

export function createWriter(writer: any): AsyncStream;

export function enableAsyncStackTrace(): void;

// tslint:disable-next-line no-empty-interface
export interface Template extends MarkoTemplate {}

// tslint:disable-next-line no-empty-interface
export interface AsyncStream extends MarkoAsyncStream {}

// tslint:disable-next-line no-empty-interface
export interface RenderResult extends MarkoRenderResult {}
