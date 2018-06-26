import MarkoAsyncStream from './AsyncStream';
import MarkoTemplate from './Template';
import MarkoRenderResult from './RenderResult';

export function createWriter(writer: any): AsyncStream;

export function enableAsyncStackTrace(): void;

export interface Template extends MarkoTemplate {}

export interface AsyncStream extends MarkoAsyncStream {}

export interface RenderResult extends MarkoRenderResult {}
