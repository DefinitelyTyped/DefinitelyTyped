import * as DockerModem from 'docker-modem';

import { Callback, ObjectVersion, Platform, ResourceObject, TLSInfo } from './common';

declare namespace Node {
    interface Info {
        ID?: string;
        Version?: ObjectVersion;
        CreatedAt?: string;
        UpdatedAt?: string;
        Spec?: Spec;
        Description?: Description;
        Status?: NodeStatus;
        ManagerStatus?: ManagerStatus;
    }

    interface UpdateOptions extends Spec {
        version: number;
    }

    interface RemoveOptions {
        force?: boolean;
    }

    interface ListOptions {
        filters?: ListFilters;
    }

    type ListFilters =
        | string
        | {
              id?: string[];
              label?: string[];
              membership?: Array<'accepted' | 'pending'>;
              name?: string[];
              'node.label'?: string[];
              role?: Array<'manager' | 'worker'>;
          };

    interface Spec {
        Name?: string;
        Labels?: Record<string, string>;
        Role?: 'worker' | 'manager';
        Availability?: 'active' | 'pause' | 'drain';
    }

    interface Description {
        Hostname?: string;
        Platform?: Platform;
        Resources?: ResourceObject;
        Engine?: EngineDescription;
        TLSInfo?: TLSInfo;
    }

    interface EngineDescription {
        EngineVersion?: string;
        Labels?: Record<string, string>;
        Plugins?: Array<{ Type?: string; Name?: string }>;
    }

    interface ManagerStatus {
        Leader?: boolean;
        Reachability?: Reachability;
        Addr?: string;
    }

    type Reachability = 'unknown' | 'unreachable' | 'reachable';

    interface NodeStatus {
        State?: NodeState;
        Message?: string;
        Addr?: string;
    }

    type NodeState = 'unknown' | 'down' | 'ready' | 'disconnected';
}

declare class Node {
    constructor(modem: DockerModem, id: string);

    modem: DockerModem;
    id: string;

    inspect(callback: Callback<Node.Info>): void;
    inspect(): Promise<Node.Info>;

    update(options: Node.UpdateOptions, callback: Callback<void>): void;
    update(callback: Callback<void>): void;
    update(options?: Node.UpdateOptions): Promise<void>;

    remove(options: Node.RemoveOptions, callback: Callback<void>): void;
    remove(callback: Callback<void>): void;
    remove(options?: Node.RemoveOptions): Promise<void>;
}

export = Node;
