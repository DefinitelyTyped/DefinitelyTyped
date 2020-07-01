import * as os from 'os';
{
    let result: string;

    result = os.tmpdir();
    result = os.homedir();
    result = os.endianness();
    result = os.hostname();
    result = os.type();
    result = os.arch();
    result = os.release();
    result = os.EOL;
}

{
    const a: os.UserInfo<string> = os.userInfo();
    const b: os.UserInfo<Buffer> = os.userInfo({ encoding: 'buffer' });
}

{
    let result: number;

    result = os.uptime();
    result = os.totalmem();
    result = os.freemem();
}

{
    let result: number[];

    result = os.loadavg();
}

{
    let result: os.CpuInfo[];

    result = os.cpus();
}

{
    let result: { [index: string]: os.NetworkInterfaceInfo[] };

    result = os.networkInterfaces();
}

{
    let result: number;

    result = os.constants.signals.SIGHUP;
    result = os.constants.signals.SIGINT;
    result = os.constants.signals.SIGQUIT;
    result = os.constants.signals.SIGILL;
    result = os.constants.signals.SIGTRAP;
    result = os.constants.signals.SIGABRT;
    result = os.constants.signals.SIGIOT;
    result = os.constants.signals.SIGBUS;
    result = os.constants.signals.SIGFPE;
    result = os.constants.signals.SIGKILL;
    result = os.constants.signals.SIGUSR1;
    result = os.constants.signals.SIGSEGV;
    result = os.constants.signals.SIGUSR2;
    result = os.constants.signals.SIGPIPE;
    result = os.constants.signals.SIGALRM;
    result = os.constants.signals.SIGTERM;
    result = os.constants.signals.SIGCHLD;
    result = os.constants.signals.SIGSTKFLT;
    result = os.constants.signals.SIGCONT;
    result = os.constants.signals.SIGSTOP;
    result = os.constants.signals.SIGTSTP;
    result = os.constants.signals.SIGTTIN;
    result = os.constants.signals.SIGTTOU;
    result = os.constants.signals.SIGURG;
    result = os.constants.signals.SIGXCPU;
    result = os.constants.signals.SIGXFSZ;
    result = os.constants.signals.SIGVTALRM;
    result = os.constants.signals.SIGPROF;
    result = os.constants.signals.SIGWINCH;
    result = os.constants.signals.SIGIO;
    result = os.constants.signals.SIGPOLL;
    result = os.constants.signals.SIGPWR;
    result = os.constants.signals.SIGSYS;
    result = os.constants.signals.SIGUNUSED;
}

{
    let result: number;

    result = os.constants.errno.E2BIG;
    result = os.constants.errno.EACCES;
    result = os.constants.errno.EADDRINUSE;
    result = os.constants.errno.EADDRNOTAVAIL;
    result = os.constants.errno.EAFNOSUPPORT;
    result = os.constants.errno.EAGAIN;
    result = os.constants.errno.EALREADY;
    result = os.constants.errno.EBADF;
    result = os.constants.errno.EBADMSG;
    result = os.constants.errno.EBUSY;
    result = os.constants.errno.ECANCELED;
    result = os.constants.errno.ECHILD;
    result = os.constants.errno.ECONNABORTED;
    result = os.constants.errno.ECONNREFUSED;
    result = os.constants.errno.ECONNRESET;
    result = os.constants.errno.EDEADLK;
    result = os.constants.errno.EDESTADDRREQ;
    result = os.constants.errno.EDOM;
    result = os.constants.errno.EDQUOT;
    result = os.constants.errno.EEXIST;
    result = os.constants.errno.EFAULT;
    result = os.constants.errno.EFBIG;
    result = os.constants.errno.EHOSTUNREACH;
    result = os.constants.errno.EIDRM;
    result = os.constants.errno.EILSEQ;
    result = os.constants.errno.EINPROGRESS;
    result = os.constants.errno.EINTR;
    result = os.constants.errno.EINVAL;
    result = os.constants.errno.EIO;
    result = os.constants.errno.EISCONN;
    result = os.constants.errno.EISDIR;
    result = os.constants.errno.ELOOP;
    result = os.constants.errno.EMFILE;
    result = os.constants.errno.EMLINK;
    result = os.constants.errno.EMSGSIZE;
    result = os.constants.errno.EMULTIHOP;
    result = os.constants.errno.ENAMETOOLONG;
    result = os.constants.errno.ENETDOWN;
    result = os.constants.errno.ENETRESET;
    result = os.constants.errno.ENETUNREACH;
    result = os.constants.errno.ENFILE;
    result = os.constants.errno.ENOBUFS;
    result = os.constants.errno.ENODATA;
    result = os.constants.errno.ENODEV;
    result = os.constants.errno.ENOENT;
    result = os.constants.errno.ENOEXEC;
    result = os.constants.errno.ENOLCK;
    result = os.constants.errno.ENOLINK;
    result = os.constants.errno.ENOMEM;
    result = os.constants.errno.ENOMSG;
    result = os.constants.errno.ENOPROTOOPT;
    result = os.constants.errno.ENOSPC;
    result = os.constants.errno.ENOSR;
    result = os.constants.errno.ENOSTR;
    result = os.constants.errno.ENOSYS;
    result = os.constants.errno.ENOTCONN;
    result = os.constants.errno.ENOTDIR;
    result = os.constants.errno.ENOTEMPTY;
    result = os.constants.errno.ENOTSOCK;
    result = os.constants.errno.ENOTSUP;
    result = os.constants.errno.ENOTTY;
    result = os.constants.errno.ENXIO;
    result = os.constants.errno.EOPNOTSUPP;
    result = os.constants.errno.EOVERFLOW;
    result = os.constants.errno.EPERM;
    result = os.constants.errno.EPIPE;
    result = os.constants.errno.EPROTO;
    result = os.constants.errno.EPROTONOSUPPORT;
    result = os.constants.errno.EPROTOTYPE;
    result = os.constants.errno.ERANGE;
    result = os.constants.errno.EROFS;
    result = os.constants.errno.ESPIPE;
    result = os.constants.errno.ESRCH;
    result = os.constants.errno.ESTALE;
    result = os.constants.errno.ETIME;
    result = os.constants.errno.ETIMEDOUT;
    result = os.constants.errno.ETXTBSY;
    result = os.constants.errno.EWOULDBLOCK;
    result = os.constants.errno.EXDEV;
}

{
    const prio = os.getPriority();
    os.setPriority(prio + 1);

    const prio2 = os.getPriority(1);
    os.setPriority(2, prio + 1);

    os.setPriority(os.constants.priority.PRIORITY_LOW);
}
