import {
    RedisError,
    ReplyError,
    ParserError,
    AbortError,
    InterruptError
} from 'redis-errors';

const err = new RedisError('some error');

const reply = new ReplyError('some error');
const replyArgs: any[] | undefined = reply.args;
const replyCommand: string | undefined = reply.command;
const replyCode: string | undefined = reply.code;

const parser = new ParserError('some error', 'a buffer', 4);
const parserBuffer: string = parser.buffer;
const parserOffset: number = parser.offset;

const abort = new AbortError('some error');
const abortArgs: any[] | undefined = abort.args;
const abortCommand: string | undefined = abort.command;

const interrupt = new InterruptError('some error');
const interruptArgs: any[] | undefined = interrupt.args;
const interruptCommand: string | undefined = interrupt.command;
const interruptOrigin: Error | undefined = interrupt.origin;
