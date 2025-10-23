import * as Dockerode from "dockerode";

declare namespace DockerodeCompose {
    interface ComposeDownOptions {
        volumes: boolean;
    }

    interface ComposeDownOutput {
        file: string;
        services: [];
        networks: [];
        volumes: [] | undefined;
    }

    interface ComposeUpOptions {
        verbose: boolean;
    }

    interface ComposeUpOutput {
        file: string;
        secrets: any[];
        volumes: Dockerode.VolumeCreateResponse[];
        configs: any[];
        networks: Network[];
        services: Dockerode.Container[];
    }

    interface ComposePullOptions {
        verbose: boolean;
        streams: boolean;
    }

    interface Network {
        name: string;
        network: Dockerode.Network;
    }
}

declare class Compose {
    constructor(dockerode: Dockerode, file: string, projectName: string);

    /* @async */
    down(options?: DockerodeCompose.ComposeDownOptions): Promise<DockerodeCompose.ComposeDownOutput>;

    /* @async */
    up(options?: DockerodeCompose.ComposeUpOptions): Promise<DockerodeCompose.ComposeUpOutput>;

    /* @async */
    pull(serviceN?: string, options?: DockerodeCompose.ComposePullOptions): Promise<any[]>;
}

export = Compose;
