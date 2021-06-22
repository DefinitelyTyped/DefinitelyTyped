export default class Os {
    oos(): () => Promise<string>;

    platform(): Platform;

    uptime(): number;

    ip(): string;

    hostname(): string;

    type(): string;

    arch(): string;
}

type Platform = 'aix'
    | 'android'
    | 'darwin'
    | 'freebsd'
    | 'linux'
    | 'openbsd'
    | 'sunos'
    | 'win32'
    | 'cygwin';

export {};
