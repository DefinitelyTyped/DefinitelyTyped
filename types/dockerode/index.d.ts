// Type definitions for dockerode 2.5
// Project: https://github.com/apocas/dockerode
// Definitions by: Carl Winkler <https://github.com/seikho>
//                 Nicolas Laplante <https://github.com/nlaplante>
//                 ByeongHun Yoo <https://github.com/isac322>
//                 Ray Fang <https://github.com/lazarusx>
//                 Marius Meisenzahl <https://github.com/meisenzahl>
//                 Rob Moran <https://github.com/thegecko>
//                 Cameron Diver <https://github.com/CameronDiver>
//                 Pascal Sthamer <https://github.com/p4sca1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as stream from 'stream';
import * as events from 'events';

// The modem parameter is an instance of docker-modem, which is missing type declarations.
// https://github.com/apocas/docker-modem

declare namespace Dockerode {
  class Container {
    constructor(modem: any, id: string);

    modem: any;
    id: string;

    inspect(options: {}, callback: Callback<ContainerInspectInfo>): void;
    inspect(callback: Callback<ContainerInspectInfo>): void;
    inspect(options?: {}): Promise<ContainerInspectInfo>;

    rename(options: {}, callback: Callback<any>): void;
    rename(options: {}): Promise<any>;

    update(options: {}, callback: Callback<any>): void;
    update(options: {}): Promise<any>;

    top(options: {}, callback: Callback<any>): void;
    top(callback: Callback<any>): void;
    top(options?: {}): Promise<any>;

    changes(callback: Callback<any>): void;
    changes(): Promise<any>;

    export(callback: Callback<NodeJS.ReadableStream>): void;
    export(): Promise<NodeJS.ReadableStream>;

    start(options: {}, callback: Callback<any>): void;
    start(callback: Callback<any>): void;
    start(options?: {}): Promise<any>;

    pause(options: {}, callback: Callback<any>): void;
    pause(callback: Callback<any>): void;
    pause(options?: {}): Promise<any>;

    unpause(options: {}, callback: Callback<any>): void;
    unpause(callback: Callback<any>): void;
    unpause(options?: {}): Promise<any>;

    exec(options: {}, callback: Callback<any>): void;
    exec(options: {}): Promise<any>;

    commit(options: {}, callback: Callback<any>): void;
    commit(callback: Callback<any>): void;
    commit(options?: {}): Promise<any>;

    stop(options: {}, callback: Callback<any>): void;
    stop(callback: Callback<any>): void;
    stop(options?: {}): Promise<any>;

    restart(options: {}, callback: Callback<any>): void;
    restart(callback: Callback<any>): void;
    restart(options?: {}): Promise<any>;

    kill(options: {}, callback: Callback<any>): void;
    kill(callback: Callback<any>): void;
    kill(options?: {}): Promise<any>;

    resize(options: {}, callback: Callback<any>): void;
    resize(callback: Callback<any>): void;
    resize(options?: {}): Promise<any>;

    wait(callback: Callback<any>): void;
    wait(): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    /** Deprecated since RAPI v1.20 */
    copy(options: {}, callback: Callback<any>): void;
    /** Deprecated since RAPI v1.20 */
    copy(callback: Callback<any>): void;
    /** Deprecated since RAPI v1.20 */
    copy(options?: {}): Promise<any>;

    getArchive(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
    getArchive(options: {}): Promise<NodeJS.ReadableStream>;

    infoArchive(options: {}, callback: Callback<any>): void;
    infoArchive(options: {}): Promise<any>;

    /** @param file Filename (will read synchronously), Buffer or stream */
    putArchive(file: string | Buffer | NodeJS.ReadableStream, options: {}, callback: Callback<NodeJS.WritableStream>): void;
    putArchive(file: string | Buffer | NodeJS.ReadableStream, options: {}): Promise<NodeJS.ReadWriteStream>;

    logs(options: ContainerLogsOptions, callback: Callback<NodeJS.ReadableStream>): void;
    logs(callback: Callback<NodeJS.ReadableStream>): void;
    logs(options?: ContainerLogsOptions): Promise<NodeJS.ReadableStream>;

    stats(options: {}, callback: Callback<ContainerStats>): void;
    stats(callback: Callback<ContainerStats>): void;
    stats(options?: {}): Promise<ContainerStats>;

    attach(options: {}, callback: Callback<NodeJS.ReadWriteStream>): void;
    attach(options: {}): Promise<NodeJS.ReadWriteStream>;
  }

  class Image {
    constructor(modem: any, name: string);

    modem: any;
    id: string;

    inspect(callback: Callback<ImageInspectInfo>): void;
    inspect(): Promise<ImageInspectInfo>;

    history(callback: Callback<any>): void;
    history(): Promise<any>;

    get(callback: Callback<NodeJS.ReadableStream>): void;
    get(): Promise<NodeJS.ReadableStream>;

    push(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
    push(callback: Callback<NodeJS.ReadableStream>): void;
    push(options?: {}): Promise<NodeJS.ReadableStream>;

    tag(options: {}, callback: Callback<any>): void;
    tag(callback: Callback<any>): void;
    tag(options?: {}): Promise<any>;

    remove(options: {}, callback: Callback<ImageRemoveInfo>): void;
    remove(callback: Callback<ImageRemoveInfo>): void;
    remove(options?: {}): Promise<any>;
  }

  class Volume {
    constructor(modem: any, name: string);

    modem: any;
    name: string;

    inspect(callback: Callback<VolumeInspectInfo>): void;
    inspect(): Promise<VolumeInspectInfo>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
  }

  class Service {
    constructor(modem: any, id: string);

    modem: any;
    id: string;

    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    update(options: {}, callback: Callback<any>): void;
    update(options: {}): Promise<any>;

    logs(options: ContainerLogsOptions, callback: Callback<NodeJS.ReadableStream>): void;
    logs(callback: Callback<NodeJS.ReadableStream>): void;
    logs(options?: ContainerLogsOptions): Promise<NodeJS.ReadableStream>;
  }

  class Task {
    constructor(modem: any, id: string);

    modem: any;
    id: string;

    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;
  }

  class Node {
    constructor(modem: any, id: string);

    modem: any;
    id: string;

    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    update(options: {}, callback: Callback<any>): void;
    update(callback: Callback<any>): void;
    update(options?: {}): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
  }

  class Plugin {
    constructor(modem: any, name: string, remote?: any);

    modem: any;
    name: string;
    remote: any;

    inspect(callback: Callback<PluginInspectInfo>): void;
    inspect(): Promise<PluginInspectInfo>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    privileges(callback: Callback<any>): void;
    privileges(): Promise<any>;

    pull(options: {}, callback: Callback<any>): void;
    pull(options: {}): Promise<any>;

    enable(options: {}, callback: Callback<any>): void;
    enable(callback: Callback<any>): void;
    enable(options?: {}): Promise<any>;

    disable(options: {}, callback: Callback<any>): void;
    disable(callback: Callback<any>): void;
    disable(options?: {}): Promise<any>;

    push(options: {}, callback: Callback<any>): void;
    push(callback: Callback<any>): void;
    push(options?: {}): Promise<any>;

    configure(options: {}, callback: Callback<any>): void;
    configure(callback: Callback<any>): void;
    configure(options?: {}): Promise<any>;

    upgrade(auth: any, options: {}, callback: Callback<any>): void;
    upgrade(auth: any, callback: Callback<any>): void;
    upgrade(auth: any, options?: {}): Promise<any>;
  }

  class Secret {
    constructor(modem: any, id: string);

    modem: any;
    id: string;

    inspect(callback: Callback<SecretInfo>): void;
    inspect(): Promise<SecretInfo>;

    update(options: {}, callback: Callback<any>): void;
    update(callback: Callback<any>): void;
    update(options?: {}): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
  }

  class Network {
    constructor(modem: any, id: string);

    modem: any;
    id: string;

    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    connect(options: {}, callback: Callback<any>): void;
    connect(callback: Callback<any>): void;
    connect(options?: {}): Promise<any>;

    disconnect(options: {}, callback: Callback<any>): void;
    disconnect(callback: Callback<any>): void;
    disconnect(options?: {}): Promise<any>;
  }

  class Exec {
    constructor(modem: any, id: string);

    modem: any;
    id: string;

    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    start(options: {}, callback: Callback<any>): void;
    start(options: {}): Promise<any>;

    resize(options: {}, callback: Callback<any>): void;
    resize(options: {}): Promise<any>;
  }

  class Config {
    constructor(modem: any, id: string);

    modem: any;
    id: string;

    inspect(callback: Callback<ConfigInfo>): void;
    inspect(): Promise<ConfigInfo>;

    update(options: {}, callback: Callback<any>): void;
    update(callback: Callback<any>): void;
    update(options?: {}): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
  }

  interface ImageInfo {
    Id: string;
    ParentId: string;
    RepoTags: string[];
    RepoDigests?: string[];
    Created: number;
    Size: number;
    VirtualSize: number;
    Labels: { [label: string]: string };
  }

  interface ContainerInfo {
    Id: string;
    Names: string[];
    Image: string;
    ImageID: string;
    Command: string;
    Created: number;
    Ports: Port[];
    Labels: { [label: string]: string };
    State: string;
    Status: string;
    HostConfig: {
      NetworkMode: string;
    };
    NetworkSettings: {
      Networks: { [networkType: string]: NetworkInfo }
    };
    Mounts: Array<{
      Name?: string;
      Type: string;
      Source: string;
      Destination: string;
      Driver?: string;
      Mode: string;
      RW: boolean;
      Propagation: string;
    }>;
  }

  interface Port {
    IP: string;
    PrivatePort: number;
    PublicPort: number;
    Type: string;
  }

  interface NetworkInfo {
    IPAMConfig?: any;
    Links?: any;
    Aliases?: any;
    NetworkID: string;
    EndpointID: string;
    Gateway: string;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    MacAddress: string;
  }

  // Information returned from inspecting a network
  interface NetworkInspectInfo {
    Name: string;
    Id: string;
    Created: string;
    Scope: string;
    Driver: string;
    EnableIPv6: boolean;
    IPAM?: IPAM;
    Internal: boolean;
    Attachable: boolean;
    Ingress: boolean;
    Containers?: { [id: string]: NetworkContainer };
    Options?: { [key: string]: string };
    Labels?: { [key: string]: string };
  }

  interface NetworkContainer {
    Name: string;
    EndpointID: string;
    MacAddress: string;
    Ipv4Address: string;
    IPv6Address: string;
  }

  /* tslint:disable:interface-name */
  interface IPAM {
    Driver: string;
    Config?: { [key: string]: string };
    Options?: Array<{ [key: string]: string }>;
  }
  /* tslint:enable:interface-name */

  interface VolumeInspectInfo {
    Name: string;
    Driver: string;
    Mountpoint: string;
    Status?: { [key: string]: string };
    Labels: { [key: string]: string };
    Scope: 'local' | 'global';
    // Field is always present, but sometimes is null
    Options: { [key: string]: string } | null;
    // Field is sometimes present, and sometimes null
    UsageData?: {
      Size: number;
      RefCount: number;
    } | null;
  }

  interface ContainerInspectInfo {
    Id: string;
    Created: string;
    Path: string;
    Args: string[];
    State: {
      Status: string;
      Running: boolean;
      Paused: boolean;
      Restarting: boolean;
      OOMKilled: boolean;
      Dead: boolean;
      Pid: number;
      ExitCode: number;
      Error: string;
      StartedAt: string;
      FinishedAt: string;
      Health?: {
        Status: string;
        FailingStreak: number;
        Log: Array<{
          Start: string;
          End: string;
          ExitCode: number;
          Output: string;
        }>;
      };
    };
    Image: string;
    ResolvConfPath: string;
    HostnamePath: string;
    HostsPath: string;
    LogPath: string;
    Name: string;
    RestartCount: number;
    Driver: string;
    MountLabel: string;
    ProcessLabel: string;
    AppArmorProfile: string;
    ExecIDs?: any;
    HostConfig: HostConfig;
    GraphDriver: {
      Name: string;
      Data: {
        DeviceId: string;
        DeviceName: string;
        DeviceSize: string;
      }
    };
    Mounts: Array<{
      Name?: string;
      Source: string;
      Destination: string;
      Mode: string;
      RW: boolean;
      Propagation: string;
    }>;
    Config: {
      Hostname: string;
      Domainname: string;
      User: string;
      AttachStdin: boolean;
      AttachStdout: boolean;
      AttachStderr: boolean;
      ExposedPorts: { [portAndProtocol: string]: {} };
      Tty: boolean;
      OpenStdin: boolean;
      StdinOnce: boolean;
      Env: string[];
      Cmd: string[];
      Image: string;
      Volumes: { [volume: string]: {} };
      WorkingDir: string;
      Entrypoint?: string | string[];
      OnBuild?: any;
      Labels: { [label: string]: string }
    };
    NetworkSettings: {
      Bridge: string;
      SandboxID: string;
      HairpinMode: boolean;
      LinkLocalIPv6Address: string;
      LinkLocalIPv6PrefixLen: number;
      Ports: {
        [portAndProtocol: string]: Array<{
          HostIp: string;
          HostPort: string;
        }>;
      };
      SandboxKey: string;
      SecondaryIPAddresses?: any;
      SecondaryIPv6Addresses?: any;
      EndpointID: string;
      Gateway: string;
      GlobalIPv6Address: string;
      GlobalIPv6PrefixLen: number;
      IPAddress: string;
      IPPrefixLen: number;
      IPv6Gateway: string;
      MacAddress: string;
      Networks: {
        [type: string]: {
          IPAMConfig?: any;
          Links?: any;
          Aliases?: any;
          NetworkID: string;
          EndpointID: string;
          Gateway: string;
          IPAddress: string;
          IPPrefixLen: number;
          IPv6Gateway: string;
          GlobalIPv6Address: string;
          GlobalIPv6PrefixLen: number;
          MacAddress: string;
        };
      };
      Node?: {
        ID: string;
        IP: string;
        Addr: string;
        Name: string;
        Cpus: number;
        Memory: number;
        Labels: any;
      };
    };
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

  interface ContainerStats {
    read: string;
    pid_stats: {
      current: number;
    };
    networks: NetworkStats;
    memory_stats: MemoryStats;
    blkio_stats: {};
    cpu_stats: CPUStats;
    precpu_stats: CPUStats;
  }

  interface HostConfig {
    AutoRemove?: boolean;
    Binds?: string[];
    ContainerIDFile?: string;
    LogConfig?: {
      Type: string;
      Config: any;
    };
    NetworkMode?: string;
    PortBindings?: any;
    RestartPolicy?: RestartPolicy;
    VolumeDriver?: string;
    VolumesFrom?: any;
    Mounts?: MountConfig;
    CapAdd?: any;
    CapDrop?: any;
    Dns?: any[];
    DnsOptions?: any[];
    DnsSearch?: any[];
    ExtraHosts?: any;
    GroupAdd?: string[];
    IpcMode?: string;
    Cgroup?: string;
    Links?: any;
    OomScoreAdj?: number;
    PidMode?: string;
    Privileged?: boolean;
    PublishAllPorts?: boolean;
    ReadonlyRootfs?: boolean;
    SecurityOpt?: any;
    StorageOpt?: { [option: string]: string };
    Tmpfs?: { [dir: string]: string };
    UTSMode?: string;
    UsernsMode?: string;
    ShmSize?: number;
    Sysctls?: { [index: string]: string };
    Runtime?: string;
    ConsoleSize?: number[];
    Isolation?: string;
    MaskedPaths?: string[];
    ReadonlyPaths?: string[];
    CpuShares?: number;
    CgroupParent?: string;
    BlkioWeight?: number;
    BlkioWeightDevice?: any;
    BlkioDeviceReadBps?: any;
    BlkioDeviceWriteBps?: any;
    BlkioDeviceReadIOps?: any;
    BlkioDeviceWriteIOps?: any;
    CpuPeriod?: number;
    CpuQuota?: number;
    CpusetCpus?: string;
    CpusetMems?: string;
    Devices?: any;
    DiskQuota?: number;
    KernelMemory?: number;
    Memory?: number;
    MemoryReservation?: number;
    MemorySwap?: number;
    MemorySwappiness?: number;
    OomKillDisable?: boolean;
    PidsLimit?: number;
    Ulimits?: any;
  }

  interface ImageInspectInfo {
    Id: string;
    RepoTags: string[];
    RepoDigests: string[];
    Parent: string;
    Comment: string;
    Created: string;
    Container: string;
    ContainerConfig:
    {
      Hostname: string;
      Domainname: string;
      User: string;
      AttachStdin: boolean;
      AttachStdout: boolean;
      AttachStderr: boolean;
      ExposedPorts: { [portAndProtocol: string]: {} };
      Tty: boolean;
      OpenStdin: boolean;
      StdinOnce: boolean;
      Env: string[];
      Cmd: string[];
      ArgsEscaped: boolean;
      Image: string;
      Volumes: { [path: string]: {} },
      WorkingDir: string;
      Entrypoint?: string | string[];
      OnBuild?: any[];
      Labels: { [label: string]: string }
    };
    DockerVersion: string;
    Author: string;
    Config:
    {
      Hostname: string;
      Domainname: string;
      User: string;
      AttachStdin: boolean;
      AttachStdout: boolean;
      AttachStderr: boolean;
      ExposedPorts: { [portAndProtocol: string]: {} }
      Tty: boolean;
      OpenStdin: boolean;
      StdinOnce: boolean;
      Env: string[];
      Cmd: string[];
      ArgsEscaped: boolean;
      Image: string;
      Volumes: { [path: string]: {} },
      WorkingDir: string;
      Entrypoint?: string | string[];
      OnBuild: any[];
      Labels: { [label: string]: string }
    };
    Architecture: string;
    Os: string;
    Size: number;
    VirtualSize: number;
    GraphDriver:
    {
      Name: string;
      Data:
      {
        DeviceId: string;
        DeviceName: string;
        DeviceSize: string;
      }
    };
    RootFS: {
      Type: string;
      Layers?: string[];
      BaseLayer?: string;
    };
  }

  interface AuthConfig {
    username: string;
    password: string;
    serveraddress: string;
    email?: string;
  }

  interface PortBinding {
    HostIp?: string;
    HostPort?: string;
  }

  interface PortMap {
    [key: string]: PortBinding[];
  }

  interface RestartPolicy {
    Name: string;
    MaximumRetryCount?: number;
  }

  type LoggingDriverType =
    | "json-file"
    | "syslog"
    | "journald"
    | "gelf"
    | "fluentd"
    | "awslogs"
    | "splunk"
    | "etwlogs"
    | "none";

  interface LogConfig {
    Type: LoggingDriverType;
    Config?: { [key: string]: string };
  }

  interface DeviceMapping {
    PathOnHost: string;
    PathInContainer: string;
    CgroupPermissions: string;
  }

  /* tslint:disable:interface-name */
  interface IPAMConfig {
    IPv4Address?: string;
    IPv6Address?: string;
    LinkLocalIPs?: string[];
  }
  /* tslint:enable:interface-name */

  interface EndpointSettings {
    IPAMConfig?: IPAMConfig;
    Links?: string[];
    Aliases?: string[];
    NetworkID?: string;
    EndpointID?: string;
    Gateway?: string;
    IPAddress?: string;
    IPPrefixLen?: number;
    IPv6Gateway?: string;
    GlobalIPv6Address?: string;
    GlobalIPV6PrefixLen?: number;
    MacAddress?: string;
    DriverOpts?: { [key: string]: string };
  }

  interface EndpointsConfig {
    [key: string]: EndpointSettings;
  }

  type MountType =
    | "bind"
    | "volume"
    | "tmpfs";

  type MountConsistency =
    | "default"
    | "consistent"
    | "cached"
    | "delegated";

  type MountPropagation =
    | "private"
    | "rprivate"
    | "shared"
    | "rshared"
    | "slave"
    | "rslave";

  interface MountSettings {
    Target: string;
    Source: string;
    Type: MountType;
    ReadOnly ?: boolean;
    Consistency ?: MountConsistency;
    BindOptions ?: {
      Propagation: MountPropagation;
    };
    VolumeOptions ?: {
      NoCopy: boolean;
      Labels: { [label: string]: string };
      DriverConfig: {
          Name: string;
          Options: { [option: string]: string};
      };
    };
    TmpfsOptions ?: {
      SizeBytes: number;
      Mode: number;
    };
  }

  type MountConfig = MountSettings[];

  interface ContainerCreateOptions {
    name?: string;
    Hostname?: string;
    Domainname?: string;
    User?: string;
    AttachStdin?: boolean;
    AttachStdout?: boolean;
    AttachStderr?: boolean;
    Tty?: boolean;
    OpenStdin?: boolean;
    StdinOnce?: boolean;
    Env?: string[];
    Cmd?: string[];
    Entrypoint?: string | string[];
    Image?: string;
    Labels?: { [label: string]: string };
    Volumes?: { [volume: string]: {} };
    WorkingDir?: string;
    NetworkDisabled?: boolean;
    MacAddress?: boolean;
    ExposedPorts?: { [port: string]: {} };
    StopSignal?: string;
    StopTimeout?: number;
    HostConfig?: HostConfig;
    NetworkingConfig?: {
      EndpointsConfig?: EndpointsConfig;
    };
  }

  interface KeyObject {
    pem: string | Buffer;
    passphrase?: string;
  }

  interface DockerOptions {
    socketPath?: string;
    host?: string;
    port?: number | string;
    ca?: string | string[] | Buffer | Buffer[];
    cert?: string | string[] | Buffer | Buffer[];
    key?: string | string[] | Buffer | Buffer[] | KeyObject[];
    protocol?: "https" | "http";
    timeout?: number;
    version?: string;
    Promise?: typeof Promise;
  }

  interface GetEventsOptions {
    since?: number;
    until?: number;
    filters?: string;
  }

  interface SecretVersion {
    Index: number;
  }

  interface ServiceSpec {
    Name: string;
  }

  interface SecretInfo {
    ID: string;
    Version: SecretVersion;
    CreatedAt: string;
    UpdatedAt?: string;
    Spec?: ServiceSpec;
  }

  interface ConfigInfo {
    ID: string;
    Version: SecretVersion;
    CreatedAt: string;
    UpdatedAt?: string;
    Spec?: ConfigSpec;
  }

  interface ConfigSpec {
    Name: string;
    Labels: { [label: string]: string };
    Data: string;
  }

  interface ConfigVersion {
    Index: number;
  }

  interface PluginInfo {
    Id?: string;
    Name: string;
    Enabled: boolean;
    Settings: PluginSettings;
    PluginReference?: string;
    Config: PluginConfig;
  }

  type PluginInspectInfo = PluginInfo;

  interface PluginSettings {
    Mounts: PluginMount[];
    Env: string[];
    Args: string[];
    Devices: PluginDevice[];
  }

  interface PluginConfig {
    Description: string;
    Documentation: string;
    Interface: any;
    Entrypoint: string[];
    WorkDir: string;
    User?: User;
    Network: Network;
    Linux: Linux;
    PropagatedMount: string;
    Mounts: PluginMount[];
    Env: PluginEnv[];
    Args: Args;
    rootfs: any;
  }

  interface Interface {
    Types: PluginInterfaceType[];
    Socket: string;
  }

  interface PluginInterfaceType {
    Prefix: string;
    Capability: string;
    Version: string;
  }

  interface PluginMount {
    Name: string;
    Description: string;
    Settable: string[];
    Source: string;
    Destination: string;
    Type: string;
    Options: string[];
  }

  interface Linux {
    Capabilities: string[];
    AllowAllDevices: boolean;
    Devices: PluginDevice[];
  }

  interface PluginDevice {
    Name: string;
    Description: string;
    Settable: string[];
    Path: string;
  }

  interface Network {
    Type: string;
  }

  interface PluginEnv {
    Name: string;
    Description: string;
    Settable: string[];
    Value: string;
  }

  interface Args {
    Name: string;
    Description: string;
    Settable: string[];
    Value: string;
  }

  interface User {
    UID: number;
    GID: number;
  }

  interface ImageRemoveInfo {
    Untagged: string;
    Deleted: string;
  }

  interface PruneImagesInfo {
    ImagesDeleted: ImageRemoveInfo[];
    SpaceReclaimed: number;
  }

  interface PruneVolumesInfo {
    VolumesDeleted: string[];
    SpaceReclaimed: number;
  }

  interface PruneContainersInfo {
    ContainersDeleted: string[];
    SpaceReclaimed: number;
  }

  interface PruneNetworksInfo {
    NetworksDeleted: string[];
  }

  interface ContainerLogsOptions {
    stdout?: boolean;
    stderr?: boolean;
    follow?: boolean;
    since?: number;
    details?: boolean;
    tail?: number;
    timestamps?: boolean;
  }

  interface ImageBuildContext {
    context: string;
    src: string[];
  }

  interface DockerVersion {
    ApiVersion: string;
    Arch: string;
    BuildTime: Date;
    Components: Array<{
      Details: {
        ApiVersion: string;
        Arch: string;
        BuildTime: Date;
        Experimental: string;
        GitCommit: string;
        GoVersion: string;
        KernelVersion: string;
        Os: string;
      };
      Name: string;
      Version: string;
    }>;
    GitCommit: string;
    GoVersion: string;
    KernelVersion: string;
    MinAPIVersion: string;
    Os: string;
    Platform: {
      Name: string;
    };
    Version: string;
  }
}

type Callback<T> = (error?: any, result?: T) => void;

declare class Dockerode {
  constructor(options?: Dockerode.DockerOptions);

  createContainer(options: Dockerode.ContainerCreateOptions, callback: Callback<Dockerode.Container>): void;
  createContainer(options: Dockerode.ContainerCreateOptions): Promise<Dockerode.Container>;

  createImage(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
  createImage(auth: any, options: {}, callback: Callback<NodeJS.ReadableStream>): void;
  createImage(options: {}): Promise<NodeJS.ReadableStream>;
  createImage(auth: any, options: {}): Promise<NodeJS.ReadableStream>;

  loadImage(file: string | NodeJS.ReadableStream, options: {}, callback: Callback<NodeJS.ReadableStream>): void;
  loadImage(file: string | NodeJS.ReadableStream, callback: Callback<NodeJS.ReadableStream>): void;
  loadImage(file: string | NodeJS.ReadableStream, options?: {}): Promise<NodeJS.ReadableStream>;

  importImage(file: string | NodeJS.ReadableStream, options: {}, callback: Callback<NodeJS.ReadableStream>): void;
  importImage(file: string | NodeJS.ReadableStream, callback: Callback<NodeJS.ReadableStream>): void;
  importImage(file: string | NodeJS.ReadableStream, options?: {}): Promise<NodeJS.ReadableStream>;

  checkAuth(options: any, callback: Callback<any>): void;
  checkAuth(options: any): Promise<any>;

  buildImage(file: string | NodeJS.ReadableStream | Dockerode.ImageBuildContext, options: {}, callback: Callback<NodeJS.ReadableStream>): void;
  buildImage(file: string | NodeJS.ReadableStream | Dockerode.ImageBuildContext, callback: Callback<NodeJS.ReadableStream>): void;
  buildImage(file: string | NodeJS.ReadableStream | Dockerode.ImageBuildContext, options?: {}): Promise<NodeJS.ReadableStream>;

  getContainer(id: string): Dockerode.Container;

  getImage(name: string): Dockerode.Image;

  getVolume(name: string): Dockerode.Volume;

  getPlugin(name: string, remote: any): Dockerode.Plugin;

  getService(id: string): Dockerode.Service;

  getTask(id: string): Dockerode.Task;

  getNode(id: string): Dockerode.Node;

  getNetwork(id: string): Dockerode.Network;

  getSecret(id: string): Dockerode.Secret;

  getExec(id: string): Dockerode.Exec;

  getConfig(id: string): Dockerode.Config;

  listContainers(options: {}, callback: Callback<Dockerode.ContainerInfo[]>): void;
  listContainers(callback: Callback<Dockerode.ContainerInfo[]>): void;
  listContainers(options?: {}): Promise<Dockerode.ContainerInfo[]>;

  listImages(options: {}, callback: Callback<Dockerode.ImageInfo[]>): void;
  listImages(callback: Callback<Dockerode.ImageInfo[]>): void;
  listImages(options?: {}): Promise<Dockerode.ImageInfo[]>;

  listServices(options: {}, callback: Callback<any[]>): void;
  listServices(callback: Callback<any[]>): void;
  listServices(options?: {}): Promise<any[]>;

  listNodes(options: {}, callback: Callback<any[]>): void;
  listNodes(callback: Callback<any[]>): void;
  listNodes(options?: {}): Promise<any[]>;

  listTasks(options: {}, callback: Callback<any[]>): void;
  listTasks(callback: Callback<any[]>): void;
  listTasks(options?: {}): Promise<any[]>;

  listSecrets(options: {}, callback: Callback<Dockerode.SecretInfo[]>): void;
  listSecrets(callback: Callback<Dockerode.SecretInfo[]>): void;
  listSecrets(options?: {}): Promise<Dockerode.SecretInfo[]>;

  listPlugins(options: {}, callback: Callback<Dockerode.PluginInfo[]>): void;
  listPlugins(callback: Callback<Dockerode.PluginInfo[]>): void;
  listPlugins(options?: {}): Promise<Dockerode.PluginInfo[]>;

  listVolumes(options: {}, callback: Callback<{
    Volumes: Dockerode.VolumeInspectInfo[];
    Warnings: string[];
  }>): void;
  listVolumes(callback: Callback<{
    Volumes: Dockerode.VolumeInspectInfo[];
    Warnings: string[];
  }>): void;
  listVolumes(options?: {}): Promise<{
    Volumes: Dockerode.VolumeInspectInfo[];
    Warnings: string[];
  }>;

  listNetworks(options: {}, callback: Callback<any[]>): void;
  listNetworks(callback: Callback<any[]>): void;
  listNetworks(options?: {}): Promise<any[]>;

  listConfigs(options: {}, callback: Callback<Dockerode.ConfigInfo[]>): void;
  listConfigs(callback: Callback<Dockerode.ConfigInfo[]>): void;
  listConfigs(options?: {}): Promise<Dockerode.ConfigInfo[]>;

  createSecret(options: {}, callback: Callback<any>): void;
  createSecret(options: {}): Promise<any>;

  createConfig(options: {}, callback: Callback<any>): void;
  createConfig(options: {}): Promise<any>;

  createPlugin(options: {}, callback: Callback<any>): void;
  createPlugin(options: {}): Promise<any>;

  createVolume(options: {}, callback: Callback<any>): void;
  createVolume(options: {}): Promise<any>;

  createService(options: {}, callback: Callback<any>): void;
  createService(options: {}): Promise<any>;

  createNetwork(options: {}, callback: Callback<any>): void;
  createNetwork(options: {}): Promise<any>;

  searchImages(options: {}, callback: Callback<any>): void;
  searchImages(options: {}): Promise<any>;

  pruneImages(options: {}, callback: Callback<Dockerode.PruneImagesInfo>): void;
  pruneImages(callback: Callback<Dockerode.PruneImagesInfo>): void;
  pruneImages(options?: {}): Promise<Dockerode.PruneImagesInfo>;

  pruneContainers(options: {}, callback: Callback<Dockerode.PruneContainersInfo>): void;
  pruneContainers(callback: Callback<Dockerode.PruneContainersInfo>): void;
  pruneContainers(options?: {}): Promise<Dockerode.PruneContainersInfo>;

  pruneVolumes(options: {}, callback: Callback<Dockerode.PruneVolumesInfo>): void;
  pruneVolumes(callback: Callback<Dockerode.PruneVolumesInfo>): void;
  pruneVolumes(options?: {}): Promise<Dockerode.PruneVolumesInfo>;

  pruneNetworks(options: {}, callback: Callback<Dockerode.PruneNetworksInfo>): void;
  pruneNetworks(callback: Callback<Dockerode.PruneNetworksInfo>): void;
  pruneNetworks(options?: {}): Promise<Dockerode.PruneNetworksInfo>;

  info(callback: Callback<any>): void;
  info(): Promise<any>;

  df(callback: Callback<any>): void;
  df(): Promise<any>;

  version(callback: Callback<Dockerode.DockerVersion>): void;
  version(): Promise<Dockerode.DockerVersion>;

  ping(callback: Callback<any>): void;
  ping(): Promise<any>;

  getEvents(options: Dockerode.GetEventsOptions, callback: Callback<NodeJS.ReadableStream>): void;
  getEvents(callback: Callback<NodeJS.ReadableStream>): void;
  getEvents(options?: Dockerode.GetEventsOptions): Promise<NodeJS.ReadableStream>;

  pull(repoTag: string, options: {}, callback: Callback<any>, auth?: {}): Dockerode.Image;
  pull(repoTag: string, options: {}, auth?: {}): Promise<any>;

  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream | NodeJS.WritableStream[], createOptions: {}, startOptions: {}, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream | NodeJS.WritableStream[], startOptions: {}, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream | NodeJS.WritableStream[], callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream | NodeJS.WritableStream[], createOptions: {}, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream | NodeJS.WritableStream[], createOptions?: {}, startOptions?: {}): Promise<any>;

  swarmInit(options: {}, callback: Callback<any>): void;
  swarmInit(options: {}): Promise<any>;

  swarmJoin(options: {}, callback: Callback<any>): void;
  swarmJoin(options: {}): Promise<any>;

  swarmLeave(options: {}, callback: Callback<any>): void;
  swarmLeave(options: {}): Promise<any>;

  swarmUpdate(options: {}, callback: Callback<any>): void;
  swarmUpdate(options: {}): Promise<any>;

  swarmInspect(callback: Callback<any>): void;
  swarmInspect(): Promise<any>;

  modem: any;
}

export = Dockerode;
