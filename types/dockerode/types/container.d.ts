import * as DockerModem from 'docker-modem';

import { Callback, GraphDriverData, HealthConfig, LogsOptions, Mount, ResizeOptions } from './common';
import * as Exec from './exec';
import { EndpointSettings } from './network';

declare namespace Container {
    interface Address {
        Addr?: string;
        PrefixLen?: number;
    }

    interface InspectOptions {
        size?: boolean;
    }

    interface RenameOptions {
        name: string;
    }

    interface UpdateOptions extends Resources {
        RestartPolicy?: RestartPolicy;
    }

    interface UpdateInfo {
        Warnings?: string[];
    }

    interface TopOptions {
        ps_args?: string;
    }

    interface TopInfo {
        Titles?: string[];
        Processes?: string[][];
    }

    type ChangesInfo = Array<{
        Path: string;
        Kind: 0 | 1 | 2;
    }>;

    interface StartOptions {
        detachKeys?: string;
    }

    interface ExecOptions {
        AttachStdin?: boolean;
        AttachStdout?: boolean;
        AttachStderr?: boolean;
        DetachKeys?: string;
        Tty?: boolean;
        Env?: string[];
        Cmd?: string[];
        Privileged?: boolean;
        User?: string;
        WorkingDir?: string;
    }

    interface CommitOptions extends Config {
        container?: string;
        repo?: string;
        tag?: string;
        comment?: string;
        author?: string;
        pause?: boolean;
        changes?: string;
    }

    interface StopOptions {
        t?: string;
    }

    interface RestartOptions {
        t?: string;
    }

    interface KillOptions {
        signal?: NodeJS.Signals;
    }

    interface WaitOptions {
        condition?: 'not-running' | 'next-exit' | 'removed';
    }

    interface WaitInfo {
        StatusCode: number;
        Error?: { Message?: string };
    }

    interface RemoveOptions {
        v?: boolean;
        force?: boolean;
        link?: boolean;
    }

    interface ArchiveOptions {
        path: string;
    }

    interface ArchiveInfoOptions {
        path: string;
    }

    interface PutArchiveOptions {
        path: string;
        noOverwriteDirNonDir?: string;
        copyUIDGID?: string;
    }

    interface StatsOptions {
        stream?: boolean;
        'one-shot'?: boolean;
    }

    interface StatsInfo {
        read: string;
        pid_stats: { current: number };
        networks: NetworkStats;
        memory_stats: MemoryStats;
        blkio_stats: {};
        cpu_stats: CPUStats;
        precpu_stats: CPUStats;
    }

    interface AttachOptions {
        detachKeys?: string;
        logs?: boolean;
        stream?: boolean;
        stdin?: boolean;
        stdout?: boolean;
        stderr?: boolean;
    }

    interface CreateOptions {
        name?: string;
        Hostname?: string;
        Domainname?: string;
        User?: string;
        AttachStdin?: boolean;
        AttachStdout?: boolean;
        AttachStderr?: boolean;
        ExposedPorts?: Record<string, any>;
        Tty?: boolean;
        OpenStdin?: boolean;
        StdinOnce?: boolean;
        Env?: string[];
        Cmd?: string[];
        Healthcheck?: HealthConfig;
        ArgsEscaped?: boolean;
        Image?: string;
        Volumes?: Record<string, any>;
        WorkingDir?: string;
        Entrypoint?: string[];
        NetworkDisabled?: boolean;
        MacAddress?: string;
        OnBuild?: string[];
        Labels?: Record<string, string>;
        StopSignal?: string;
        StopTimeout?: number;
        Shell?: string[];
        HostConfig?: HostConfig;
        NetworkingConfig?: NetworkingConfig;
    }

    interface NetworkingConfig {
        EndpointsConfig?: Record<string, EndpointSettings>;
    }

    interface ListOptions {
        all?: boolean;
        limit?: number;
        size?: boolean;
        filters?: ListFilters;
    }

    type ListFilters =
        | string
        | {
              ancestor?: string[];
              before?: string[];
              expose?: string[];
              exited?: number[];
              health?: Array<'starting' | 'healthy' | 'unhealthy' | 'none'>;
              id?: string[];
              isolation?: Array<'default' | 'process' | 'hyperv'>;
              'is-task'?: boolean[];
              label?: string[];
              name?: string[];
              network?: string[];
              publish?: string[];
              since?: string[];
              status?: Array<'created' | 'restarting' | 'running' | 'removing' | 'paused' | 'exited' | 'dead'>;
              volume?: string[];
          };

    interface PruneOptions {
        filters?: PruneFilters;
    }

    type PruneFilters =
        | string
        | {
              until?: string[];
              label?: string[];
          };

    interface PruneInfo {
        sDeleted: string[];
        SpaceReclaimed: number;
    }

    interface Info {
        Id?: string;
        Created?: string;
        Path?: string;
        Args?: string[];
        State?: State;
        Image?: string;
        ResolvConfPath?: string;
        HostnamePath?: string;
        HostsPath?: string;
        LogPath?: string;
        Name?: string;
        RestartCount?: number;
        Driver?: string;
        Platform?: string;
        MountLabel?: string;
        ProcessLabel?: string;
        AppArmorProfile?: string;
        ExecIDs?: string[];
        HostConfig?: HostConfig;
        GraphDriver?: GraphDriverData;
        SizeRw?: number;
        SizeRootFs?: number;
        Mounts?: MountPoint[];
        Config?: Config;
        NetworkSettings?: NetworkSettings;
    }

    interface State {
        Status?: 'created' | 'running' | 'paused' | 'restarting' | 'removing' | 'exited' | 'dead';
        Running?: boolean;
        Paused?: boolean;
        Restarting?: boolean;
        OOMKilled?: boolean;
        Dead?: boolean;
        Pid?: number;
        ExitCode?: number;
        Error?: string;
        StartedAt?: string;
        FinishedAt?: string;
    }

    interface Config {
        Hostname?: string;
        Domainname?: string;
        User?: string;
        AttachStdin?: boolean;
        AttachStdout?: boolean;
        AttachStderr?: boolean;
        ExposedPorts?: Record<string, any>;
        Tty?: boolean;
        OpenStdin?: boolean;
        StdinOnce?: boolean;
        Env?: string[];
        Cmd?: string[];
        Healthcheck?: HealthConfig;
        ArgsEscaped?: boolean;
        Image?: string;
        Volumes?: Record<string, any>;
        WorkingDir?: string;
        Entrypoint?: string[];
        NetworkDisabled?: boolean;
        MacAddress?: string;
        OnBuild?: string[];
        Labels?: Record<string, string>;
        StopSignal?: string;
        StopTimeout?: number;
        Shell?: string[];
    }

    interface Summary {
        Id?: string;
        Names?: string[];
        Image?: string;
        ImageID?: string;
        Command?: string;
        Created?: number;
        Ports?: Port[];
        SizeRw?: number;
        SizeRootFs?: number;
        Labels?: Record<string, string>;
        State?: string;
        Status?: string;
        HostConfig?: { NetworkMode?: string };
        NetworkSettings?: { Networks?: Record<string, EndpointSettings> };
        Mounts?: Mount[];
    }

    interface HostConfig {
        CpuShares?: number;
        Memory?: number;
        CgroupParent?: string;
        BlkioWeight?: number;
        BlkioWeightDevice?: Array<{ Path?: string; Weight?: number }>;
        BlkioDeviceReadBps?: ThrottleDevice[];
        BlkioDeviceWriteBps?: ThrottleDevice[];
        BlkioDeviceReadIOps?: ThrottleDevice[];
        BlkioDeviceWriteIOps?: ThrottleDevice[];
        CpuPeriod?: number;
        CpuQuota?: number;
        CpuRealtimePeriod?: number;
        CpuRealtimeRuntime?: number;
        CpusetCpus?: string;
        CpusetMems?: string;
        Devices?: DeviceMapping[];
        DeviceCgroupRules?: string[];
        DeviceRequests?: DeviceRequest[];
        KernelMemory?: number;
        KernelMemoryTCP?: number;
        MemoryReservation?: number;
        MemorySwap?: number;
        MemorySwappiness?: number;
        NanoCpus?: number;
        OomKillDisable?: boolean;
        Init?: boolean;
        PidsLimit?: number;
        Ulimits?: Array<{ Name?: string; Soft?: number; Hard?: number }>;
        CpuCount?: number;
        CpuPercent?: number;
        IOMaximumIOps?: number;
        IOMaximumBandwidth?: number;
        Binds?: string[];
        ContainerIDFile?: string;
        LogConfig?: {
            Type?: 'json-file' | 'syslog' | 'journald' | 'gelf' | 'fluentd' | 'awslogs' | 'splunk' | 'etwlogs' | 'none';
            Config?: Record<string, string>;
        };
        NetworkMode?: string;
        PortBindings?: PortMap;
        RestartPolicy?: RestartPolicy;
        AutoRemove?: boolean;
        VolumeDriver?: string;
        VolumesFrom?: string[];
        Mounts?: Mount[];
        CapAdd?: string[];
        CapDrop?: string[];
        CgroupnsMode?: 'private' | 'host';
        Dns?: string[];
        DnsOptions?: string[];
        DnsSearch?: string[];
        ExtraHosts?: string[];
        GroupAdd?: string[];
        IpcMode?: string;
        Cgroup?: string;
        Links?: string[];
        OomScoreAdj?: number;
        PidMode?: string;
        Privileged?: boolean;
        PublishAllPorts?: boolean;
        ReadonlyRootfs?: boolean;
        SecurityOpt?: string[];
        StorageOpt?: Record<string, string>;
        Tmpfs?: Record<string, string>;
        UTSMode?: string;
        UsernsMode?: string;
        ShmSize?: number;
        Sysctls?: Record<string, string>;
        Runtime?: string;
        ConsoleSize?: [number, number];
        Isolation?: 'default' | 'process' | 'hyperv';
        MaskedPaths?: string[];
        ReadonlyPaths?: string[];
    }

    interface DeviceRequest {
        Driver?: string;
        Count?: number;
        DeviceIDs?: string[];
        Capabilities?: string[][];
        Options?: Record<string, string>;
    }

    interface CPUStats {
        cpu_usage: {
            percpu_usage: number[];
            usage_in_usermode: number;
            total_usage: number;
            usage_in_kernelmode: number;
        };
        system_cpu_usage: number;
        online_cpus: number;
        throttling_data: {
            periods: number;
            throttled_periods: number;
            throttled_time: number;
        };
    }

    interface Resources {
        CpuShares?: number;
        Memory?: number;
        CgroupParent?: string;
        BlkioWeight?: number;
        BlkioWeightDevice?: Array<{ Path?: string; Weight?: number }>;
        BlkioDeviceReadBps?: ThrottleDevice[];
        BlkioDeviceWriteBps?: ThrottleDevice[];
        BlkioDeviceReadIOps?: ThrottleDevice[];
        BlkioDeviceWriteIOps?: ThrottleDevice[];
        CpuPeriod?: number;
        CpuQuota?: number;
        CpuRealtimePeriod?: number;
        CpuRealtimeRuntime?: number;
        CpusetCpus?: string;
        CpusetMems?: string;
        Devices?: DeviceMapping[];
        DeviceCgroupRules?: string[];
        DiskQuota?: number;
        KernelMemory?: number;
        MemoryReservation?: number;
        MemorySwap?: number;
        MemorySwappiness?: number;
        NanoCpus?: number;
        OomKillDisable?: boolean;
        Init?: boolean;
        PidsLimit?: number;
        Ulimits?: Array<{ Name?: string; Soft?: number; Hard?: number }>;
        CpuCount?: number;
        CpuPercent?: number;
        IOMaximumIOps?: number;
        IOMaximumBandwidth?: number;
    }

    interface ThrottleDevice {
        Path?: string;
        Rate?: number;
    }

    interface DeviceMapping {
        PathOnHost?: string;
        PathInContainer?: string;
        CgroupPermissions?: string;
    }

    interface RestartPolicy {
        Name?: '' | 'always' | 'unless-stopped' | 'on-failure';
        MaximumRetryCount?: number;
    }

    interface NetworkSettings {
        Bridge?: string;
        SandboxID?: string;
        HairpinMode?: boolean;
        LinkLocalIPv6Address?: string;
        LinkLocalIPv6PrefixLen?: number;
        Ports?: PortMap;
        SandboxKey?: string;
        SecondaryIPAddresses?: Address[];
        SecondaryIPv6Addresses?: Address[];
        EndpointID?: string;
        Gateway?: string;
        GlobalIPv6Address?: string;
        GlobalIPv6PrefixLen?: number;
        IPAddress?: string;
        IPPrefixLen?: number;
        IPv6Gateway?: string;
        MacAddress?: string;
        Networks?: Record<string, EndpointSettings>;
    }

    interface IdResponse {
        Id: string;
    }

    interface MountPoint {
        Type?: string;
        Name?: string;
        Source?: string;
        Destination?: string;
        Driver?: string;
        Mode?: string;
        RW?: boolean;
        Propagation?: string;
    }

    interface Port {
        IP?: string;
        PrivatePort: number;
        PublicPort?: number;
        Type: 'tcp' | 'udp' | 'sctp';
    }

    interface PortBinding {
        HostIp?: string;
        HostPort?: string;
    }

    interface PortMap {
        [name: string]: PortBinding[];
    }

    interface NetworkStats {
        [name: string]: {
            rx_bytes: number;
            rx_dropped: number;
            rx_errors: number;
            rx_packets: number;
            tx_bytes: number;
            tx_dropped: number;
            tx_errors: number;
            tx_packets: number;
        };
    }

    interface MemoryStats {
        stats: {
            total_pgmajfault: number;
            cache: number;
            mapped_file: number;
            total_inactive_file: number;
            pgpgout: number;
            rss: number;
            total_mapped_file: number;
            writeback: number;
            unevictable: number;
            pgpgin: number;
            total_unevictable: number;
            pgmajfault: number;
            total_rss: number;
            total_rss_huge: number;
            total_writeback: number;
            total_inactive_anon: number;
            rss_huge: number;
            hierarchical_memory_limit: number;
            total_pgfault: number;
            total_active_file: number;
            active_anon: number;
            total_active_anon: number;
            total_pgpgout: number;
            total_cache: number;
            inactive_anon: number;
            active_file: number;
            pgfault: number;
            inactive_file: number;
            total_pgpgin: number;
        };
        max_usage: number;
        usage: number;
        failcnt: number;
        limit: number;
    }
}

declare class Container {
    constructor(modem: DockerModem, id: string);

    modem: DockerModem;
    id: string;

    inspect(options: Container.InspectOptions, callback: Callback<Container.Info>): void;
    inspect(callback: Callback<Container.Info>): void;
    inspect(options?: Container.InspectOptions): Promise<Container.Info>;

    rename(options: Container.RenameOptions, callback: Callback<void>): void;
    rename(options: Container.RenameOptions): Promise<void>;

    update(options: Container.UpdateOptions, callback: Callback<Container.UpdateInfo>): void;
    update(options: Container.UpdateOptions): Promise<Container.UpdateInfo>;

    top(options: Container.TopOptions, callback: Callback<Container.TopInfo>): void;
    top(callback: Callback<Container.TopInfo>): void;
    top(options?: Container.TopOptions): Promise<Container.TopInfo>;

    changes(callback: Callback<Container.ChangesInfo>): void;
    changes(): Promise<Container.ChangesInfo>;

    export(callback: Callback<NodeJS.ReadableStream>): void;
    export(): Promise<NodeJS.ReadableStream>;

    start(options: Container.StartOptions, callback: Callback<void>): void;
    start(callback: Callback<void>): void;
    start(options?: Container.StartOptions): Promise<void>;

    pause(options: {}, callback: Callback<void>): void;
    pause(callback: Callback<void>): void;
    pause(options?: {}): Promise<void>;

    unpause(options: {}, callback: Callback<void>): void;
    unpause(callback: Callback<void>): void;
    unpause(options?: {}): Promise<void>;

    exec(options: Container.ExecOptions, callback: Callback<Exec>): void;
    exec(options: Container.ExecOptions): Promise<Exec>;

    commit(options: Container.CommitOptions, callback: Callback<Container.IdResponse>): void;
    commit(callback: Callback<Container.IdResponse>): void;
    commit(options?: Container.CommitOptions): Promise<Container.IdResponse>;

    stop(options: Container.StopOptions, callback: Callback<void>): void;
    stop(callback: Callback<void>): void;
    stop(options?: Container.StopOptions): Promise<void>;

    restart(options: Container.RestartOptions, callback: Callback<void>): void;
    restart(callback: Callback<void>): void;
    restart(options?: Container.RestartOptions): Promise<void>;

    kill(options: Container.KillOptions, callback: Callback<void>): void;
    kill(callback: Callback<void>): void;
    kill(options?: Container.KillOptions): Promise<void>;

    resize(options: ResizeOptions, callback: Callback<void>): void;
    resize(callback: Callback<void>): void;
    resize(options?: ResizeOptions): Promise<void>;

    wait(options: Container.WaitOptions, callback: Callback<Container.WaitInfo>): void;
    wait(callback: Callback<Container.WaitInfo>): void;
    wait(options?: Container.WaitOptions): Promise<Container.WaitInfo>;

    remove(options: Container.RemoveOptions, callback: Callback<void>): void;
    remove(callback: Callback<void>): void;
    remove(options?: Container.RemoveOptions): Promise<void>;

    /** Deprecated since RAPI v1.20 */
    copy(options: {}, callback: Callback<any>): void;
    /** Deprecated since RAPI v1.20 */
    copy(callback: Callback<any>): void;
    /** Deprecated since RAPI v1.20 */
    copy(options?: {}): Promise<any>;

    getArchive(options: Container.ArchiveOptions, callback: Callback<NodeJS.ReadableStream>): void;
    getArchive(options: Container.ArchiveOptions): Promise<NodeJS.ReadableStream>;

    infoArchive(options: Container.ArchiveInfoOptions, callback: Callback<void>): void;
    infoArchive(options: Container.ArchiveInfoOptions): Promise<void>;

    /** @param file Filename (will read synchronously), Buffer or stream */
    putArchive(
        file: string | Buffer | NodeJS.ReadableStream,
        options: Container.PutArchiveOptions,
        callback: Callback<NodeJS.WritableStream>,
    ): void;
    putArchive(
        file: string | Buffer | NodeJS.ReadableStream,
        options: Container.PutArchiveOptions,
    ): Promise<NodeJS.ReadWriteStream>;

    logs(options: LogsOptions, callback: Callback<NodeJS.ReadableStream>): void;
    logs(callback: Callback<NodeJS.ReadableStream>): void;
    logs(options?: LogsOptions): Promise<NodeJS.ReadableStream>;

    stats(options: Container.StatsOptions, callback: Callback<Container.StatsInfo>): void;
    stats(callback: Callback<Container.StatsInfo>): void;
    stats(options?: Container.StatsOptions): Promise<Container.StatsInfo>;

    attach(options: Container.AttachOptions, callback: Callback<NodeJS.ReadWriteStream>): void;
    attach(options: Container.AttachOptions): Promise<NodeJS.ReadWriteStream>;
}

export = Container;
