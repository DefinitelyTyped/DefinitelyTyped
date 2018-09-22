// Type definitions for VFile 2.2
// Project: https://github.com/vfile/vfile
// Definitions by: bizen241 <https://github.com/bizen241>
//                 Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types='node' />

import * as Unist from 'unist';

declare namespace vfile {
    type Contents = string | Buffer;

    interface NodeWithPosition extends Unist.Node {
        position: Unist.Position;
        [key: string]: any;
    }

    interface VFileParamsBase<D> {
        data?: D;
        contents?: Contents;
        path?: string;
        basename?: string;
        stem?: string;
        extname?: string;
        dirname?: string;
        cwd?: string;
    }

    type VFileParams<C extends {data?: {}}> = VFileParamsBase<C['data']> & C;

    /**
     * File-related message describing something at certain position.
     */
    interface VFileMessage {
        /**
         * File-path, when the message was triggered.
         */
        file: string;
        /**
         * Category of message.
         */
        ruleId: string | null;
        /**
         * Reason for message.
         */
        reason: string;
        /**
         * Starting line of error.
         */
        line: number | null;
        /**
         * Starting column of error.
         */
        column: number | null;
        /**
         * Full range information, when available.
         * Has start and end properties, both set to an object with line and column, set to number?.
         */
        location: Unist.Position;
        /**
         * Namespace of warning.
         */
        source: string | null;
        /**
         * If true, marks associated file as no longer processable.
         */
        fatal?: boolean | null;
    }

    /**
     * Associates a message with the file for `reason` at `position`.
     * When an error is passed in as `reason`, copies the stack.
     * Each message has a `fatal` property which by default is set to `false` (ie. `warning`).
     * @param reason Reason for message. Uses the stack and message of the error if given.
     * @param position Place at which the message occurred in `vfile`.
     * @param ruleId Category of message.
     */
    type Message = (reason: string, position?: Unist.Point | Unist.Position | NodeWithPosition, ruleId?: string) => VFileMessage;
    /**
     * Associates a fatal message with the file, then immediately throws it.
     * Note: fatal errors mean a file is no longer processable.
     * Calls `message()` internally.
     * @param reason Reason for message. Uses the stack and message of the error if given.
     * @param position Place at which the message occurred in `vfile`.
     * @param ruleId Category of message.
     */
    type Fail = (reason: string, position?: Unist.Point | Unist.Position | NodeWithPosition, ruleId?: string) => never;
    /**
     * Associates an informational message with the file, where `fatal` is set to `null`.
     * Calls `message()` internally.
     * @param reason Reason for message. Uses the stack and message of the error if given.
     * @param position Place at which the message occurred in `vfile`.
     * @param ruleId Category of message.
     */
    type Info = (reason: string, position?: Unist.Point | Unist.Position | NodeWithPosition, ruleId?: string) => void;

    /**
     * Convert contents of `vfile` to string.
     * @param encoding If `contents` is a buffer, `encoding` is used to stringify buffers (default: `'utf8'`).
     */
    type ToString = (encoding?: BufferEncoding) => string;

    interface VFileBase<C extends {data?: {}}> {
        /**
         * @param options If `options` is `string` or `Buffer`, treats it as `{contents: options}`. If `options` is a `VFile`, returns it. All other options are set on the newly created `vfile`.
         */
        (input?: Contents): VFile<C>;
        <C>(input?: VFile<C> | VFileParams<C>): VFile<C>;
        message: Message;
        fail: Fail;
        info: Info;
        /**
         * List of file-paths the file moved between.
         */
        history: string[];
        /**
         * Place to store custom information.
         * It's OK to store custom data directly on the `vfile`, moving it to `data` gives a little more privacy.
         */
        data: C['data'];
        /**
         * List of messages associated with the file.
         */
        messages: VFileMessage[];
        /**
         * Raw value.
         */
        contents: Contents;
        /**
         * Path of `vfile`.
         * Cannot be nullified.
         */
        path?: string;
        /**
         * Path to parent directory of `vfile`.
         * Cannot be set if there's no `path` yet.
         */
        dirname?: string;
        /**
         * Current name (including extension) of `vfile`.
         * Cannot contain path separators.
         * Cannot be nullified either (use `file.path = file.dirname` instead).
         */
        basename?: string;
        /**
         * Name (without extension) of `vfile`.
         * Cannot be nullified, and cannot contain path separators.
         */
        stem?: string;
        /**
         * Extension (with dot) of `vfile`.
         * Cannot be set if there's no `path` yet and cannot contain path separators.
         */
        extname?: string;
        /**
         * Base of `path`.
         * Defaults to `process.cwd()`.
         */
        cwd: string;
        toString: ToString;
    }

    type VFile<C> = VFileBase<C> & C;
}

/**
 * Create a new virtual file.
 * Path related properties are set in the following order (least specific to most specific): `history`, `path`, `basename`, `stem`, `extname`, `dirname`.
 * It’s not possible to set either `dirname` or `extname` without setting either `history`, `path`, `basename`, or `stem` as well.
 */
declare const vfile: vfile.VFile<{}>;

export = vfile;
