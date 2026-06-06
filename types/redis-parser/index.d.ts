/// <reference types="node" />

import { ParserError, RedisError, ReplyError } from "redis-errors";

/**
 * RedisParserOptions
 */
interface RedisParserOptions {
    /** returnReply */
    returnReply(reply: any): void;
    /** returnError */
    returnError(err: RedisError): void;
    /** optional, defaults to the `returnError` function */
    returnFatalError?(err: ParserError): void;
    /** All strings are returned as Buffer e.g. <Buffer 48 65 6c 6c 6f>. optional, defaults to false */
    returnBuffers?: boolean;
    /** All numbers are returned as String. optional, defaults to false */
    stringNumbers?: boolean;
}

/**
 * Javascript Redis Parser
 */
declare class JavascriptRedisParser {
    constructor(options: RedisParserOptions);
    /** Private fields  */
    private offset;
    private buffer;
    private bigStrSize;
    private totalChunkSize;
    private bufferCache;
    private arrayCache;
    private arrayPos;
    private returnReply(reply: any): void;
    private returnError(err: ReplyError): void;
    private returnFatalError(err: ParserError): void;
    /**
     * Reset the parser values to the initial state
     */
    reset(): void;
    readonly optionReturnBuffers: boolean;
    /**
     * Set the returnBuffers option
     */
    setReturnBuffers(returnBuffers: boolean): void;

    readonly optionStringNumbers: boolean;
    /**
     * Set the stringNumbers option
     */
    setStringNumbers(stringNumbers: boolean): void;
    /**
     * Parse the redis buffer
     */
    execute(buffer: Buffer): void;
}

export = JavascriptRedisParser;
