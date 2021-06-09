import * as DockerModem from 'docker-modem';

import {
    Callback,
    GenericResources,
    HealthConfig,
    LogsOptions,
    Mount,
    ObjectVersion,
    Platform,
    ResourceObject,
} from './common';
import { AttachmentConfig } from './network';

declare namespace Task {
    interface Info {
        ID?: string;
        Version?: ObjectVersion;
        CreatedAt?: string;
        UpdatedAt?: string;
        Name?: string;
        Labels?: Record<string, string>;
        Spec?: Spec;
        ServiceID?: string;
        Slot?: number;
        NodeID?: string;
        AssignedGenericResources?: GenericResources;
        Status?: {
            Timestamp?: string;
            State?: TaskState;
            Message?: string;
            Err?: string;
            ContainerStatus?: {
                ContainerID?: string;
                PID?: number;
                ExitCode?: number;
            };
        };
        DesiredState?: TaskState;
        JobIteration?: ObjectVersion;
    }

    interface Spec {
        PluginSpec?: {
            Name?: string;
            Remote?: string;
            Disabled?: boolean;
            PluginPrivilege?: Array<{
                Name?: string;
                Description?: string;
                Value?: string[];
            }>;
        };
        ContainerSpec?: {
            Image?: string;
            Labels?: Record<string, string>;
            Command?: string[];
            Args?: string[];
            Hostname?: string;
            Env?: string[];
            Dir?: string;
            User?: string;
            Groups?: string[];
            Privileges?: {
                CredentialSpec?: {
                    Config?: string;
                    File?: string;
                    Registry?: string;
                };
                SELinuxContext?: {
                    Disable?: boolean;
                    User?: string;
                    Role?: string;
                    Type?: string;
                    Level?: string;
                };
            };
            TTY?: boolean;
            OpenStdin?: boolean;
            ReadOnly?: boolean;
            Mounts?: Mount[];
            StopSignal?: string;
            StopGracePeriod?: number; // int64
            HealthCheck?: /* A test to perform to check that the container is healthy. */ HealthConfig;
            Hosts?: string[];
            DNSConfig?: {
                Nameservers?: string[];
                Search?: string[];
                Options?: string[];
            };
            Secrets?: Array<{
                File?: {
                    Name?: string;
                    UID?: string;
                    GID?: string;
                    Mode?: number;
                };
                SecretID?: string;
                SecretName?: string;
            }>;
            Configs?: Array<{
                File?: {
                    Name?: string;
                    UID?: string;
                    GID?: string;
                    Mode?: number;
                };
                Runtime?: Record<string, any>;
                ConfigID?: string;
                ConfigName?: string;
            }>;
            Isolation?: 'default' | 'process' | 'hyperv';
            Init?: boolean;
            Sysctls?: Record<string, string>;
            CapabilityAdd?: string[];
            CapabilityDrop?: string[];
            Ulimits?: Array<{ Name?: string; Soft?: number; Hard?: number }>;
        };
        NetworkAttachmentSpec?: {
            ContainerID?: string;
        };
        Resources?: {
            Limits?: Limit;
            Reservation?: ResourceObject;
        };
        RestartPolicy?: {
            Condition?: 'none' | 'on-failure' | 'any';
            Delay?: number;
            MaxAttempts?: number;
            Window?: number;
        };
        Placement?: {
            Constraints?: string[];
            Preferences?: Array<{ Spread?: { SpreadDescriptor?: string } }>;
            MaxReplicas?: number;
            Platforms?: Platform[];
        };
        ForceUpdate?: number;
        Runtime?: string;
        Networks?: AttachmentConfig[];
        LogDriver?: {
            Name?: string;
            Options?: Record<string, string>;
        };
    }

    interface Limit {
        NanoCPUs?: number;
        MemoryBytes?: number;
        Pids?: number;
    }

    interface ListOptions {
        filters?: ListFilters;
    }

    type ListFilters =
        | string
        | {
              'desired-state'?: Array<'running' | 'shutdown' | 'accepted'>;
              id?: string[];
              label?: string[];
              name?: string[];
              node?: string[];
              service?: string[];
          };

    type TaskState =
        | 'new'
        | 'allocated'
        | 'pending'
        | 'assigned'
        | 'accepted'
        | 'preparing'
        | 'ready'
        | 'starting'
        | 'running'
        | 'complete'
        | 'shutdown'
        | 'failed'
        | 'rejected'
        | 'remove'
        | 'orphaned';
}

declare class Task {
    constructor(modem: DockerModem, id: string);

    modem: DockerModem;
    id: string;

    inspect(callback: Callback<Task.Info>): void;
    inspect(): Promise<Task.Info>;

    logs(options: LogsOptions, callback: Callback<NodeJS.ReadableStream>): void;
    logs(callback: Callback<NodeJS.ReadableStream>): void;
    logs(options?: LogsOptions): Promise<NodeJS.ReadableStream>;
}

export = Task;
