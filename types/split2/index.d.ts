// Type definitions for split2 2.1.0
// Project: https://github.com/mcollina/split2
// Definitions by: TANAKA Koichi <https://github.com/mugeso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
declare module "split2" {
    import { Transform, TransformOptions } from 'stream';

    type Matcher = string|RegExp;
    type Mapper = split.Mapper;
    type Options = split.Options;

    function split(): Transform;
    function split(matcher: Matcher): Transform;
    function split(mapper: Mapper): Transform;
    function split(options: Options): Transform;
    function split(matcher: Matcher, mapper: Mapper): Transform;
    function split(matcher: Matcher, options: Options): Transform;
    function split(mapper: Mapper, options: Options): Transform;
    function split(matcher: Matcher, mapper: Mapper, options: Options): Transform;

    namespace split {
        export interface Mapper {
            (line: string): any;
        }

        export interface Options extends TransformOptions {
           maxLength?: number;
        }
    }

    export = split;
}
