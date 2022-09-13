/// <reference types="node" />

import * as stream from 'stream';
import { ServerResponse } from 'http';
import AsyncStream from './AsyncStream';
import RenderResult from './RenderResult';
import AsyncVDOMBuilder from '../vdom/AsyncVDOMBuilder';
import { AsyncWriter } from 'async-writer';

export class Readable extends stream.Readable {
  _t: any;
  _d: any;
  _shouldBuffer: boolean;
  _rendered: boolean;

  constructor(template: Template, data: any, options: any);

  write(data: any): void;
}

export interface Renderable {
  createOut: any;

  renderToString(data?: any): string;

  renderToString(data: any, callback: (err: Error | null, result: string) => void): undefined;

  renderSync(data?: any): RenderResult;

  render(data?: any): Promise<RenderResult>;

  render(data: any, out: AsyncStream | AsyncWriter | AsyncVDOMBuilder | NodeJS.WritableStream |
    ((err: any, result: RenderResult) => void)): void;
}

export default interface Template extends Renderable {
  path: string;
  _: any;
  ___shouldBuffer: boolean;
  meta: any;

  (path: string, renderFunc: any, options: any): Template;

  createOut(globalData?: any, writer?: any, parentOut?: any, buffer?: any): AsyncStream;

  stream(data: any): Readable;
}
