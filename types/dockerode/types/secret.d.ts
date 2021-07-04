import * as DockerModem from 'docker-modem';

import { Callback, Driver, ObjectVersion } from './common';

declare namespace Secret {
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

    interface CreateOptions {
        Name?: string;
        Labels?: Record<string, string>;
        Data?: string;
        Driver?: Driver;
        Templating?: Driver;
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
        Driver?: Driver;
        Templating?: Driver;
    }
}

declare class Secret {
    constructor(modem: DockerModem, id: string);

    modem: DockerModem;
    id: string;

    inspect(callback: Callback<Secret.Info>): void;
    inspect(): Promise<Secret.Info>;

    update(options: Secret.UpdateOptions, callback: Callback<void>): void;
    update(callback: Callback<void>): void;
    update(options?: Secret.UpdateOptions): Promise<void>;

    remove(options: {}, callback: Callback<void>): void;
    remove(callback: Callback<void>): void;
    remove(options?: {}): Promise<void>;
}

export = Secret;
