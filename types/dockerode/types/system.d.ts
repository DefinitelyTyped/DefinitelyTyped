import { GenericResources } from './common';
import { Info as VolumeInfo } from './volume';
import { Summary as ContainerSummary } from './container';
import { Summary as ImageSummary } from './image';
import { Swarm } from './swarm';

export namespace System {
    interface Version {
        Platform?: { Name: string };
        Components?: Array<{
            Name: string;
            Version: string;
            Details?: Record<string, any>;
        }>;
        Version?: string;
        ApiVersion?: string;
        MinAPIVersion?: string;
        GitCommit?: string;
        GoVersion?: string;
        Os?: string;
        Arch?: string;
        KernelVersion?: string;
        Experimental?: boolean;
        BuildTime?: string;
    }

    interface DataUsage {
        LayersSize?: number;
        Images?: ImageSummary[];
        Containers?: ContainerSummary[];
        Volumes?: VolumeInfo[];
        BuildCache?: BuildCache[];
    }

    interface BuildCache {
        ID?: string;
        Parent?: string;
        Type?: string;
        Description?: string;
        InUse?: boolean;
        Shared?: boolean;
        Size?: number;
        CreatedAt?: string;
        LastUsedAt?: string;
        UsageCount?: number;
    }

    interface Info {
        ID?: string;
        Containers?: number;
        ContainersRunning?: number;
        ContainersPaused?: number;
        ContainersStopped?: number;
        Images?: number;
        Driver?: string;
        DriverStatus?: string[][];
        DockerRootDir?: string;
        Plugins?: PluginsInfo;
        MemoryLimit?: boolean;
        SwapLimit?: boolean;
        KernelMemory?: boolean;
        CpuCfsPeriod?: boolean;
        CpuCfsQuota?: boolean;
        CPUShares?: boolean;
        CPUSet?: boolean;
        PidsLimit?: boolean;
        OomKillDisable?: boolean;
        IPv4Forwarding?: boolean;
        BridgeNfIptables?: boolean;
        BridgeNfIp6tables?: boolean;
        Debug?: boolean;
        NFd?: number;
        NGoroutines?: number;
        SystemTime?: string;
        LoggingDriver?: string;
        CgroupDriver?: 'cgroupfs' | 'systemd' | 'none';
        CgroupVersion?: '1' | '2';
        NEventsListener?: number;
        KernelVersion?: string;
        OperatingSystem?: string;
        OSVersion?: string;
        OSType?: string;
        Architecture?: string;
        NCPU?: number;
        MemTotal?: number;
        IndexServerAddress?: string;
        RegistryConfig?: RegistryServiceConfig;
        GenericResources?: GenericResources;
        HttpProxy?: string;
        HttpsProxy?: string;
        NoProxy?: string;
        Name?: string;
        Labels?: string[];
        ExperimentalBuild?: boolean;
        ServerVersion?: string;
        ClusterStore?: string;
        ClusterAdvertise?: string;
        Runtimes?: Record<string, Runtime>;
        DefaultRuntime?: string;
        Swarm?: SwarmInfo;
        LiveRestoreEnabled?: boolean;
        Isolation?: 'default' | 'hyperv' | 'process';
        InitBinary?: string;
        ContainerdCommit?: Commit;
        RuncCommit?: Commit;
        InitCommit?: Commit;
        SecurityOptions?: string[];
        ProductLicense?: string;
        DefaultAddressPools?: Array<{ Base?: string; Size?: number }>;
        Warnings?: string[];
    }

    interface AuthInfo {
        Status: string;
        IdentityToken?: string;
    }

    interface EventsOptions {
        since?: string;
        until?: string;
        filters?: EventsFilters;
    }

    type EventsFilters =
        | string
        | {
              config?: string[];
              container?: string[];
              daemon?: string[];
              event?: string[];
              image?: string[];
              label?: string[];
              network?: string[];
              node?: string[];
              plugin?: string[];
              scope?: string[];
              secret?: string[];
              service?: string[];
              type?: Array<
                  | 'container'
                  | 'image'
                  | 'volume'
                  | 'network'
                  | 'daemon'
                  | 'plugin'
                  | 'node'
                  | 'service'
                  | 'secret'
                  | 'config'
              >;
              volume?: string[];
          };

    interface EventsInfo {
        Type?: string;
        Action?: string;
        Actor?: { ID?: string; Attributes?: Record<string, string> };
        time?: number;
        timeNano?: number;
    }

    interface SwarmInfo {
        NodeID?: string;
        NodeAddr?: string;
        LocalNodeState?: LocalNodeState;
        ControlAvailable?: boolean;
        Error?: string;
        RemoteManagers?: PeerNode[];
        Nodes?: number;
        Managers?: number;
        Cluster?: Swarm.ClusterInfo;
    }

    type LocalNodeState = '' | 'inactive' | 'pending' | 'active' | 'error' | 'locked';

    interface Commit {
        ID?: string;
        Expected?: string;
    }

    interface RegistryServiceConfig {
        AllowNondistributableArtifactsCIDRs?: string[];
        AllowNondistributableArtifactsHostnames?: string[];
        InsecureRegistryCIDRs?: string[];
        IndexConfigs?: Record<string, IndexInfo>;
        Mirrors?: string[];
    }

    interface IndexInfo {
        Name?: string;
        Mirrors?: string[];
        Secure?: boolean;
        Official?: boolean;
    }

    interface PeerNode {
        NodeID?: string;
        Addr?: string;
    }

    interface PluginsInfo {
        Volume?: string[];
        Network?: string[];
        Authorization?: string[];
        Log?: string[];
    }

    interface Runtime {
        path?: string;
        runtimeArgs?: string[];
    }
}
