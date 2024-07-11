export type PosixMask = boolean | 0 | 1;

export interface Group {
    name: string;
    passwd: string;
    gid: number;
    members: string[];
}

export interface Passwd {
    name: string;
    passwd: string;
    uid: number;
    gid: number;
    gecos: string | null;
    shell: string;
    dir: string;
}

export interface Limit {
    soft: number | null;
    hard: number | null;
}

export type Resource = "core" | "cpu" | "data" | "fsize" | "nofile" | "nproc" | "stack" | "as";

export interface LogOption {
    pid?: PosixMask;
    cons?: PosixMask;
    ndelay?: PosixMask;
    odelay?: PosixMask;
    nowait?: PosixMask;
}

export type Facility =
    | "auth"
    | "authpriv"
    | "cron"
    | "daemon"
    | "ftp"
    | "kern"
    | "lpr"
    | "mail"
    | "news"
    | "syslog"
    | "user"
    | "uucp"
    | "local0"
    | "local1"
    | "local2"
    | "local3"
    | "local4"
    | "local5"
    | "local6"
    | "local7";

export type Priority = "emerg" | "alert" | "crit" | "err" | "warning" | "notice" | "info" | "debug";

export interface PriorityMask {
    emerg?: PosixMask;
    alert?: PosixMask;
    crit?: PosixMask;
    err?: PosixMask;
    warning?: PosixMask;
    notice?: PosixMask;
    info?: PosixMask;
    debug?: PosixMask;
}

export interface LogMask {
    emerg: boolean;
    alert: boolean;
    crit: boolean;
    err: boolean;
    warning: boolean;
    notice: boolean;
    info: boolean;
    debug: boolean;
}

export interface SwapFlags {
    prefer?: PosixMask;
    discard?: PosixMask;
}

export function getgid(): number;
export function getuid(): number;
export function setgid(id: number | string): void;
export function setuid(id: number | string): void;
export function chroot(path: string): void;
export function closelog(): void;
export function getegid(): number;
export function geteuid(): number;
export function getgrnam(group: number | string): Group;
export function getpgid(pid: number): number;
export function setpgid(pid: number, pgid: number): void;
export function getppid(): number;
export function getpwnam(user: number | string): Passwd;
export function getrlimit(resource: Resource): Limit;
export function setrlimit(resource: Resource, limit: { soft?: number | null; hard?: number | null }): void;
export function setsid(): number;
export function openlog(ident: string, option: LogOption, facility: Facility): void;
export function syslog(priority: Priority, message: string): void;
export function setlogmask(mask: PriorityMask): LogMask;
export function getpgrp(): number;
export function seteuid(uid: number | string): void;
export function setreuid(ruid: number | string, euid: number | string): void;
export function setegid(gid: number | string): void;
export function setregid(rgid: number | string, egid: number | string): void;
export function gethostname(): string;
export function sethostname(hostname: string): void;
export const swapon: ((path: string, swapFlags?: SwapFlags) => void) | undefined;
export const swapoff: ((path: string) => void) | undefined;
export const initgroups: ((user: string, group: number | string) => void) | undefined;
