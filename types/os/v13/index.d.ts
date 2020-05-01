// Type definitions for non-npm package Node.js 13.13
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 David Junger <https://github.com/touffy>
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
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';
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

export interface UserInfo<T> {
    username: T;
    uid: number;
    gid: number;
    shell: T;
    homedir: T;
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
export function networkInterfaces(): { [key: string]: NetworkInterfaceInfo[] | undefined };
export function homedir(): string;
export function userInfo(options: { encoding: 'buffer' }): UserInfo<Buffer>;
export function userInfo(options?: { encoding: string }): UserInfo<string>;

export type SignalConstants = {
    [key in process.Signals]: number;
};

export namespace constants {
    const UV_UDP_REUSEADDR: number;
    namespace signals {}
    const signals: SignalConstants;
    namespace errno {
        const E2BIG: number;
        const EACCES: number;
        const EADDRINUSE: number;
        const EADDRNOTAVAIL: number;
        const EAFNOSUPPORT: number;
        const EAGAIN: number;
        const EALREADY: number;
        const EBADF: number;
        const EBADMSG: number;
        const EBUSY: number;
        const ECANCELED: number;
        const ECHILD: number;
        const ECONNABORTED: number;
        const ECONNREFUSED: number;
        const ECONNRESET: number;
        const EDEADLK: number;
        const EDESTADDRREQ: number;
        const EDOM: number;
        const EDQUOT: number;
        const EEXIST: number;
        const EFAULT: number;
        const EFBIG: number;
        const EHOSTUNREACH: number;
        const EIDRM: number;
        const EILSEQ: number;
        const EINPROGRESS: number;
        const EINTR: number;
        const EINVAL: number;
        const EIO: number;
        const EISCONN: number;
        const EISDIR: number;
        const ELOOP: number;
        const EMFILE: number;
        const EMLINK: number;
        const EMSGSIZE: number;
        const EMULTIHOP: number;
        const ENAMETOOLONG: number;
        const ENETDOWN: number;
        const ENETRESET: number;
        const ENETUNREACH: number;
        const ENFILE: number;
        const ENOBUFS: number;
        const ENODATA: number;
        const ENODEV: number;
        const ENOENT: number;
        const ENOEXEC: number;
        const ENOLCK: number;
        const ENOLINK: number;
        const ENOMEM: number;
        const ENOMSG: number;
        const ENOPROTOOPT: number;
        const ENOSPC: number;
        const ENOSR: number;
        const ENOSTR: number;
        const ENOSYS: number;
        const ENOTCONN: number;
        const ENOTDIR: number;
        const ENOTEMPTY: number;
        const ENOTSOCK: number;
        const ENOTSUP: number;
        const ENOTTY: number;
        const ENXIO: number;
        const EOPNOTSUPP: number;
        const EOVERFLOW: number;
        const EPERM: number;
        const EPIPE: number;
        const EPROTO: number;
        const EPROTONOSUPPORT: number;
        const EPROTOTYPE: number;
        const ERANGE: number;
        const EROFS: number;
        const ESPIPE: number;
        const ESRCH: number;
        const ESTALE: number;
        const ETIME: number;
        const ETIMEDOUT: number;
        const ETXTBSY: number;
        const EWOULDBLOCK: number;
        const EXDEV: number;
        const WSAEINTR: number;
        const WSAEBADF: number;
        const WSAEACCES: number;
        const WSAEFAULT: number;
        const WSAEINVAL: number;
        const WSAEMFILE: number;
        const WSAEWOULDBLOCK: number;
        const WSAEINPROGRESS: number;
        const WSAEALREADY: number;
        const WSAENOTSOCK: number;
        const WSAEDESTADDRREQ: number;
        const WSAEMSGSIZE: number;
        const WSAEPROTOTYPE: number;
        const WSAENOPROTOOPT: number;
        const WSAEPROTONOSUPPORT: number;
        const WSAESOCKTNOSUPPORT: number;
        const WSAEOPNOTSUPP: number;
        const WSAEPFNOSUPPORT: number;
        const WSAEAFNOSUPPORT: number;
        const WSAEADDRINUSE: number;
        const WSAEADDRNOTAVAIL: number;
        const WSAENETDOWN: number;
        const WSAENETUNREACH: number;
        const WSAENETRESET: number;
        const WSAECONNABORTED: number;
        const WSAECONNRESET: number;
        const WSAENOBUFS: number;
        const WSAEISCONN: number;
        const WSAENOTCONN: number;
        const WSAESHUTDOWN: number;
        const WSAETOOMANYREFS: number;
        const WSAETIMEDOUT: number;
        const WSAECONNREFUSED: number;
        const WSAELOOP: number;
        const WSAENAMETOOLONG: number;
        const WSAEHOSTDOWN: number;
        const WSAEHOSTUNREACH: number;
        const WSAENOTEMPTY: number;
        const WSAEPROCLIM: number;
        const WSAEUSERS: number;
        const WSAEDQUOT: number;
        const WSAESTALE: number;
        const WSAEREMOTE: number;
        const WSASYSNOTREADY: number;
        const WSAVERNOTSUPPORTED: number;
        const WSANOTINITIALISED: number;
        const WSAEDISCON: number;
        const WSAENOMORE: number;
        const WSAECANCELLED: number;
        const WSAEINVALIDPROCTABLE: number;
        const WSAEINVALIDPROVIDER: number;
        const WSAEPROVIDERFAILEDINIT: number;
        const WSASYSCALLFAILURE: number;
        const WSASERVICE_NOT_FOUND: number;
        const WSATYPE_NOT_FOUND: number;
        const WSA_E_NO_MORE: number;
        const WSA_E_CANCELLED: number;
        const WSAEREFUSED: number;
    }
    namespace priority {
        const PRIORITY_LOW: number;
        const PRIORITY_BELOW_NORMAL: number;
        const PRIORITY_NORMAL: number;
        const PRIORITY_ABOVE_NORMAL: number;
        const PRIORITY_HIGH: number;
        const PRIORITY_HIGHEST: number;
    }
}

export function arch(): string;
/**
 * Returns a string identifying the kernel version.
 * On POSIX systems, the operating system release is determined by calling
 * [uname(3)][]. On Windows, `pRtlGetVersion` is used, and if it is not available,
 * `GetVersionExW()` will be used. See
 * https://en.wikipedia.org/wiki/Uname#Examples for more information.
 */
export function version(): string;
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
