import * as DockerModem from 'docker-modem';

import { Callback, Driver, ObjectVersion } from './common';

declare namespace Config {
    interface Info {
        ID?: string;
        Version?: ObjectVersion;
        CreatedAt?: string;
        UpdatedAt?: string;
        Spec?: Spec;
    }

    interface UpdateOptions extends Spec {
        version: number;
    }

    interface ListOptions {
        filters?: ListFilters;
    }

    type ListFilters =
        | string
        | {
              id?: string[];
              label?: string[];
              name?: string[];
              names?: string[];
          };

    interface Spec {
        Name?: string;
        Labels?: Record<string, string>;
        Data?: string;
        Templating?: Driver;
    }
}

declare class Config {
    constructor(modem: DockerModem, id: string);

    modem: DockerModem;
    id: string;

    inspect(callback: Callback<Config.Info>): void;
    inspect(): Promise<Config.Info>;

    update(options: Config.UpdateOptions, callback: Callback<void>): void;
    update(callback: Callback<void>): void;
    update(options?: Config.UpdateOptions): Promise<void>;

    remove(options: {}, callback: Callback<void>): void;
    remove(callback: Callback<void>): void;
    remove(options?: {}): Promise<void>;
}

export = Config;
