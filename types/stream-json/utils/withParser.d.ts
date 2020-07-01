import { Writable, WritableOptions, Duplex, DuplexOptions, Transform, TransformOptions } from 'stream';
import * as Chain from 'stream-chain';
import * as Parser from '../Parser';
import * as FilterBase from '../filters/FilterBase';
import * as StreamBase from '../streamers/StreamBase';

export = withParser;

declare function withParser(
    fn: (options: FilterBase.FilterOptions) => FilterBase,
    options?: withParser.FilterOptions
): Chain;

declare function withParser(
    fn: (options?: StreamBase.StreamOptions) => StreamBase,
    options?: withParser.StreamOptions
): Chain;

declare function withParser(fn: (options?: TransformOptions) => Transform, options?: Parser.ParserOptions): Chain;

declare namespace withParser {
    interface FilterOptions extends FilterBase.FilterOptions {
        // copied from ParserOptions
        packValues?: boolean;
        packKeys?: boolean;
        packStrings?: boolean;
        packNumbers?: boolean;
        streamValues?: boolean;
        streamKeys?: boolean;
        streamStrings?: boolean;
        streamNumbers?: boolean;
        jsonStreaming?: boolean;
    }

    interface StreamOptions extends StreamBase.StreamOptions {
        // copied from ParserOptions
        packValues?: boolean;
        packKeys?: boolean;
        packStrings?: boolean;
        packNumbers?: boolean;
        streamValues?: boolean;
        streamKeys?: boolean;
        streamStrings?: boolean;
        streamNumbers?: boolean;
        jsonStreaming?: boolean;
    }
}
