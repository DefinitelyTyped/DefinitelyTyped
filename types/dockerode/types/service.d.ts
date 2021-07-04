import * as DockerModem from 'docker-modem';

import { AuthConfigData, Callback, LogsOptions, ObjectVersion } from './common';
import { Spec as TaskSpec } from './task';
import { AttachmentConfig } from './network';

declare namespace Service {
    interface Info {
        ID?: string;
        Version?: ObjectVersion;
        CreatedAt?: string;
        UpdatedAt?: string;
        Spec?: Spec;
        Endpoint?: {
            Spec?: EndpointSpec;
            Ports?: EndpointPortConfig[];
            VirtualIPs?: Array<{
                NetworkID?: string;
                Addr?: string;
            }>;
        };
        UpdateStatus?: {
            State?: 'updating' | 'paused' | 'completed';
            StartedAt?: string;
            CompletedAt?: string;
            Message?: string;
        };
        ServiceStatus?: {
            RunningTasks?: number;
            DesiredTasks?: number;
            CompletedTasks?: number;
        };
        JobStatus?: {
            JobIteration?: ObjectVersion;
            LastExecution?: string;
        };
    }

    interface UpdateOptions {
        version: number;
        registryAuthFrom?: string;
        rollback?: string;
        authconfig?: AuthConfigData;
        Name?: string;
        Labels?: Record<string, string>;
        TaskTemplate?: TaskSpec;
        Mode?: {
            Replicated?: {
                Replicas?: number;
            };
            Global?: Record<string, any>;
            ReplicatedJob?: {
                MaxConcurrent?: number;
                TotalCompletions?: number;
            };
            GlobalJob?: Record<string, any>;
        };
        UpdateConfig?: {
            Parallelism?: number;
            Delay?: number;
            FailureAction?: 'continue' | 'pause' | 'rollback';
            Monitor?: number;
            MaxFailureRatio?: number;
            Order?: 'stop-first' | 'start-first';
        };
        RollbackConfig?: {
            Parallelism?: number;
            Delay?: number;
            FailureAction?: 'continue' | 'pause';
            Monitor?: number;
            MaxFailureRatio?: number;
            Order?: 'stop-first' | 'start-first';
        };
        Networks?: AttachmentConfig[];
        EndpointSpec?: EndpointSpec;
    }

    interface UpdateInfo {
        Warnings?: string[];
    }

    interface ListOptions {
        filters?: ListFilters;
    }

    type ListFilters =
        | string
        | {
              id?: string[];
              label?: string[];
              mode?: Array<'replicated' | 'global'>;
              name?: string[];
          };

    interface CreateOptions {
        Name?: string;
        Labels?: Record<string, string>;
        TaskTemplate?: TaskSpec;
        Mode?: {
            Replicated?: { Replicas?: number };
            Global?: Record<string, any>;
            ReplicatedJob?: {
                MaxConcurrent?: number;
                TotalCompletions?: number;
            };
            GlobalJob?: Record<string, any>;
        };
        UpdateConfig?: {
            Parallelism?: number;
            Delay?: number;
            FailureAction?: 'continue' | 'pause' | 'rollback';
            Monitor?: number;
            MaxFailureRatio?: number;
            Order?: 'stop-first' | 'start-first';
        };
        RollbackConfig?: {
            Parallelism?: number;
            Delay?: number;
            FailureAction?: 'continue' | 'pause';
            Monitor?: number;
            MaxFailureRatio?: number;
            Order?: 'stop-first' | 'start-first';
        };
        Networks?: NetworkAttachmentConfig[];
        EndpointSpec?: EndpointSpec;
    }

    interface NetworkAttachmentConfig {
        Target?: string;
        Aliases?: string[];
        DriverOpts?: Record<string, string>;
    }

    interface Spec {
        Name?: string;
        Labels?: Record<string, string>;
        TaskTemplate?: TaskSpec;
        Mode?: {
            Replicated?: { Replicas?: number };
            Global?: Record<string, any>;
        };
        UpdateConfig?: {
            Parallelism?: number;
            Delay?: number;
            FailureAction?: 'continue' | 'pause' | 'rollback';
            Monitor?: number;
            MaxFailureRatio?: number;
            Order?: 'stop-first' | 'start-first';
        };
        RollbackConfig?: {
            Parallelism?: number;
            Delay?: number;
            FailureAction?: 'continue' | 'pause';
            Monitor?: number;
            MaxFailureRatio?: number;
            Order?: 'stop-first' | 'start-first';
        };
        Networks?: Array<{
            Target?: string;
            Aliases?: string[];
        }>;
        EndpointSpec?: EndpointSpec;
    }

    interface EndpointSpec {
        Mode?: 'vip' | 'dnsrr';
        Ports?: EndpointPortConfig[];
    }

    interface EndpointPortConfig {
        Name?: string;
        Protocol?: 'tcp' | 'udp' | 'sctp';
        TargetPort?: number;
        PublishedPort?: number;
        PublishMode?: 'ingress' | 'host';
    }
}

declare class Service {
    constructor(modem: DockerModem, id: string);

    modem: DockerModem;
    id: string;

    inspect(callback: Callback<Service.Info>): void;
    inspect(): Promise<Service.Info>;

    remove(options: {}, callback: Callback<void>): void;
    remove(callback: Callback<void>): void;
    remove(options?: {}): Promise<void>;

    update(options: Service.UpdateOptions, callback: Callback<Service.UpdateInfo>): void;
    update(options: Service.UpdateOptions): Promise<Service.UpdateInfo>;

    logs(options: LogsOptions, callback: Callback<NodeJS.ReadableStream>): void;
    logs(callback: Callback<NodeJS.ReadableStream>): void;
    logs(options?: LogsOptions): Promise<NodeJS.ReadableStream>;
}

export = Service;
