export {};

type PrependNextNum<A extends unknown[]> = A["length"] extends infer T
    ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never
    : never;

type EnumerateInternal<A extends unknown[], N extends number> = {
    0: A;
    1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A["length"] ? 0 : 1];

type Enumerate<N extends number> = EnumerateInternal<[], N> extends Array<infer E> ? E : never;

type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;

type Facility = Range<0, 24>;

type StreamType = "sys" | "tcp" | "udp";

export const kern = 0;
export const user = 1;
export const mail = 2;
export const daemon = 3;
export const auth = 4;
export const syslog = 5;
export const lpr = 6;
export const news = 7;
export const uucp = 8;
export const authpriv = 10;
export const ftp = 11;
export const cron = 15;
export const local0 = 16;
export const local1 = 17;
export const local2 = 18;
export const local3 = 19;
export const local4 = 20;
export const local5 = 21;
export const local6 = 22;
export const local7 = 23;

interface StreamOptions {
    type: StreamType;
    facility: Facility;
    host: string;
    port: number;
}

export function createBunyanStream(options: StreamOptions): NodeJS.WritableStream;
