/// <reference types="node" />

import * as Dockerode from "dockerode";
import * as events from "events";

declare namespace DockerEvents {
    interface DockerEventsOptions {
        docker: Dockerode;
    }
}

declare class DockerEvents extends events.EventEmitter {
    constructor(options?: DockerEvents.DockerEventsOptions);

    start(): void;
    stop(): void;
}

export = DockerEvents;
