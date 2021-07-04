import * as DockerModem from 'docker-modem';
import { Duplex } from 'stream';

import { Callback, ResizeOptions } from './common';

declare namespace Exec {
    interface Info {
        CanRemove?: boolean;
        DetachKeys?: string;
        ID?: string;
        Running?: boolean;
        ExitCode?: number;
        ProcessConfig?: ProcessConfig;
        OpenStdin?: boolean;
        OpenStderr?: boolean;
        OpenStdout?: boolean;
        ContainerID?: string;
        Pid?: number;
    }

    interface StartOptions {
        // hijack and stdin are used by docker-modem
        hijack?: boolean;
        stdin?: boolean;
        // Detach and Tty are used by Docker's API
        Detach?: boolean;
        Tty?: boolean;
    }

    interface ProcessConfig {
        privileged?: boolean;
        user?: string;
        tty?: boolean;
        entrypoint?: string;
        arguments?: string[];
    }
}

declare class Exec {
    constructor(modem: DockerModem, id: string);

    modem: DockerModem;
    id: string;

    inspect(callback: Callback<Exec.Info>): void;
    inspect(): Promise<Exec.Info>;

    start(options: Exec.StartOptions, callback: Callback<Duplex>): void;
    start(options: Exec.StartOptions): Promise<Duplex>;

    resize(options: ResizeOptions, callback: Callback<void>): void;
    resize(options: ResizeOptions): Promise<void>;
}

export = Exec;
