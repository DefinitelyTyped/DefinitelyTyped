/// <reference types="node" />
import { Transform, TransformOptions } from 'node:stream';
import { StreamParser, StreamOptions, AsyncOptions } from '@json2csv/plainjs';

/**
 * @todo Update this body to match StreamParser whenever it changes.
 * Doing this is the closest I think we can get with TypeScript to mimicking
 * {@link <https://github.com/juanjoDiaz/json2csv/blob/2d827e99d849e3afbbfcde4fa25f9789aab25c83/packages/node/src/Transform.js#L9>}
 */
declare class _Transform extends Transform implements StreamParser {
    opts: StreamParser['opts'];
    getHeader: StreamParser['getHeader'];
    preprocessOpts: StreamParser['preprocessOpts'];
    preprocessFieldsInfo: StreamParser['preprocessFieldsInfo'];
    preprocessRow: StreamParser['preprocessRow'];
    processRow: StreamParser['processRow'];
    processCell: StreamParser['processCell'];
    processValue: StreamParser['processValue'];
    configureCallbacks: StreamParser['configureCallbacks'];
    initTokenizer: StreamParser['initTokenizer'];
    getObjectModeTokenzier: StreamParser['getObjectModeTokenzier'];
    getNdJsonTokenizer: StreamParser['getNdJsonTokenizer'];
    getBinaryModeTokenizer: StreamParser['getBinaryModeTokenizer'];
    pushHeaderIfNotWritten: StreamParser['pushHeaderIfNotWritten'];
    pushHeader: StreamParser['pushHeader'];
    pushLine: StreamParser['pushLine'];
    onHeader: StreamParser['onHeader'];
    onLine: StreamParser['onLine'];
    onData: StreamParser['onData'];
    onError: StreamParser['onError'];
    onEnd: StreamParser['onEnd'];
}

export default class JSON2CSVNodeTransform extends _Transform {
    constructor(opts?: StreamOptions, transformOpts?: TransformOptions, asyncOptions?: AsyncOptions);

    promise(): Promise<string>;
    endUnderlyingLayer(): void;

    opts: Required<StreamOptions>;
}

export {};
