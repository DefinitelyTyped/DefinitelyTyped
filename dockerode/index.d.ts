// Type definitions for dockerode 2.3
// Project: https://github.com/apocas/dockerode
// Definitions by: Carl Winkler <https://github.com/seikho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';
import * as events from 'events';


declare namespace Dockerode {
  interface Container {
    inspect(options: {}, callback: Callback<ContainerInspectInfo>): void;
    inspect(callback: Callback<ContainerInspectInfo>): void;
    inspect(options?: {}): { id: string };

    rename(options: {}, callback: Callback<any>): void;

    update(options: {}, callback: Callback<any>): void;

    top(options: {}, callback: Callback<any>): void;
    top(callback: Callback<any>): void;

    changes(callback: Callback<any>): void;

    export(callback: Callback<NodeJS.ReadableStream>): void;

    start(options: {}, callback: Callback<any>): void;
    start(callback: Callback<any>): void;

    pause(options: {}, callback: Callback<any>): void;
    pause(callback: Callback<any>): void;

    unpause(options: {}, callback: Callback<any>): void;
    unpause(callback: Callback<any>): void;

    exec(options: {}, callback: Callback<any>): void;

    commit(options: {}, callback: Callback<any>): void;
    commit(callback: Callback<any>): void;

    stop(options: {}, callback: Callback<any>): void;
    stop(callback: Callback<any>): void;

    restart(options: {}, callback: Callback<any>): void;
    restart(callback: Callback<any>): void;

    kill(options: {}, callback: Callback<any>): void;
    kill(callback: Callback<any>): void;

    resize(options: {}, callback: Callback<any>): void;
    resize(callback: Callback<any>): void;

    wait(callback: Callback<any>): void;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;

    /** Deprecated since RAPI v1.20 */
    copy(options: {}, callback: Callback<any>): void;
    /** Deprecated since RAPI v1.20 */
    copy(callback: Callback<any>): void;

    getArchive(options: {}, callback: Callback<NodeJS.ReadableStream>): void;

    infoArchive(options: {}, callback: Callback<any>): void;

    /** @param file Filename (will read synchronously), Buffer or stream */
    putArchive(file: string | Buffer | NodeJS.ReadableStream, options: {}, callback: Callback<NodeJS.WritableStream>): void;

    logs(options: { stdout?: boolean, stderr?: boolean, follow?: boolean, since?: number, details?: boolean, tail?: number, timestamps?: boolean }, callback: Callback<NodeJS.ReadableStream>): void;
    logs(callback: Callback<NodeJS.ReadableStream>): void;

    stats(options: {}, callback: Callback<any>): void;
    stats(callback: Callback<any>): void;

    attach(options: {}, callback: Callback<NodeJS.ReadableStream>): void;

    modem: any;
    id?: string;
  }

  interface Image {
    inspect(callback: Callback<ImageInspectInfo>): void;

    history(callback: Callback<any>): void;

    get(callback: Callback<NodeJS.ReadableStream>): void;

    push(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
    push(callback: Callback<NodeJS.ReadableStream>): void;

    tag(options: {}, callback: Callback<any>): void;
    tag(callback: Callback<any>): void;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;

    modem: any;
    id?: string;
  }

  interface Volume {
    inspect(callback: Callback<any>): void;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;

    modem: any;
    name?: string;
  }

  interface Service {
    inspect(callback: Callback<any>): void;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;

    update(options: {}, callback: Callback<any>): void;

    modem: any;
    id?: string;
  }

  interface Task {
    inspect(callback: Callback<any>): void;

    modem: any;
    id?: string;
  }

  interface Node {
    inspect(callback: Callback<any>): void;

    modem: any;
    id?: string;
  }

  interface Network {
    inspect(callback: Callback<any>): void;

    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;

    connect(options: {}, callback: Callback<any>): void;
    connect(callback: Callback<any>): void;

    disconnect(options: {}, callback: Callback<any>): void;
    disconnect(callback: Callback<any>): void;

    modem: any;
    id?: string;
  }

  interface Exec {
    inspect(callback: Callback<any>): void;

    start(options: {}, callback: Callback<any>): void;

    resize(options: {}, callback: Callback<any>): void;

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
      }
    };
  }

  interface HostConfig {
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

  interface DockerOptions {
    socketPath?: string;
    host?: string;
    port?: number;
    ca?: string;
    cert?: string;
    key?: string;
    protocol?: "https" | "http";
    timeout?: number;
  }
}

type Callback<T> = (error?: any, result?: T) => void;

declare class Dockerode {
  constructor(options?: Dockerode.DockerOptions);

  createContainer(options: Dockerode.ContainerCreateOptions, callback: Callback<Dockerode.Container>): void;

  createImage(options: {}, callback: Callback<Dockerode.Image>): void;
  createImage(auth: any, options: {}, callback: Callback<Dockerode.Image>): void;

  loadImage(file: string, options: {}, callback: Callback<any>): void;
  loadImage(file: string, callback: Callback<any>): void;

  importImage(file: string, options: {}, callback: Callback<any>): void;
  importImage(file: string, callback: Callback<any>): void;

  checkAuth(options: any, callback: Callback<any>): void;

  buildImage(file: string | NodeJS.ReadableStream, options: {}, callback: Callback<any>): void;
  buildImage(file: string | NodeJS.ReadableStream, callback: Callback<any>): void;

  getContainer(id: string): Dockerode.Container;

  getImage(name: string): Dockerode.Image;

  getVolume(name: string): Dockerode.Volume;

  getService(id: string): Dockerode.Service;

  getTask(id: string): Dockerode.Task;

  getNode(id: string): Dockerode.Node;

  getNetwork(id: string): Dockerode.Network;

  getExec(id: string): Dockerode.Exec;

  listContainers(options: {}, callback: Callback<Dockerode.ContainerInfo[]>): void;
  listContainers(callback: Callback<Dockerode.ContainerInfo[]>): void;

  listImages(options: {}, callback: Callback<Dockerode.ImageInfo[]>): void;
  listImages(callback: Callback<Dockerode.ImageInfo[]>): void;

  listServices(options: {}, callback: Callback<any[]>): void;
  listServices(callback: Callback<any[]>): void;

  listNodes(options: {}, callback: Callback<any[]>): void;
  listNodes(callback: Callback<any[]>): void;

  listTasks(options: {}, callback: Callback<any[]>): void;
  listTasks(callback: Callback<any[]>): void;

  listVolumes(options: {}, callback: Callback<any[]>): void;
  listVolumes(callback: Callback<any[]>): void;

  listNetworks(options: {}, callback: Callback<any[]>): void;
  listNetworks(callback: Callback<any[]>): void;

  createVolume(options: {}, callback: Callback<any>): void;

  createService(options: {}, callback: Callback<any>): void;

  createNetwork(options: {}, callback: Callback<any>): void;

  searchImages(options: {}, callback: Callback<any>): void;

  info(callback: Callback<any>): void;

  version(callback: Callback<any>): void;

  ping(callback: Callback<any>): void;

  getEvents(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
  getEvents(callback: Callback<NodeJS.ReadableStream>): void;

  pull(repoTag: string, options: {}, callback: Callback<any>, auth?: {}): Dockerode.Image;

  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, createOptions: {}, startOptions: {}, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, startOptions: {}, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, callback: Callback<any>): events.EventEmitter;
  run(image: string, cmd: string[], outputStream: NodeJS.WritableStream, createOptions: {}, callback: Callback<any>): events.EventEmitter;

  swarmInit(options: {}, callback: Callback<any>): void;

  swarmJoin(options: {}, callback: Callback<any>): void;

  swarmLeave(options: {}, callback: Callback<any>): void;

  swarmUpdate(options: {}, callback: Callback<any>): void;

  modem: any;
}

export = Dockerode;
