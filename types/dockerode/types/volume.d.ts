import * as DockerModem from 'docker-modem';

import { Callback } from './common';

declare namespace Volume {
    interface Info {
        Name: string;
        Driver: string;
        Mountpoint: string;
        CreatedAt?: string;
        Status?: Record<string, any>;
        Labels: Record<string, string>;
        Scope: 'local' | 'global';
        Options: Record<string, string>;
        UsageData?: { Size: number; RefCount: number };
    }

    interface RemoveOptions {
        force?: boolean;
    }

    interface PruneOptions {
        filters?: PruneFilters;
    }

    type PruneFilters =
        | string
        | {
              label?: string;
          };

    interface PruneInfo {
        VolumesDeleted: string[];
        SpaceReclaimed: number;
    }

    interface ListOptions {
        filters?: ListFilters;
    }

    type ListFilters =
        | string
        | {
              dangling?: Array<boolean | number>;
              driver?: string[];
              label?: string[];
              name?: string[];
          };

    interface ListInfo {
        Volumes: Info[];
        Warnings: string[];
    }

    interface CreateOptions {
        Name?: string;
        Driver?: string;
        DriverOpts?: Record<string, string>;
        Labels?: Record<string, string>;
    }
}

declare class Volume {
    constructor(modem: DockerModem, name: string);

    modem: DockerModem;
    name: string;

    inspect(callback: Callback<Volume.Info>): void;
    inspect(): Promise<Volume.Info>;

    remove(options: Volume.RemoveOptions, callback: Callback<void>): void;
    remove(callback: Callback<void>): void;
    remove(options?: Volume.RemoveOptions): Promise<void>;
}

export = Volume;
