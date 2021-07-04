import { ObjectVersion, TLSInfo } from './common';

export namespace Swarm {
    interface Info {
        ID?: string;
        Version?: ObjectVersion;
        CreatedAt?: string;
        UpdatedAt?: string;
        Spec?: Spec;
        TLSInfo?: TLSInfo;
        RootRotationInProgress?: boolean;
        JoinTokens?: JoinTokens;
    }

    interface Spec {
        Name?: string;
        Labels?: Record<string, string>;
        Orchestration?: {
            TaskHistoryRetentionLimit?: number;
        };
        Raft?: {
            SnapshotInterval?: number;
            KeepOldSnapshots?: number;
            LogEntriesForSlowFollowers?: number;
            ElectionTick?: number;
            HeartbeatTick?: number;
        };
        Dispatcher?: {
            HeartbeatPeriod?: number;
        };
        CAConfig?: {
            NodeCertExpiry?: number;
            ExternalCAs?: Array<{
                Protocol?: 'cfssl';
                URL?: string;
                Options?: Record<string, string>;
                CACert?: string;
            }>;
            SigningCACert?: string;
            SigningCAKey?: string;
            ForceRotate?: number;
        };
        EncryptionConfig?: {
            AutoLockManagers?: boolean;
        };
        TaskDefaults?: {
            LogDriver?: {
                Name?: string;
                Options?: Record<string, string>;
            };
        };
    }

    interface InitOptions {
        ListenAddr?: string;
        AdvertiseAddr?: string;
        DataPathAddr?: string;
        ForceNewCluster?: boolean;
        Spec?: Spec;
    }

    interface JoinOptions {
        ListenAddr?: string;
        AdvertiseAddr?: string;
        DataPathAddr?: string;
        RemoteAddrs?: string;
        JoinToken?: string;
    }

    interface LeaveOptions {
        force?: boolean;
    }

    interface UpdateOptions extends Spec {
        version: number;
        rotateWorkerToken?: boolean;
        rotateManagerToken?: boolean;
        rotateManagerUnlockKey?: boolean;
    }

    interface JoinTokens {
        Worker?: string;
        Manager?: string;
    }

    interface ClusterInfo {
        ID?: string;
        Version?: ObjectVersion;
        CreatedAt?: string;
        UpdatedAt?: string;
        Spec?: Spec;
        TLSInfo?: TLSInfo;
        RootRotationInProgress?: boolean;
    }
}
