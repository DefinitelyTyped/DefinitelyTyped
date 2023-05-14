// Type definitions for git-init 1.0
// Project: https://github.com/yoshuawuyts/git-init#readme
// Definitions by: Santi <https://github.com/santi100a>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface Signals {
    SIGABRT: string;
    SIGALRM: string;
    SIGBUS: string;
    SIGCHLD: string;
    SIGCONT: string;
    SIGFPE: string;
    SIGHUP: string;
    SIGILL: string;
    SIGINT: string;
    SIGIO: string;
    SIGIOT: string;
    SIGKILL: string;
    SIGPIPE: string;
    SIGPOLL: string;
    SIGPROF: string;
    SIGPWR: string;
    SIGQUIT: string;
    SIGSEGV: string;
    SIGSTKFLT: string;
    SIGSTOP: string;
    SIGSYS: string;
    SIGTERM: string;
    SIGTRAP: string;
    SIGTSTP: string;
    SIGTTIN: string;
    SIGTTOU: string;
    SIGUNUSED: string;
    SIGURG: string;
    SIGUSR1: string;
    SIGUSR2: string;
    SIGVTALRM: string;
    SIGWINCH: string;
    SIGXCPU: string;
    SIGXFSZ: string;
}

interface ExecException extends Error {
    cmd?: string | undefined;
    killed?: boolean | undefined;
    code?: number | undefined;
    signal?: Signals | undefined;
}

type ExecCallback = (error: ExecException | null, stdout: string, stderr: string) => void;
/**
 * Initializes a new Git repo in `path` asynchronously.
 *
 * @param path The path of the folder to be initialized as a Git repo.
 * @param cb An `exec`-compatible callback defined in {@link ExecCallback}.
 */
declare function init(path: string, cb: ExecCallback): void;
/**
 * Initializes a new Git repo in the current directory asynchronously.
 *
 * @param cb An `exec`-compatible callback defined in {@link ExecCallback}.
 */
declare function init(cb: ExecCallback): void;
export = init;
