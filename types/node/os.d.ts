declare module "os" {
    interface CpuInfo {
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

    interface NetworkInterfaceBase {
        address: string;
        netmask: string;
        mac: string;
        internal: boolean;
        cidr: string | null;
    }

    interface NetworkInterfaceInfoIPv4 extends NetworkInterfaceBase {
        family: "IPv4";
    }

    interface NetworkInterfaceInfoIPv6 extends NetworkInterfaceBase {
        family: "IPv6";
        scopeid: number;
    }

    interface UserInfo<T> {
        username: T;
        uid: number;
        gid: number;
        shell: T;
        homedir: T;
    }

    type NetworkInterfaceInfo = NetworkInterfaceInfoIPv4 | NetworkInterfaceInfoIPv6;

    function hostname(): string;
    function loadavg(): number[];
    function uptime(): number;
    function freemem(): number;
    function totalmem(): number;
    function cpus(): CpuInfo[];
    function type(): string;
    function release(): string;
    function networkInterfaces(): { [index: string]: NetworkInterfaceInfo[] };
    function homedir(): string;
    function userInfo(options: { encoding: 'buffer' }): UserInfo<Buffer>;
    function userInfo(options?: { encoding: string }): UserInfo<string>;
    const constants: {
        UV_UDP_REUSEADDR: number;
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
            SIGPWR: number;
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
    function arch(): string;
    function platform(): NodeJS.Platform;
    function tmpdir(): string;
    const EOL: string;
    function endianness(): "BE" | "LE";
    /**
     * Gets the priority of a process.
     * Defaults to current process.
     */
    function getPriority(pid?: number): number;
    /**
     * Sets the priority of the current process.
     * @param priority Must be in range of -20 to 19
     */
    function setPriority(priority: number): void;
    /**
     * Sets the priority of the process specified process.
     * @param priority Must be in range of -20 to 19
     */
    function setPriority(pid: number, priority: number): void;
}
