// Type definitions for node-procfs-stats 1.0.2
// Project: https://github.com/soldair/node-procfs-stats
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "procfs-stats" {
    namespace procfs {
        type Callback<Value> = (error: any, value: Value) => void;

        export interface Cpu {
            cpu: CpuDetail;
            intr: string;
            ctxt: string;
            btime: string;
            processes: string;
            procs_running: string;
            procs_blocked: string;
            softirq: string;
        }

        export interface CpuDetail {
            user: string;
            nice: string;
            system: string;
            idle: string;
            iowait: string;
            irq: string;
            softirq: string;
            steal: string;
            guest: string;
            guest_nice: string;
        }

        export interface DiskStat {
            device_number: string;
            device_number_minor: string;
            device: string;
            reads_completed: string;
            reads_merged: string;
            sectors_read: string;
            ms_reading: string;
            writes_completed: string;
            writes_merged: string;
            sectors_written: string;
            ms_writing: string;
            ios_pending: string;
            ms_io: string;
            ms_weighted_io: string;
        }

        export interface FileDescriptor {
            fd?: string;
            path: string;
            info: FileDescriptorInfo;
            stat: FileDescriptorStat | boolean;
        }

        export interface FileDescriptorInfo {
            pos: string;
            flags: string;
        }

        export interface FileDescriptorStat {
            dev: number;
            mode: number;
            nlink: number;
            uid: number;
            gid: number;
            rdev: number;
            blksize: number;
            ino: number;
            size: number;
            blocks: number;
            atime: Date;
            mtime: Date;
            ctime: Date;
        }

        export interface MemoryInfo {
            MemTotal: string;
            MemFree: string;
            MemAvailable: string;
            Buffers: string;
            Cached: string;
            SwapCached: string;
            Active: string;
            Inactive: '136524',
            'Active(anon)': string;
            'Inactive(anon)': string;
            'Active(file)': string;
            'Inactive(file)': string;
            Unevictable: string;
            Mlocked: string;
            SwapTotal: string;
            SwapFree: string;
            Dirty: string;
            Writeback: string;
            AnonPages: string;
            Mapped: string;
            Shmem: string;
            Slab: string;
            SReclaimable: string;
            SUnreclaim: string;
            KernelStack: string;
            PageTables: string;
            NFS_Unstable: string;
            Bounce: string;
            WritebackTmp: string;
            CommitLimit: string;
            Committed_AS: string;
            VmallocTotal: string;
            VmallocUsed: string;
            VmallocChunk: string;
            AnonHugePages: string;
            HugePages_Total: string;
            HugePages_Free: string;
            HugePages_Rsvd: string;
            HugePages_Surp: string;
            Hugepagesize: string;
            DirectMap4k: string;
            DirectMap2M: string;
        }

        export interface MemoryStat {
            size: string;
            resident: string;
            share: string;
            text: string;
            lib: string;
            data: string;
            dt: string;
        }

        export interface Net {
            Interface: string;
            bytes: { Receive: string; Transmit: string; },
            packets: { Receive: string; Transmit: string; },
            errs: { Receive: string; Transmit: string; },
            drop: { Receive: string; Transmit: string; },
            fifo: { Receive: string; Transmit: string; },
            frame: { Receive: string; },
            compressed: { Receive: string; Transmit: string; },
            multicast: { Receive: string; },
            colls: { Transmit: string; },
            carrier: { Transmit: string; }
        }

        export interface Io {
            cancelled_write_bytes: string;
            rchar: string;
            read_bytes: string;
            syscr: string;
            syscw: string;
            wchar: string;
            write_bytes: string;
        }

        export interface Stat {
            pid: string;
            comm: string;
            state: string;
            ppid: string;
            pgrp: string;
            session: string;
            tty_nr: string;
            tpgid: string;
            flags: string;
            minflt: string;
            cminflt: string;
            majflt: string;
            cmajflt: string;
            utime: string;
            stime: string;
            cutime: string;
            cstime: string;
            priority: string;
            nice: string;
            num_threads: string;
            itrealvalue: string;
            starttime: string;
            vsize: string;
            rss: string;
            rsslim: string;
            startcode: string;
            endcode: string;
            startstack: string;
            kstkesp: string;
            kstkeip: string;
            signal: string;
            blocked: string;
            sigignore: string;
            sigcatch: string;
            wchan: string;
            nswap: string;
            cnswap: string;
            exit_signal: string;
            processor: string;
            rt_priority: string;
            policy: string;
            delayacct_blkio_ticks: string;
            guest_time: string;
            cguest_time: string;
        }

        export interface Status {
            Name: string;
            State: string;
            Tgid: string;
            Pid: string;
            PPid: string;
            TracerPid: string;
            Uid: string;
            Gid: string;
            FDSize: string;
            Groups: string;
            VmPeak: string;
            VmSize: string;
            VmLck: string;
            VmPin: string;
            VmHWM: string;
            VmRSS: string;
            VmData: string;
            VmStk: string;
            VmExe: string;
            VmLib: string;
            VmPTE: string;
            VmSwap: string;
            Threads: string;
            SigQ: string;
            SigPnd: string;
            ShdPnd: string;
            SigBlk: string;
            SigIgn: string;
            SigCgt: string;
            CapInh: string;
            CapPrm: string;
            CapEff: string;
            CapBnd: string;
            Cpus_allowed: string;
            Cpus_allowed_list: string;
            Mems_allowed: string;
            Mems_allowed_list: string;
            voluntary_ctxt_switches: string;
            nonvoluntary_ctxt_switches: string;
        }

        export interface Tcp {
            sl: string;
            local_address: string;
            rem_address: string;
            st: string;
            tx_queue: string;
            rx_queue: string;
            tr: string;
            'tm->when': string;
            retrnsmt: string;
            uid: string;
            timeout: string;
            inode: string;
            _: { [key: string]: string; };
        }

        export interface Udp {
            sl: string;
            local_address: string;
            rem_address: string;
            st: string;
            tx_queue: string;
            rx_queue: string;
            tr: string;
            'tm->when': string;
            retrnsmt: string;
            uid: string;
            timeout: string;
            inode: string;
            ref: string;
            pointer: string;
            drops: string;
        }

        export interface UnixSocket {
            Num: string;
            RefCount: string;
            Protocol: string;
            Flags: string;
            Type: string;
            St: string;
            Inode: string;
            Path: string;
        }

        export interface Wifi {
            Interface: string;
            status: string;
            link: { Quality: string };
            level: { Quality: string };
            noise: { Quality: string };
            nwid: { 'Discarded packets': string };
            crypt: { 'Discarded packets': string };
            frag: { 'Discarded packets': string };
            retry: { 'Discarded packets': string };
            misc: { 'Discarded packets': string };
            beacon: { Missed: string };
        }

        export class Stat {
            argv(callback: Callback<string[]>): never;
            cpu(callback: Callback<Cpu>): never;
            cwd(callback: Callback<string>): never;
            disk(callback: Callback<DiskStat[]>): never;
            env(callback: Callback<string[]>): never;
            fd(fdPath: string, callback: Callback<FileDescriptor>): never;
            fds(callback: Callback<string[]>): never;
            meminfo(callback: Callback<MemoryInfo>): never;
            net(callback: Callback<Net[]>): never;
            io(callback: Callback<Io>): never;
            stat(callback: Callback<Stat>): never;
            statm(callback: Callback<MemoryStat>): never;
            status(callback: Callback<Status>): never;
            tcp(callback: Callback<Tcp[]>): never;
            thread(tid: number): Stat;
            threads(callback: Callback<string[]>): never;
            udp(callback: Callback<Udp[]>): never;
            unix(callback: Callback<UnixSocket[]>): never;
            wifi(callback: Callback<Wifi[]>): never;
            works: boolean;
        }
    }

    function procfs(pid: number): procfs.Stat;
    export = procfs;
}
