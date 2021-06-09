import * as DockerModem from 'docker-modem';

import { AuthConfigData, Callback } from './common';

declare namespace Plugin {
    interface Info {
        Id?: string;
        Name: string;
        Enabled: boolean;
        Settings: {
            Mounts: Mount[];
            Env: string[];
            Args: string[];
            Devices: Device[];
        };
        PluginReference?: string;
        Config: {
            DockerVersion?: string;
            Description: string;
            Documentation: string;
            Interface: {
                Types: InterfaceType[];
                Socket: string;
                ProtocolScheme?: '' | 'moby.plugins.http/v1';
            };
            Entrypoint: string[];
            WorkDir: string;
            User?: {
                UID?: number;
                GID?: number;
            };
            Network: {
                Type: string;
            };
            Linux: {
                Capabilities: string[];
                AllowAllDevices: boolean;
                Devices: Device[];
            };
            PropagatedMount: string;
            IpcHost: boolean;
            PidHost: boolean;
            Mounts: Mount[];
            Env: Env[];
            Args: {
                Name: string;
                Description: string;
                Settable: string[];
                Value: string[];
            };
            rootfs?: {
                type?: string;
                diff_ids?: string[];
            };
        };
    }

    interface RemoveOptions {
        force?: boolean;
    }

    type Privileges = Array<{
        Name?: string;
        Description?: string;
        Value?: string[];
    }>;

    interface PullOptions {
        remote?: string;
        name?: string;
        _body?: Array<{
            Name?: string;
            Description?: string;
            Value?: string[];
        }>;
        authconfig?: AuthConfigData;
    }

    interface EnableOptions {
        timeout?: number;
    }

    interface UpgradeOptions {
        remote: string;
        _body?: Array<{
            Name?: string;
            Description?: string;
            Value?: string[];
        }>;
        authconfig?: AuthConfigData;
    }

    interface ListOptions {
        filters?: ListFilters;
    }

    type ListFilters =
        | string
        | {
              capability?: string[];
              enable?: boolean[];
          };

    interface Device {
        Name: string;
        Description: string;
        Settable: string[];
        Path: string;
    }

    interface Env {
        Name: string;
        Description: string;
        Settable: string[];
        Value: string;
    }

    interface InterfaceType {
        Prefix: string;
        Capability: string;
        Version: string;
    }

    interface Mount {
        Name: string;
        Description: string;
        Settable: string[];
        Source: string;
        Destination: string;
        Type: string;
        Options: string[];
    }
}

declare class Plugin {
    constructor(modem: DockerModem, name: string, remote?: string);

    modem: DockerModem;
    name: string;
    remote: string;

    inspect(callback: Callback<Plugin.Info>): void;
    inspect(): Promise<Plugin.Info>;

    remove(options: Plugin.RemoveOptions, callback: Callback<Plugin.Info>): void;
    remove(callback: Callback<Plugin.Info>): void;
    remove(options?: Plugin.RemoveOptions): Promise<Plugin.Info>;

    privileges(callback: Callback<Plugin.Privileges>): void;
    privileges(): Promise<Plugin.Privileges>;

    pull(options: Plugin.PullOptions, callback: Callback<NodeJS.ReadableStream>): void;
    pull(options: Plugin.PullOptions): Promise<NodeJS.ReadableStream>;

    enable(options: Plugin.EnableOptions, callback: Callback<void>): void;
    enable(callback: Callback<void>): void;
    enable(options?: Plugin.EnableOptions): Promise<void>;

    disable(options: {}, callback: Callback<void>): void;
    disable(callback: Callback<void>): void;
    disable(options?: {}): Promise<void>;

    push(options: {}, callback: Callback<void>): void;
    push(callback: Callback<void>): void;
    push(options?: {}): Promise<void>;

    configure(options: string[], callback: Callback<void>): void;
    configure(callback: Callback<void>): void;
    configure(options?: string[]): Promise<void>;

    upgrade(auth: AuthConfigData, options: Plugin.UpgradeOptions, callback: Callback<void>): void;
    upgrade(options: Plugin.UpgradeOptions, callback: Callback<void>): void;
    upgrade(auth: AuthConfigData, options: Plugin.UpgradeOptions): Promise<void>;
}

export = Plugin;
