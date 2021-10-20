// Type definitions for bunyan-syslog 0.3
// Project: https://www.npmjs.com/package/bunyan-syslog
// Definitions by: Naor Tedgi <https://github.com/ntedgi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace bsyslog {
    type PrependNextNum<A extends unknown[]> = A['length'] extends infer T ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never : never;

    type EnumerateInternal<A extends unknown[], N extends number> = { 0: A, 1: EnumerateInternal<PrependNextNum<A>, N> }[N extends A['length'] ? 0 : 1];

    type Enumerate<N extends number> = EnumerateInternal<[], N> extends Array<infer E> ? E : never;

    type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;

    type Facility = Range<0, 24>;

    type StreamType = | 'sys' | 'tcp' | 'udp';

    const kern = 0;
    const user = 1;
    const mail = 2;
    const daemon = 3;
    const auth = 4;
    const syslog = 5;
    const lpr = 6;
    const news = 7;
    const uucp = 8;
    const authpriv = 10;
    const ftp = 11;
    const cron = 15;
    const local0 = 16;
    const local1 = 17;
    const local2 = 18;
    const local3 = 19;
    const local4 = 20;
    const local5 = 21;
    const local6 = 22;
    const local7 = 23;

    interface StreamOptions {
        type: StreamType;
        facility: Facility;
        host: string;
        port: number;
    }

    function createBunyanStream(options: StreamOptions): NodeJS.WritableStream;
}

export default bsyslog;
