import { Writable, WritableOptions, Duplex, DuplexOptions, Transform, TransformOptions } from 'stream';
import FilterBase = require('../filters/FilterBase');
import Parser = require('../Parser');
import StreamBase = require('../streamers/StreamBase');
import Chain = require('stream-chain');
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
