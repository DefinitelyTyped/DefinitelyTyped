// Type definitions for dockerode 2.5
// Project: https://github.com/apocas/dockerode
// Definitions by: Carl Winkler <https://github.com/seikho>
//                 Nicolas Laplante <https://github.com/nlaplante>
//                 ByeongHun Yoo <https://github.com/isac322>
//                 Ray Fang <https://github.com/lazarusx>
//                 Marius Meisenzahl <https://github.com/meisenzahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as stream from 'stream';
import * as events from 'events';

declare namespace Dockerode {
  interface Container {
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

    stats(options: {}, callback: Callback<any>): void;
    stats(callback: Callback<any>): void;
    stats(options?: {}): Promise<any>;

    attach(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
    attach(options: {}): Promise<NodeJS.ReadableStream>;

    modem: any;
    id?: string;
  }

  interface Image {
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

    modem: any;
    id?: string;
  }

  interface Volume {
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    modem: any;
    name?: string;
  }

  interface Service {
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    update(options: {}, callback: Callback<any>): void;
    update(options: {}): Promise<any>;

    modem: any;
    id?: string;
  }

  interface Task {
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    modem: any;
    id?: string;
  }

  interface Node {
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    update(options: {}, callback: Callback<any>): void;
    update(callback: Callback<any>): void;
    update(options?: {}): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    modem: any;
    id?: string;
  }

  interface Plugin {
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

  interface Secret {
    inspect(callback: Callback<SecretInfo>): void;
    inspect(): Promise<SecretInfo>;

    update(options: {}, callback: Callback<any>): void;
    update(callback: Callback<any>): void;
    update(options?: {}): Promise<any>;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    modem: any;
    id?: string;
  }

  interface Network {
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

    modem: any;
    id?: string;
  }

  interface Exec {
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;

    start(options: {}, callback: Callback<any>): void;
    start(options: {}): Promise<any>;

    resize(options: {}, callback: Callback<any>): void;
    resize(options: {}): Promise<any>;

    modem: any;
    id?: string;
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
      Entrypoint?: any;
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
        [portAndProtocol: string]: {
          HostIp: string;
          HostPort: string;
        }
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
        }
      };
      Node?: {
          ID: string;
          IP: string;
          Addr: string;
          Name: string;
          Cpus: number;
          Memory: number;
          Labels: any;
      }
    };
  }

  interface HostConfig {
    AutoRemove: boolean;
    Binds: string[];
    ContainerIDFile: string;
    LogConfig: {
      Type: string;
      Config: any;
    };
    NetworkMode: string;
    PortBindings?: any;
    RestartPolicy: {
      Name: string;
      MaximumRetryCount: number;
    };
    VolumeDriver: string;
    VolumesFrom?: any;
    CapAdd?: any;
    CapDrop?: any;
    Dns: any[];
    DnsOptions: any[];
    DnsSearch: any[];
    ExtraHosts?: any;
    IpcMode: string;
    Links?: any;
    OomScoreAdj: number;
    PidMode: string;
    Privileged: boolean;
    PublishAllPorts: boolean;
    ReadonlyRootfs: boolean;
    SecurityOpt?: any;
    UTSMode: string;
    ShmSize: number;
    ConsoleSize: number[];
    Isolation: string;
    CpuShares: number;
    CgroupParent: string;
    BlkioWeight: number;
    BlkioWeightDevice?: any;
    BlkioDeviceReadBps?: any;
    BlkioDeviceWriteBps?: any;
    BlkioDeviceReadIOps?: any;
    BlkioDeviceWriteIOps?: any;
    CpuPeriod: number;
    CpuQuota: number;
    CpusetCpus: string;
    CpusetMems: string;
    Devices?: any;
    DiskQuota: number;
    KernelMemory: number;
    Memory: number;
    MemoryReservation: number;
    MemorySwap: number;
    MemorySwappiness: number;
    OomKillDisable: boolean;
    PidsLimit: number;
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
      Entrypoint?: any;
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
      Entrypoint?: any;
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
  }

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
    Entrypoint?: string;
    Image?: string;
    Labels?: { [label: string]: string };
    Volumes?: { [volume: string]: {} };
    WorkingDir?: string;
    NetworkDisabled?: boolean;
    MacAddress?: boolean;
    ExposedPorts?: { [port: string]: {} };
    StopSignal?: string;
    HostConfig?: {
      AutoRemove?: boolean;
      Binds?: string[];
      Links?: string[];
      Memory?: number;
      MemorySwap?: number;
      MemoryReservation?: number;
      KernelMemory?: number;
      CpuPercent?: number;
      CpuShares?: number;
      CpuPeriod?: number;
      CpuQuota?: number;
      CpusetMems?: string;
      MaximumIOps?: number;
      MaxmimumIOBps?: number;
      BlkioWeightDevice?: Array<{}>;
      BlkioDeviceReadBps?: Array<{}>;
      BlkioDeviceReadIOps?: Array<{}>;
      BlkioDeviceWriteBps?: Array<{}>;
      BlkioDeviceWriteIOps?: Array<{}>;
      MemorySwappiness?: number;
      OomKillDisable?: boolean;
      OomScoreAdj?: number;
      PidMode?: string;
      PidsLimit?: number;
      PortBindings?: { [portAndProtocol: string]: Array<{ [index: string]: string }> };
      PublishAllPorts?: boolean;
      Privileged?: boolean;
      ReadonlyRootfs?: boolean;
      Dns?: string[];
      DnsOptions?: string[];
      DnsSearch?: string[];
      ExtraHosts?: any;
      VolumesFrom?: string[];
      CapAdd?: string[];
      CapDrop?: string[];
      GroupAdd?: string[];
      RestartPolicy?: { [index: string]: number | string };
      NetworkMode?: string;
      Devices?: any[];
      Sysctls?: { [index: string]: string };
      Ulimits?: Array<{}>;
      LogConfig?: { [index: string]: string | {} };
      SecurityOpt?: { [index: string]: any };
      CgroupParent?: string;
      VolumeDriver?: string;
      ShmSize?: number;
    };
    NetworkingConfig?: {
      EndpointsConfig?: {
        [index: string]: any;
        isolated_nw?: {
          [index: string]: any;
          IPAMConfig?: {
            IPv4Address?: string;
            IPv6Adress?: string;
            LinkLocalIPs?: string[];
          }
          Links?: string[];
          Aliases?: string[];
        }
      }
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
}

type Callback<T> = (error?: any, result?: T) => void;

declare class Dockerode {
  constructor(options?: Dockerode.DockerOptions);

  createContainer(options: Dockerode.ContainerCreateOptions, callback: Callback<Dockerode.Container>): void;
  createContainer(options: Dockerode.ContainerCreateOptions): Promise<Dockerode.Container>;

  createImage(options: {}, callback: Callback<Dockerode.Image>): void;
  createImage(auth: any, options: {}, callback: Callback<Dockerode.Image>): void;
  createImage(options: {}): Promise<Dockerode.Image>;
  createImage(auth: any, options: {}): Promise<Dockerode.Image>;

  loadImage(file: string, options: {}, callback: Callback<any>): void;
  loadImage(file: string, callback: Callback<any>): void;
  loadImage(file: string, options?: {}): Promise<any>;

  importImage(file: string, options: {}, callback: Callback<any>): void;
  importImage(file: string, callback: Callback<any>): void;
  importImage(file: string, options?: {}): Promise<any>;

  checkAuth(options: any, callback: Callback<any>): void;
  checkAuth(options: any): Promise<any>;

  buildImage(file: string | NodeJS.ReadableStream | Dockerode.ImageBuildContext, options: {}, callback: Callback<any>): void;
  buildImage(file: string | NodeJS.ReadableStream | Dockerode.ImageBuildContext, callback: Callback<any>): void;
  buildImage(file: string | NodeJS.ReadableStream | Dockerode.ImageBuildContext, options?: {}): Promise<any>;

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

  listVolumes(options: {}, callback: Callback<any[]>): void;
  listVolumes(callback: Callback<any[]>): void;
  listVolumes(options?: {}): Promise<any[]>;

  listNetworks(options: {}, callback: Callback<any[]>): void;
  listNetworks(callback: Callback<any[]>): void;
  listNetworks(options?: {}): Promise<any[]>;

  createSecret(options: {}, callback: Callback<any>): void;
  createSecret(options: {}): Promise<any>;

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

  version(callback: Callback<any>): void;
  version(): Promise<any>;

  ping(callback: Callback<any>): void;
  ping(): Promise<any>;

  getEvents(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
  getEvents(callback: Callback<NodeJS.ReadableStream>): void;
  getEvents(options?: {}): Promise<NodeJS.ReadableStream>;

  pull(repoTag: string, options: {}, callback: Callback<any>, auth?: {}): Dockerode.Image;
  pull(repoTag: string, options: {}, auth?: {}): Promise<any>;

  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, createOptions: {}, startOptions: {}, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, startOptions: {}, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, createOptions: {}, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, createOptions?: {}, startOptions?: {}): Promise<any>;

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
