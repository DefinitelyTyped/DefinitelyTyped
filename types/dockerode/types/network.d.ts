import * as DockerModem from 'docker-modem';

import { Callback } from './common';

declare namespace Network {
    interface InspectOptions {
        verbose?: boolean;
        scope?: string;
    }

    interface Info {
        Name?: string;
        Id?: string;
        Created?: string;
        Scope?: string;
        Driver?: string;
        EnableIPv6?: boolean;
        IPAM?: IPAM;
        Internal?: boolean;
        Attachable?: boolean;
        Ingress?: boolean;
        Containers?: Record<string, NetworkContainer>;
        Options?: Record<string, string>;
        Labels?: Record<string, string>;
    }

    interface ConnectOptions {
        Container?: string;
        EndpointConfig?: EndpointSettings;
    }

    interface DisconnectOptions {
        Container?: string;
        Force?: boolean;
    }

    interface ListOptions {
        filters?: ListFilters;
    }

    type ListFilters =
        | string
        | {
              dangling?: Array<boolean | number>;
              driver?: string[];
              id?: string[];
              label?: string[];
              name?: string[];
              scope?: Array<'swarm' | 'global' | 'local'>;
              type?: Array<'custom' | 'builtin'>;
          };

    interface CreateOptions {
        Name: string;
        CheckDuplicate?: boolean;
        Driver?: string;
        Internal?: boolean;
        Attachable?: boolean;
        Ingress?: boolean;
        IPAM?: IPAM;
        EnableIPv6?: boolean;
        Options?: Record<string, string>;
        Labels?: Record<string, string>;
    }

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
        NetworksDeleted: string[];
    }

    // tslint:disable-next-line:interface-name
    interface IPAM {
        Driver?: string;
        Config?: Array<Record<string, string>>;
        Options?: Record<string, string>;
    }

    interface NetworkContainer {
        Name?: string;
        EndpointID?: string;
        MacAddress?: string;
        IPv4Address?: string;
        IPv6Address?: string;
    }

    interface EndpointIPAMConfig {
        IPv4Address?: string;
        IPv6Address?: string;
        LinkLocalIPs?: string[];
    }

    interface EndpointSettings {
        IPAMConfig?: EndpointIPAMConfig;
        Links?: string[];
        Aliases?: string[];
        NetworkID?: string;
        EndpointID?: string;
        Gateway?: string;
        IPAddress?: string;
        IPPrefixLen?: number;
        IPv6Gateway?: string;
        GlobalIPv6Address?: string;
        GlobalIPv6PrefixLen?: number;
        MacAddress?: string;
        DriverOpts?: Record<string, string>;
    }

    interface AttachmentConfig {
        Target?: string;
        Aliases?: string[];
        DriverOpts?: Record<string, string>;
    }
}

declare class Network {
    constructor(modem: DockerModem, id: string);

    modem: DockerModem;
    id: string;

    inspect(options: Network.InspectOptions, callback: Callback<Network.Info>): void;
    inspect(callback: Callback<Network.Info>): void;
    inspect(options?: Network.InspectOptions): Promise<Network.Info>;

    remove(options: {}, callback: Callback<void>): void;
    remove(callback: Callback<void>): void;
    remove(options?: {}): Promise<void>;

    connect(options: Network.ConnectOptions, callback: Callback<void>): void;
    connect(callback: Callback<void>): void;
    connect(options?: Network.ConnectOptions): Promise<void>;

    disconnect(options: Network.DisconnectOptions, callback: Callback<void>): void;
    disconnect(callback: Callback<void>): void;
    disconnect(options?: Network.DisconnectOptions): Promise<void>;
}

export = Network;
