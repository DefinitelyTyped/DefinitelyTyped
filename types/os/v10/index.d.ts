// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as process from 'process';

export {};

export interface CpuInfo {
    model: string;
    speed: number;
    times: {
        user: number;
        nice: number;
        sys: number;
        idle: number;
        irq: number;
    };
}

export interface NetworkInterfaceBase {
    address: string;
    netmask: string;
    mac: string;
    internal: boolean;
    cidr: string | null;
}

export interface NetworkInterfaceInfoIPv4 extends NetworkInterfaceBase {
    family: "IPv4";
}

export interface NetworkInterfaceInfoIPv6 extends NetworkInterfaceBase {
    family: "IPv6";
    scopeid: number;
}

export type NetworkInterfaceInfo = NetworkInterfaceInfoIPv4 | NetworkInterfaceInfoIPv6;

export function hostname(): string;
export function loadavg(): number[];
export function uptime(): number;
export function freemem(): number;
export function totalmem(): number;
export function cpus(): CpuInfo[];
export function type(): string;
export function release(): string;
export function networkInterfaces(): { [index: string]: NetworkInterfaceInfo[] };
export function homedir(): string;
export function userInfo(options?: { encoding: string }): { username: string, uid: number, gid: number, shell: any, homedir: string };
export const constants: {
    UV_UDP_REUSEADDR: number;
    // signals: { [key in Signals]: number; }; @todo: change after migration to typescript 2.1
    signals: {
        SIGHUP: number;
        SIGINT: number;
        SIGQUIT: number;
        SIGILL: number;
        SIGTRAP: number;
        SIGABRT: number;
        SIGIOT: number;
        SIGBUS: number;
        SIGFPE: number;
        SIGKILL: number;
        SIGUSR1: number;
        SIGSEGV: number;
        SIGUSR2: number;
        SIGPIPE: number;
        SIGALRM: number;
        SIGTERM: number;
        SIGCHLD: number;
        SIGSTKFLT: number;
        SIGCONT: number;
        SIGSTOP: number;
        SIGTSTP: number;
        SIGBREAK: number;
        SIGTTIN: number;
        SIGTTOU: number;
        SIGURG: number;
        SIGXCPU: number;
        SIGXFSZ: number;
        SIGVTALRM: number;
        SIGPROF: number;
        SIGWINCH: number;
        SIGIO: number;
        SIGPOLL: number;
        SIGLOST: number;
        SIGPWR: number;
        SIGINFO: number;
        SIGSYS: number;
        SIGUNUSED: number;
    };
    errno: {
        E2BIG: number;
        EACCES: number;
        EADDRINUSE: number;
        EADDRNOTAVAIL: number;
        EAFNOSUPPORT: number;
        EAGAIN: number;
        EALREADY: number;
        EBADF: number;
        EBADMSG: number;
        EBUSY: number;
        ECANCELED: number;
        ECHILD: number;
        ECONNABORTED: number;
        ECONNREFUSED: number;
        ECONNRESET: number;
        EDEADLK: number;
        EDESTADDRREQ: number;
        EDOM: number;
        EDQUOT: number;
        EEXIST: number;
        EFAULT: number;
        EFBIG: number;
        EHOSTUNREACH: number;
        EIDRM: number;
        EILSEQ: number;
        EINPROGRESS: number;
        EINTR: number;
        EINVAL: number;
        EIO: number;
        EISCONN: number;
        EISDIR: number;
        ELOOP: number;
        EMFILE: number;
        EMLINK: number;
        EMSGSIZE: number;
        EMULTIHOP: number;
        ENAMETOOLONG: number;
        ENETDOWN: number;
        ENETRESET: number;
        ENETUNREACH: number;
        ENFILE: number;
        ENOBUFS: number;
        ENODATA: number;
        ENODEV: number;
        ENOENT: number;
        ENOEXEC: number;
        ENOLCK: number;
        ENOLINK: number;
        ENOMEM: number;
        ENOMSG: number;
        ENOPROTOOPT: number;
        ENOSPC: number;
        ENOSR: number;
        ENOSTR: number;
        ENOSYS: number;
        ENOTCONN: number;
        ENOTDIR: number;
        ENOTEMPTY: number;
        ENOTSOCK: number;
        ENOTSUP: number;
        ENOTTY: number;
        ENXIO: number;
        EOPNOTSUPP: number;
        EOVERFLOW: number;
        EPERM: number;
        EPIPE: number;
        EPROTO: number;
        EPROTONOSUPPORT: number;
        EPROTOTYPE: number;
        ERANGE: number;
        EROFS: number;
        ESPIPE: number;
        ESRCH: number;
        ESTALE: number;
        ETIME: number;
        ETIMEDOUT: number;
        ETXTBSY: number;
        EWOULDBLOCK: number;
        EXDEV: number;
        WSAEINTR: number;
        WSAEBADF: number;
        WSAEACCES: number;
        WSAEFAULT: number;
        WSAEINVAL: number;
        WSAEMFILE: number;
        WSAEWOULDBLOCK: number;
        WSAEINPROGRESS: number;
        WSAEALREADY: number;
        WSAENOTSOCK: number;
        WSAEDESTADDRREQ: number;
        WSAEMSGSIZE: number;
        WSAEPROTOTYPE: number;
        WSAENOPROTOOPT: number;
        WSAEPROTONOSUPPORT: number;
        WSAESOCKTNOSUPPORT: number;
        WSAEOPNOTSUPP: number;
        WSAEPFNOSUPPORT: number;
        WSAEAFNOSUPPORT: number;
        WSAEADDRINUSE: number;
        WSAEADDRNOTAVAIL: number;
        WSAENETDOWN: number;
        WSAENETUNREACH: number;
        WSAENETRESET: number;
        WSAECONNABORTED: number;
        WSAECONNRESET: number;
        WSAENOBUFS: number;
        WSAEISCONN: number;
        WSAENOTCONN: number;
        WSAESHUTDOWN: number;
        WSAETOOMANYREFS: number;
        WSAETIMEDOUT: number;
        WSAECONNREFUSED: number;
        WSAELOOP: number;
        WSAENAMETOOLONG: number;
        WSAEHOSTDOWN: number;
        WSAEHOSTUNREACH: number;
        WSAENOTEMPTY: number;
        WSAEPROCLIM: number;
        WSAEUSERS: number;
        WSAEDQUOT: number;
        WSAESTALE: number;
        WSAEREMOTE: number;
        WSASYSNOTREADY: number;
        WSAVERNOTSUPPORTED: number;
        WSANOTINITIALISED: number;
        WSAEDISCON: number;
        WSAENOMORE: number;
        WSAECANCELLED: number;
        WSAEINVALIDPROCTABLE: number;
        WSAEINVALIDPROVIDER: number;
        WSAEPROVIDERFAILEDINIT: number;
        WSASYSCALLFAILURE: number;
        WSASERVICE_NOT_FOUND: number;
        WSATYPE_NOT_FOUND: number;
        WSA_E_NO_MORE: number;
        WSA_E_CANCELLED: number;
        WSAEREFUSED: number;
    };
    priority: {
        PRIORITY_LOW: number;
        PRIORITY_BELOW_NORMAL: number;
        PRIORITY_NORMAL: number;
        PRIORITY_ABOVE_NORMAL: number;
        PRIORITY_HIGH: number;
        PRIORITY_HIGHEST: number;
    }
};
export function arch(): string;
export function platform(): typeof process.platform;
export function tmpdir(): string;
export const EOL: string;
export function endianness(): "BE" | "LE";
/**
 * Gets the priority of a process.
 * Defaults to current process.
 */
export function getPriority(pid?: number): number;
/**
 * Sets the priority of the current process.
 * @param priority Must be in range of -20 to 19
 */
export function setPriority(priority: number): void;
/**
 * Sets the priority of the process specified process.
 * @param priority Must be in range of -20 to 19
 */
export function setPriority(pid: number, priority: number): void;
